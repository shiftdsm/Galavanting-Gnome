#include <Arduino.h>
#include <LiquidCrystal.h>

#define CONTRAST_PIN 9
#define BACKLIGHT_PIN 7
#define CONTRAST 110

LiquidCrystal lcd(12, 11, 5, 4, 3, 2, BACKLIGHT_PIN, POSITIVE);

void setup() {
    pinMode(CONTRAST_PIN, OUTPUT);
    analogWrite(CONTRAST_PIN, CONTRAST);

    lcd.backlight();
    lcd.begin(16, 2);
    lcd.home();

    pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
    digitalWrite(LED_BUILTIN, HIGH);
    delay(2000);
    digitalWrite(LED_BUILTIN, LOW);
    delay(4000);
}
