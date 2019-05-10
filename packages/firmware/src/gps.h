#pragma once
#include <Adafruit_FONA.h>

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
