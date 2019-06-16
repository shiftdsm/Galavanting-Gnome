#pragma once
#include <LiquidCrystal.h>

#define LCD_RS 2
#define LCD_EN 3
#define LCD_DB4 4
#define LCD_DB5 5
#define LCD_DB6 6
#define LCD_DB7 7

#define BAT_EMPTY (uint8_t)0x0
#define BAT_ONE_QUARTERS (uint8_t)0x1
#define BAT_TWO_QUARTERS (uint8_t)0x2
#define BAT_THREE_QUARTERS (uint8_t)0x3
#define BAT_FULL (uint8_t)0x4
#define GPS_LOCK (uint8_t)0x5
#define GPS_NO_LOCK (uint8_t)0x6

static LiquidCrystal lcd(LCD_RS, LCD_EN, LCD_DB4, LCD_DB5, LCD_DB6, LCD_DB7);

extern uint8_t empty[8], one_quarter[8], two_quarters[8], three_quarters[8], full[8], gps_lock[8], gps_no_lock[8];

void LcdInitialize();
void DisplayStatus(uint16_t percentage, bool gps_lock = false);
