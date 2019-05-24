#ifdef GNOME_DEBUG
#define ADAFRUIT_FONA_DEBUG
#endif
#define ADAFRUIT_FONA_DEBUG

#include <Arduino.h>
#include <LiquidCrystal.h>
#include <Adafruit_FONA.h>
#include <SoftwareSerial.h>
#include "gps.h"
#include "screen.h"
#include "utils.h"

#ifndef GNOME_DEBUG
#undef ADAFRUIT_FONA_DEBUG
#endif
#define ADAFRUIT_FONA_DEBUG

#define FONA_RTS 8
#define FONA_PS 9
#define FONA_KEY 12
#define FONA_RX 10
#define FONA_TX 11

SoftwareSerial fonaSS = SoftwareSerial(FONA_TX, FONA_RX);
SoftwareSerial *fonaSerial = &fonaSS;

Adafruit_FONA fona = Adafruit_FONA(FONA_RTS);

unsigned long DELAY_TIME = 100 * 60; // 1 minute
unsigned long delayStart = 0;
bool delayRunning = false;

void setup() {
    #ifdef GNOME_DEBUG
    #warning "Debug mode is on"
    while (!Serial) {};
    #else
    #warning "Debug mode is off"
    #endif

    Serial.begin(9600);
    Serial.println(F("Galavanting Gnome"));

    pinMode(FONA_KEY, OUTPUT);
    pinMode(FONA_PS, INPUT);

    if (digitalRead(FONA_PS) == LOW) {
        DEBUG_LOG("Restarting");
        digitalWrite(FONA_KEY, HIGH);
        delay(100);
        digitalWrite(FONA_KEY, LOW);
        delay(2000);
        digitalWrite(FONA_KEY, HIGH);
    }

    // Seed with analog noise from unconnected pin
    randomSeed(analogRead(0));

    Serial.println(F("Initialing LCD..."));
    LcdInitialize();
    lcd.println(F("Initializing FONA"));
    delay(10);

    Serial.println(F("Initialing FONA... (May take a few seconds)"));
    fonaSerial->begin(4800);
    if (!fona.begin(*fonaSerial)) {
        lcd.println("!NO FONA FOUND!");
        Serial.println(F("Couldn't find FONA"));
        while(1);
    }
    Serial.println(F("FONA is OK"));

    fonaSerial->println("AT+COPS?");
    fonaSerial->println("AT+CSQ");
    
    Serial.println(F("Enabling GPS..."));
    fona.enableGPS(true);
    lcd.clear();

    delayStart = millis();
    delayRunning = true;
}

void loop() {
    if (delayRunning && ((millis() - delayStart) >= DELAY_TIME)) {
        delayStart += DELAY_TIME;

        sendLocation(&fona);

        uint16_t percentage;
        fona.getBattPercent(&percentage);
        DisplayStatus(percentage, random(0, 2) ? true : false);
    }
}