set(CMAKE_TOOLCHAIN_FILE ${CMAKE_SOURCE_DIR}/cmake/ArduinoToolchain.cmake)
set(CMAKE_CXX_STANDARD 17)

cmake_minimum_required(VERSION 2.8)

project(gnome C CXX)

option(DEBUG ON "Whether debug mode is on")
message(STATUS "Build type ${CMAKE_BUILD_TYPE}")

set(SERIAL_PORT "/dev/ttyACM0" CACHE STRING "Serial Port for the board")

if ("${CMAKE_BUILD_TYPE}" STREQUAL "Release")
    message(STATUS "Disabling debug mode")
    set(DEBUG OFF)
endif()

set(ARDUINO_DEFAULT_BOARD leonardo)
set(ARDUINO_DEFAULT_PORT ${SERIAL_PORT})

configure_file(gnome/config.h.cmake gnome/config.h)
include_directories(${CMAKE_BINARY_DIR}/gnome)

set(gnome_SRCS
    gnome/gnome.ino)

set(gnome_HDRS)

generate_arduino_firmware(gnome
    SKETCH gnome
    SERIAL picocom -c -e e ${SERIAL_PORT})
