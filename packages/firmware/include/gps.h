#pragma once
#include <SoftwareSerial.h>
#include <Adafruit_FONA.h>
#include <ArduinoJson.h>

#define JSON_DOC_SIZE JSON_OBJECT_SIZE(2)
#define POST_URL "https://galavanting-gnome.herokuapp.com/location"

typedef struct {
    float latitude;
    float longitude;
    float speed_kph;
    float heading;
    float speed_mph;
    float altitude;

    boolean success;
} gps_loc_t;

gps_loc_t getGPS(Adafruit_FONA* fona);
StaticJsonDocument<JSON_DOC_SIZE> convertLocation(gps_loc_t location);
String writeLocation(gps_loc_t location);
uint16_t sendLocation(Adafruit_FONA* fona);