#pragma once

#ifdef GNOME_DEBUG
#define DEBUG_LOG(x) Serial.println(F((x)));
#else
#define DEBUG_LOG(x)
#endif