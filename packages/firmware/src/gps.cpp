#include "gps.h"

gps_loc_t getGPS(Adafruit_FONA* fona) {
    gps_loc_t location;
    location.success = fona->getGPS(&location.latitude,
                                    &location.longitude,
                                    &location.speed_kph,
                                    &location.heading,
                                    &location.altitude);
    location.speed_mph = location.speed_kph * 0.621371192;
    return location;
}
