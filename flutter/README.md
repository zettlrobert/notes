# [Flutter](https://flutter.dev/docs/get-started/install) (Developed by Google)

The Flutter page describes how to Setup and writte the first Testapplication.

## What is Flutter
A "tool" that allows you to build native cross-platform apps with one programming language and codebase.

SDK --> Compiles code to native machine code!


Framework/Widget Library --> Re-usable UI building blocks, utility functions, packages

## Dart (Developed by Google)
Focused on frontend (mobile apps, web) user interface (UI) development
OOP and strongly typed


### Flutter vs Dart
Flutter is a Framework using the Dart Programming Language 


## Flutter Architecture
* UI as Code: Build a **Widget Tree**
* Embrace Platform Differences
* One Codebase

### Everything is a Widget
Everything in the App is a Widget and Widget is a small Codesnipped the Whole App is a Widget

### One Codebase
Render different Content based on the Plattform if Android or IOS misbehave

### How is Flutter/Dart converted to a Native App
Flutter compiles Flutter Code to Native Code, the End App is a compiled Version of your Code --> High Performance Applications

### Flutter does not use Platform Primitves
Flutter directly controls every pixel which is drawn, it ships with its own engine which controls the entire screen!
A log of contorl  and flexibility.

### Flutter Versions
Flutter versions change frequently! But it is very stable!
* Bugfixes
* Improvements
* Niché features
* Implement things in a diffrent way

## Installation

* get source code from flutter repo update with git pull - maybe create an alias? (update flutter)

      $  git clone https://github.com/flutter/flutter.git -b stable

* Add Path variable .zshrc
  
      $ export PATH="$PATH:[PATH_TO_FLUTTER_GIT_DIRECTORY]/flutter/bin"

* test with

      $ which flutter

      $ flutter doctor

**Care for Java Version so that SDK Works**

### Material Design
Material Design is built into Flutter
Apple-styled (Cupertino) Widgets are also offered

## Alternatives for Flutter

| Flutter | React Native | Ionic |
|-------|:-----------:|--------|
| Dart + Flutter | JavaScript/React.js | JavaScript (any or no Framework) |
| Compiled Native Apps | Partly compiled(UI Components) Native Apps | WebView-hosted Web Apps |
| Does NOT compile to iOS / Android UI Components | Does compile to iOS/Android UI Components | Does NOT compile to iOS / Android UI Components |
| Cross-platform (mobile apps, web apps, desktop apps) | Mostly mobile apps(+ React Native Web) | Cross-platform (mobiel apps, web apps, desktop apps) |
| Google | Facebook | Ionic |
