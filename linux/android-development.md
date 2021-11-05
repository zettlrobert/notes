Development for Android requires the Android SDK and the AVD Emulatorl


### Android SDK
Android software development is the process by which applications are created for devices running the Android operating system. Google states that[3] "Android apps can be written using Kotlin, Java, and C++ languages" using the Android software development kit (SDK), while using other languages is also possible.

#### Understanding the Android SDK
The Android SDK is a bunch of packages necessary to deelop for Android.

These packages stay in subfoldes of a folder called sdk or android-sdk

The sdk includes the following packages.

|package|description|
|--|--|
|tools| used to manage the other packages and to create AVD's|
|emulator|the Android emulator|
|platform-tools|tools to communicate with Android devices when they are connected to the computer|
|patcher|pre installed - look up what it does|
|The following contain sub-folder with the packages for each Android API level||
|platforms|platform packages are required to compile your app for the specified API level|
|system-images|android images used in the emulator|

### [AVD](https://developer.android.com/studio/run/managing-avds)
An Android Virtual Device (AVD) is a configuration that defines the characteristics of an Android phone, tablet, Wear OS, Android TV, or Automotive OS device that you want to simulate in the Android Emulator. The AVD Manager is an interface you can launch from Android Studio that helps you create and manage AVDs.

An AVD contains a hardware profile, system image, storage area, skin, and other properties. 

### [Android API Levels](http://www.dre.vanderbilt.edu/~schmidt/android/android-4.0/out/target/common/docs/doc-comment-check/guide/appendix/api-levels.html)
As you develop your application on Android, it's useful to understand the platform's general approach to API change management. It's also important to understand the API Level identifier and the role it plays in ensuring your application's compatibility with devices on which it may be installed. 

#### What is API Level
API Level is an integer value that uniquely identifies the framework API revision offered by a version of the Android platform.

The Android platform provides a framework API that applications can use to interact with the underlying Android system. The framework API consists of:

- A set of XML elements and attributes for declaring a manifest file
- A set of XML elements and attributes for declaring and accessing resources
- A set of Intents


## Installation
### Java 8
		sudo apt install openjdk-8-jdk
### SDK
Download the *tools* dpackage, with that all other pacckages can be downloaded.
- [Android Studio Download Page](https://developer.android.com/studio#downloads)
- download the command line tools only package 
- extract the downloaded commandlinetools.zip --> tools folder
- *tools has to be placed in a folder called `cmdline-tools`*
- crate global available installation by creating:

		/opt/android-sdk/cmdline-tools
- and place tools in it: `/opt/android-sdk/cmdline-tools/tools`
- change permission and group to user

		sudo chown -R user:user /opt/android-sdk

- download the platform-tools and the emulator packages, they contain the binary files
- navigate `/opt/android-sdk/cmdline-tools/tools/bin` this folder contains the SDKManager a CLI tool used to list all available packages in the google repository and download, update or remove them from your SDK folder.
- list all availalbe packages

      ./sdkmanager --list

## SET environmental variables
````
########################################################
# Android Studio
########################################################
# Depcrated path, still used by some programs
export ANDROID_HOME=/opt/android-sdk

# the correct variable
export ANDROID_SDK_ROOT=/opt/android-sdk

########################################################
# sdkmanager, screenshot2, lint, avdmanager, apkanalyzer
export PATH=$PATH:$ANDROID_SDK_ROOT/cmdline-tools/tools/bin

# adb, dmtracedump, e2fsdroid, etcltool, fastboot, hprof-conf, make_f2fs, mke2fs, mke2fs.conf, sload_f2fs, sqlite3
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools

# emulator, emulator64-cras-service, emulator-check, goldfish-webrtc-bridge, mksdcard, qemu-img
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
````

- to download packages, copy the package name and pass it as a parameter to the SDKManager

- *Give permission to use for everybody*

		sudo chmod ugo+rwx ./sdk     
		
### Example to download platform (Android Version)

		sdkmanager platforms;android-28

If root permission is needed execute in /opt/android/sdk/cmdline-tools/tools/bin/

		sudo ./sdkmanager platforms;android-2		
		
### Create a AVD device

### Real devive
- if device does not prompt allow access, check if adb recognices device

		adb devices
		
### Install udev rules

		apt-get install android-sdk-platform-tools-common
		
### Add user to plugdev group

		sudo usermod -aG plugdev $USER
