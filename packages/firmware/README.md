Galavanting Gnome Firmware
==========================
This project uses [Platform.IO][platform-io]. Follow it's [setup instructions][pio-setup] to get started.

Caveats
-------
I have not been able to program the leonardo or my uno without using an [USBTinyISP][usbtiny]. I have not been able to
get the normal usb programming working outside the Arduino IDE.

Building & Programming
----------------------
To build the firmware run the following command:

```bash
platformio run
```

You can specifiy a specific environment with the `-e` flag. Valid values are `leonardo` and `uno`.

To program the board run the following:

```bash
platformio run -e <BOARD> -t upload
```

If this gives you a verification error, you may need to use the `program` target before being able to use `upload`.

[platform-io]: https://platformio.org/
[pio-setup]: https://docs.platformio.org/en/latest/installation.html
[usbtiny]: https://www.adafruit.com/product/46
