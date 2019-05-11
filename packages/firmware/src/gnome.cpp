#include <Arduino.h>
#include <LiquidCrystal.h>
#include <Adafruit_FONA.h>
#include <SoftwareSerial.h>
#include "gps.h"
#include "screen.h"

#define FONA_RX 10
#define FONA_TX 11
#define FONA_RTS 8

SoftwareSerial fonaSS = SoftwareSerial(FONA_TX, FONA_RX);
SoftwareSerial *fonaSerial = &fonaSS;

Adafruit_FONA fona = Adafruit_FONA(FONA_RTS);

void setup() {
    while (!Serial);
    
    Serial.begin(9600);
    Serial.println(F("Galavanting Gnome"));
    
    pinMode(0, OUTPUT);
    pinMode(1, OUTPUT);
    digitalWrite(0, LOW);
    digitalWrite(1, LOW);

    // Seed with analog noise from unconnected pin
    randomSeed(analogRead(0));

    Serial.println(F("Initialing LCD..."));
    LcdInitialize();

    // Serial.println(F("Initialing FONA... (May take a few seconds)"));
    // fonaSerial->begin(4800);
    // if (!fona.begin(*fonaSerial)) {
    //     Serial.println(F("Couldn't find FONA"));
    //     while(1);
    // }
    // Serial.println(F("FONA is OK"));
    //
    // Serial.println(F("Enabling GPS..."));
    // fona.enableGPS(true);
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
