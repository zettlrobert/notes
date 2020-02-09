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

## [Installation](https://flutter.dev/docs/get-started/install/linux)

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


# Flutter and Dart Basics
Basics of Flutter and Dart with flutter_quizz_app

* create flutter app with:

      $ flutter create app_name

## Files and Folder Overview

* .idea
  * configuration for android studio
* android
  * hold complete android project, code gets injected into this folder (mostly passive folder)
* build
  * holds output of flutter application, generated and managed by flutter sdk
* ios
  * hold complete iOS projects, code gets injected into this folder (mostly passive folder)
* **lib**
  * lib for library is the folder where the dart files have to added, this is the folder to work in!
* test 
  * automated test 
* .gitignore
* .metadate
  * managed by flutter
* .packages
  * internal dependencies  
* appname.iml
  * internal dependencies
* pubspec.lock
  * generated from .yaml with more information 
* pubspec.yaml
  * third party packages

### How does a Flutter Application work
Programming Framework for the Dart programming language, widgets are build

## Dart Fundamentals
* everything in Dart has a type
* main is the entry point for every dart program
* after each expression add ' ; '
* String with "Quotes" either double or single
* Integers, floats/doubles
* add type to each function
* var keyword for variable 
* type inference --> determines type from assigned values
* use type if value is not assigned immidiately
* everything in Dart is an Object(Datastructure with different Metadata)
* OOP
* class keyword for object Functionname should be capitalized
* variables in class are called properties
* initiate class, call class like function --> Functionname() 
#### Part 2
* Dart classes need constructors (methods)
* constructor executes only once, when class instance is initiated
* written exactly like class
* Person(String inputName, int inputAge)
* Dart supports scopping
* this refers to class level variable without scoped (for example to constructor input)
* **named Arguments** {wrap in curlys} target by creating Data exmp: inputName: 'Name' great for functions which take a lot of arguments
* @required to make named arguments required (flutter specific)
* constructor doesnt have to be written completely, in dart arguments can be passed with this.argument keyword
* Dart can use Arrow Shorthand for exaclty one Expression!(arrow function)
* Dart has lists created with []














## Building Flutter App from Scratch
Even the Page is a Widget Scaffold

* create class NamethisApp
* import dependencie package:flutter/material.dart
* NamethisApp extends StatelessWidget
* create build method with context --> context holds metainformation about widget
* BuildContext is a specail Object Type
* build Method nees to return Widget <-- Add Type
* add home Argument to MaterialApp
* Add Text Widget()

* runApp() needs to be implemented in main
* the build Method is called
* each class needs a build Method!
* in Eample: Materal app uses named Arguemtn which is named home and there is a text widget which is a dart class with hello argument
* @override decorator makes it clear that we override build Method GOOD PRACTICE if a method which exists in class we extend add override


### Building Widget Tree
* Scaffold --> basic design and Structure for Application
* MaterialApp Widget uses Scaffold Widget uses appBar Widget which takes a Text Widget
* Always add comma after 
* flutter format path - formats code
  

## Different Types of Widgets
* Vislible Widdgets 
  * Output & Input
  * Raised Button, Text, Card
  * **Draw onto the screen**
* Invisible Widgets
  * Layout & Controll
  * Row(),. COlumn(), ListView()
  * **Give App Structure and controll**


### Connect Buttons and Functions
* All Data Widget uses should belong into the class so that it is a Standalone Widget
* onPressed wants to execute a function, pointer has to be passed --> function without ()
* Pass name of cuntion to button not result of function execution
* if you need a function in only one place, you can use a annonymous function
* () => {} // one line expression
* () {} // For longer function body

### Updating Widget Data, understanding State
* items from Lists(arraylike) are accessed with . (object methods) or []
* **Whats State**: State is Data Information used by the App
  * App State: Authenticated User, lOaded Job...
  * Widget State: Which Question is sleected is a loading spinner displayed

Stateless
* Data can change externally
* Getrs rerendererd when Input Data changes

Stateful
* Data can change
* Widget has internal State
* Updates Userinterface by internal State change or external Data change

### State
* State is a generic class form Flutter
* State is persistend and attached to widget --> element in user Interface
* class that extends state needs to be conected to Widget class
* < WidgetName > <- add Pionter to Class
* setState usually takes annonouymus function and takes the expressions which change the state

### Private Properties
* _ Syntax for private methods and props declared with underscore cant be used outside of the class where they are declared


### Creating custom Widget
* create "st" provides codesnipped
* only if constructor argument is wrapped in curlys it is a  named argument if not it is a positioned Argument
* add final to tell Dart a value won't change after initialisation

### Styling basics
* use named Arguemtns like style Arguemnt
* named Arguments takes a Object based on the class which is provided my material dart
* container widget is used to style
* container core is always the child

### Passing Callback Functions
* Lifting the State up, State is Managed on shared, common denomninator the direct Parent of the Widgets

### Maps
* Built in Datastructure
* crated with {} or Map
* key and value pairs

### final vs const
* final if a vlaue doenst change from the point of time when a program runs, can be initated with a value
* final is a runtime constant value
* const is compiletime constant --> also means runtime constant
* const can be added infront of the variable or infront of the value

