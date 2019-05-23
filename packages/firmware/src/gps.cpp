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

StaticJsonDocument<JSON_DOC_SIZE> convertLocation(gps_loc_t location) {
    StaticJsonDocument<JSON_DOC_SIZE> doc;

    doc["lat"] = location.latitude;
    doc["lon"] = location.longitude;

    return doc;
}

String writeLocation(gps_loc_t location) {
    auto location_data = convertLocation(location);
    String converted;
    serializeJson(location_data, converted);
    return converted;
}

uint16_t sendLocation(Adafruit_FONA* fona) {
    auto location = getGPS(fona);
    auto converted = writeLocation(location);

    uint16_t status, datalen;
    fona->HTTP_POST_start(POST_URL, F("application/json"),
        (uint8_t *)converted.c_str(), converted.length(), &status, &datalen);
    fona->HTTP_POST_end();

    return status;
}