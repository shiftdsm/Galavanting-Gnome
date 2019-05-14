#ifdef GNOME_DEBUG
#define ADAFRUIT_FONA_DEBUG
#endif

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

#define FONA_RTS 8
#define FONA_PS 9
#define FONA_KEY 10
#define FONA_RX 11
#define FONA_TX 12

SoftwareSerial fonaSS = SoftwareSerial(FONA_TX, FONA_RX);
SoftwareSerial *fonaSerial = &fonaSS;

Adafruit_FONA fona = Adafruit_FONA(FONA_RTS);

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
    
    Serial.println(F("Enabling GPS..."));
    fona.enableGPS(true);
    lcd.clear();
}

static float i = 100.0;

void loop() {
    if (i < 0) {
        i = 100;
    }

    DisplayStatus(i, random(0, 2) ? true : false);
    delay(2000);

    i--;
    // delay(2000);

    // gps_loc_t loc = getGPS(&fona);
    //
    // if (loc.success) {
    //     Serial.print(F("GPS lat:"));
    //     Serial.println(loc.latitude, 6);
    //
    //     Serial.print(F("GPS long:"));
    //     Serial.println(loc.longitude, 6);
    //
    //     Serial.print(F("GPS speed KPH:"));
    //     Serial.println(loc.speed_kph);
    //
    //     Serial.print(F("GPS speed MPH:"));
    //     Serial.println(loc.speed_mph);
    //
    //     Serial.print(F("GPS heading:"));
    //     Serial.println(loc.heading);
    //
    //     Serial.print(F("GPS altitude:"));
    //     Serial.println(loc.altitude);
    // } else {
    //     Serial.println(F("Waiting for FONA GPS fix..."));
    // }
}
