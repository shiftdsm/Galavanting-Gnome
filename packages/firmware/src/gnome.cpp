#include <Arduino.h>
#include <LiquidCrystal.h>
#include <Adafruit_FONA.h>
#include <SoftwareSerial.h>
#include "gps.h"

#define CONTRAST_PIN 9
#define BACKLIGHT_PIN 7
#define CONTRAST 110
#define FONA_RX 0
#define FONA_TX 1
#define FONA_RST 6

SoftwareSerial fonaSS = SoftwareSerial(FONA_TX, FONA_RX);
SoftwareSerial *fonaSerial = &fonaSS;

LiquidCrystal lcd(12, 11, 5, 4, 3, 2, BACKLIGHT_PIN, POSITIVE);
Adafruit_FONA fona = Adafruit_FONA(FONA_RST);

void setup() {
    while (!Serial);

    Serial.begin(115200);
    Serial.println(F("Galavanting Gnome"));

    Serial.println(F("Initialing LCD..."));
    pinMode(CONTRAST_PIN, OUTPUT);
    analogWrite(CONTRAST_PIN, CONTRAST);

    lcd.backlight();
    lcd.begin(16, 2);
    lcd.home();

    pinMode(LED_BUILTIN, OUTPUT);

    Serial.println(F("Initialing FONA... (May take a few seconds)"));
    fonaSerial->begin(4800);
    if (!fona.begin(*fonaSerial)) {
        Serial.println(F("Couldn't find FONA"));
        while(1);
    }
    Serial.println(F("FONA is OK"));

    Serial.println(F("Enabling GPS..."));
    fona.enableGPS(true);
}

void loop() {
    delay(2000);

    gps_loc_t loc = getGPS(&fona);

    if (loc.success) {
        Serial.print(F("GPS lat:"));
        Serial.println(loc.latitude, 6);

        Serial.print(F("GPS long:"));
        Serial.println(loc.longitude, 6);

        Serial.print(F("GPS speed KPH:"));
        Serial.println(loc.speed_kph);

        Serial.print(F("GPS speed MPH:"));
        Serial.println(loc.speed_mph);

        Serial.print(F("GPS heading:"));
        Serial.println(loc.heading);

        Serial.print(F("GPS altitude:"));
        Serial.println(loc.altitude);
    } else {
        Serial.println(F("Waiting for FONA GPS fix..."));
    }
}
