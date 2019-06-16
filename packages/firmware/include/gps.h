#pragma once
#include <SoftwareSerial.h>
#include <Adafruit_FONA.h>
#include <ArduinoJson.h>

#define POST_URL "galavanting-gnome.herokuapp.com/locations"

typedef struct {
    float latitude;
    float longitude;
    float speed_kph;
    float heading;
    float altitude;

    boolean success;
} gps_loc_t;

gps_loc_t getGPS(Adafruit_FONA* fona);
StaticJsonDocument<JSON_OBJECT_SIZE(6)> convertLocation(gps_loc_t location, uint16_t percentage);
String writeLocation(gps_loc_t location, uint16_t percentage);
uint16_t sendLocation(Adafruit_FONA* fona);
