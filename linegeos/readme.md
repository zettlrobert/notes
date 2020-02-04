#Installation of LineageOS on Huawei Honor P8 Lite
1. activate usb debugging

## Tools
1. fastboot
1. adb
1. abootimg

        $ sudo apt install fastboot
        $ sudo apt install adb
        $ sudo apt install abooting

## Reboot Phone to Recovery mode
        $ sudo adb reboot bootloader

## Get Unlock

        $ sudo fastboot oem unlock UNLOCKCODE --> get from Provider with Email.

Serial Number: W3D4C16227025222
IMEI: 860938032254757
Product ID: 13944450
