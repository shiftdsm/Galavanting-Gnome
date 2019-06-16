#include "gps.h"

gps_loc_t getGPS(Adafruit_FONA* fona) {
    gps_loc_t location;
    location.success = fona->getGPS(&location.latitude,
                                    &location.longitude,
                                    &location.speed_kph,
                                    &location.heading,
                                    &location.altitude);

    return location;
}

StaticJsonDocument<JSON_OBJECT_SIZE(6)> convertLocation(gps_loc_t location, uint16_t percentage) {
    StaticJsonDocument<JSON_OBJECT_SIZE(6)> doc;

    doc["lon"] = location.longitude;
    doc["lat"] = location.latitude;
    doc["kph"] = location.speed_kph;
    doc["heading"] = location.heading;
    doc["alt"] = location.altitude;
    doc["bat"] = percentage;

    return doc;
}

String writeLocation(gps_loc_t location, uint16_t percentage) {
    auto location_data = convertLocation(location, percentage);
    String converted;
    serializeJson(location_data, converted);
    serializeJson(location_data, Serial);
    return converted;
}

uint16_t sendLocation(Adafruit_FONA* fona) {
    auto location = getGPS(fona);

    if (!location.success) {
        Serial.println(F("Could not get loc"));

        int8_t stat = fona->GPSstatus();
        if (stat < 0)
            Serial.println(F("Failed to query"));
        if (stat == 0) {
            fona->enableGPS(true);
            Serial.println(F("GPS off"));
        }
        if (stat == 1) Serial.println(F("No fix"));
        if (stat == 2) Serial.println(F("2D fix"));
        if (stat == 3) Serial.println(F("3D fix"));
        return 800;
    }

    uint16_t percentage;
    fona->getBattPercent(&percentage);
    auto converted = writeLocation(location, percentage);

    fona->setGPRSNetworkSettings(F("hologram"));
    fona->enableGPRS(true);

    uint16_t status, datalen;
    fona->HTTP_ssl(true);
    fona->HTTP_POST_start(POST_URL, F("application/json"),
        (uint8_t *)converted.c_str(), converted.length(), &status, &datalen);
    fona->HTTP_POST_end();

    return status;
}
