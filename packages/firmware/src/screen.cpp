#include "screen.h"

void LcdInitialize() {
    lcd.backlight();
    lcd.begin(16, 2);
    lcd.home();

    lcd.createChar(BAT_EMPTY, empty);
    lcd.createChar(BAT_ONE_QUARTERS, one_quarter);
    lcd.createChar(BAT_TWO_QUARTERS, two_quarters);
    lcd.createChar(BAT_THREE_QUARTERS, three_quarters);
    lcd.createChar(BAT_FULL, full);
    lcd.createChar(GPS_LOCK, gps_lock);
    lcd.createChar(GPS_NO_LOCK, gps_no_lock);
}

void DisplayStatus(double percentage, bool gps_lock) {
    Serial.print(F("Battery: "));
    Serial.println(percentage);
    lcd.clear();
    lcd.home();
    lcd.print(F("GalavantingGnome"));

    lcd.setCursor(0, 1);
    if (percentage >= 98.0) {
        lcd.write(BAT_FULL);
    } else if (percentage >= 75.0) {
        lcd.write(BAT_THREE_QUARTERS);
    } else if (percentage >= 50.0) {
        lcd.write(BAT_TWO_QUARTERS);
    } else if (percentage >= 25.0) {
        lcd.write(BAT_ONE_QUARTERS);
    } else {
        lcd.write(BAT_EMPTY);
    }

    lcd.print(F(" "));
    lcd.print(percentage, 1);
    lcd.print(F("% "));

    if (gps_lock) {
        lcd.write(GPS_LOCK);
    } else {
        lcd.write(GPS_NO_LOCK);
    }
}
