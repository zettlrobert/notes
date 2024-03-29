# [Flutter](https://flutter.dev/docs/get-started/install) (Developed by Google)

Notes after Maximilian Schwarzmüller Flutter Course.

- [] refactor to

The Flutter page describes how to Setup and write the first test-application.

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

- UI as Code: Build a **Widget Tree**
- Embrace Platform Differences
- One Codebase

### Everything is a Widget

Everything in the App is a Widget and Widget is a small Codesnipped the Whole App is a Widget

### One Codebase

Render different Content based on the Platform if Android or IOS misbehave

### How is Flutter/Dart converted to a Native App

Flutter compiles Flutter Code to Native Code, the End App is a compiled Version of your Code --> High Performance Applications

### Flutter does not use Platform Primitives

Flutter directly controls every pixel which is drawn, it ships with its own engine which controls the entire screen!
A log of control and flexibility.

### Flutter Versions

Flutter versions change frequently! But it is very stable!

- bug fixes
- Improvements
- Niché features
- Implement things in a different way

## [Installation](https://flutter.dev/docs/get-started/install/linux)

- get source code from flutter repo update with git pull - maybe create an alias? (update flutter)

      $  git clone https://github.com/flutter/flutter.git -b stable

- Add Path variable .zshrc

      $ export PATH="$PATH:[PATH_TO_FLUTTER_GIT_DIRECTORY]/flutter/bin"

- test with

      $ which flutter

      $ flutter doctor

**Care for Java Version so that SDK Works**

### Material Design

Material Design is built into Flutter
Apple-styled (Cupertino) Widgets are also offered

## Alternatives for Flutter

| Flutter                                              |                React Native                | Ionic                                                |
| ---------------------------------------------------- | :----------------------------------------: | ---------------------------------------------------- |
| Dart + Flutter                                       |            JavaScript/React.js             | JavaScript (any or no Framework)                     |
| Compiled Native Apps                                 | Partly compiled(UI Components) Native Apps | WebView-hosted Web Apps                              |
| Does NOT compile to iOS / Android UI Components      | Does compile to iOS/Android UI Components  | Does NOT compile to iOS / Android UI Components      |
| Cross-platform (mobile apps, web apps, desktop apps) |   Mostly mobile apps(+ React Native Web)   | Cross-platform (mobile apps, web apps, desktop apps) |
| Google                                               |                  Facebook                  | Ionic                                                |

# Flutter and Dart Basics

Basics of Flutter and Dart with flutter_quiz_app

- create flutter app with:

      $ flutter create app_name

## Files and Folder Overview

- .idea
  - configuration for android studio
- android
  - hold complete android project, code gets injected into this folder (mostly passive folder)
- build
  - holds output of flutter application, generated and managed by flutter sdk
- ios
  - hold complete iOS projects, code gets injected into this folder (mostly passive folder)
- **lib**
  - lib for library is the folder where the dart files have to added, this is the folder to work in!
- test
  - automated test
- .gitignore
- .metadata
  - managed by flutter
- .packages
  - internal dependencies
- appname.iml
  - internal dependencies
- pubspec.lock
  - generated from .yaml with more information
- pubspec.yaml
  - third party packages

### How does a Flutter Application work

Programming Framework for the Dart programming language, widgets are build

## Dart Fundamentals

- everything in Dart has a type
- main is the entry point for every dart program
- after each expression add ' ; '
- String with "Quotes" either double or single
- Integers, floats/doubles
- add type to each function
- var keyword for variable
- type inference --> determines type from assigned values
- use type if value is not assigned immediately
- everything in Dart is an Object(data structures with different Metadata)
- OOP
- class keyword for object function name should be capitalized
- variables in class are called properties
- initiate class, call class like function --> functionname()

#### Part 2

- Dart classes need constructors (methods)
- constructor executes only once, when class instance is initiated
- written exactly like class
- Person(String inputName, int inputAge)
- Dart supports scoping
- this refers to class level variable without scoped (for example to constructor input)
- **named Arguments** {wrap in curlys} target by creating Data example: inputName: 'Name' great for functions which take a lot of arguments
- @required to make named arguments required (flutter specific)
- constructor doesn't have to be written completely, in dart arguments can be passed with this.argument keyword
- Dart can use Arrow Shorthand for exactly one Expression!(arrow function)
- Dart has lists created with []

## Building Flutter App from Scratch

Even the Page is a Widget Scaffold

- create class NamethisApp
- import dependencies package:flutter/material.dart
- NamethisApp extends StatelessWidget
- create build method with context --> context holds metainformation about widget
- BuildContext is a special Object Type
- build Method needs to return Widget <-- Add Type
- add home Argument to MaterialApp
- Add Text Widget()

- runApp() needs to be implemented in main
- the build Method is called
- each class needs a build Method!
- in example: material app uses named arguments which is named home and there is a text widget which is a dart class with hello argument
- @override decorator makes it clear that we override build Method GOOD PRACTICE if a method which exists in class we extend add override

### Building Widget Tree

- Scaffold --> basic design and Structure for Application
- MaterialApp Widget uses Scaffold Widget uses appBar Widget which takes a Text Widget
- Always add comma after
- flutter format path - formats code

## Different Types of Widgets

- visible Widgets
  - Output & Input
  - Raised Button, Text, Card
  - **Draw onto the screen**
- Invisible Widgets
  - Layout & Control
  - Row(),. COlumn(), ListView()
  - **Give App Structure and control**

### Connect Buttons and Functions

- All Data Widget uses should belong into the class so that it is a Standalone Widget
- onPressed wants to execute a function, pointer has to be passed --> function without ()
- Pass name of function to button not result of function execution
- if you need a function in only one place, you can use a anonymous function
- () => {} // one line expression
- () {} // For longer function body

### Updating Widget Data, understanding State

- items from Lists(array like) are accessed with . (object methods) or []
- **Whats State**: State is Data Information used by the App
  - App State: Authenticated User, lOaded Job...
  - Widget State: Which Question is selected is a loading spinner displayed

Stateless

- Data can change externally
- gets rendered when Input Data changes

Sateful

- Data can change
- Widget has internal State
- Updates Userinterface by internal State change or external Data change

### State

- State is a generic class form Flutter
- State is persistent and attached to widget --> element in user Interface
- class that extends state needs to be conected to Widget class
- < WidgetName > <- add Pointer to Class
- setState usually takes anonymous function and takes the expressions which change the state

### Private Properties

- \_ Syntax for private methods and props declared with underscore cant be used outside of the class where they are declared

### Creating custom Widget

- create "st" provides code snippets
- only if constructor argument is wrapped in curlys it is a named argument if not it is a positioned Argument
- add final to tell Dart a value won't change after initialisation

### Styling basics

- use named arguments like style argument
- named Arguments takes a Object based on the class which is provided my material dart
- container widget is used to style
- container core is always the child

### Passing Callback Functions

- Lifting the State up, State is Managed on shared, common denomninator the direct Parent of the Widgets

### Maps

- Built in data structure
- crated with {} or Map
- key and value pairs

### final vs const

- final if a value doesn't change from the point of time when a program runs, can be initiated with a value
- final is a runtime constant value
- const is compile time constant --> also means runtime constant
- const can be added infront of the variable or before of the value

## Running Apps on Different Devices & Debugging Apps

**Android**

- turn on developer mode
- turn on USB debugging
- choose device you want to run app on
- ALWAYS test on real Devices!

**iOS**

- need MacOS --> look for workaround
- Xcode
- in Project ./iOS/Runner...
- Left Bar Root Element -> Signing & capabilities
- Need Apple Developer Account (developer.apple.com --> account)
- open -a Simulator.app
  Running on real iOS Device
- trust connected device
- use xCode or VSCode to launch app on real device

### Using Debugger

- Quick and dirty: print()
- Run App start with Debugging
- Add break Points

### Dart Dev Tools

- Ctrl + Shift + P --> Dart Dev Tools

## Most Important Widgets

#### App / Page Setup

| Android      | iOS           |
| ------------ | ------------- |
| Material App | Cupertino App |

#### Layout

- Container
- Row
  - flexible, expanded
- Column
  - flexible, expanded

#### Content Containers

- Stack
- Card

#### Repeat Elements

- ListView
- GridView
- ListTile

#### Content Types

- Text
- Image
- Icon

#### User Input

- TextField
- RaisedButton / FlatButton
- GestureDetector
- InkWell

### Container vs Column / Row

**Combine them!**

| Container                                         | Column / Row                                           |
| ------------------------------------------------- | ------------------------------------------------------ |
| Takes exactly one child widget                    | Takes multiple child widgets                           |
| Rich alignment & styling options                  | Alignment but no styling options                       |
| Flexible with (e.g. child width, available width) | always takes full available height or width            |
| **Perfect for custom styling & alignment**        | **Must-use if widgets sit next to / above each other** |

### String interpolation

- $ tells dart that you want to interpolate some value
- '${variable.field}'
- \ escape characters in string interpolation

### Format Date with extra Package

### ListView

- ListView(children:[])
  - Renders everything, even whats not visible
- ListView.builder()
  - Only load whats visible!
- **ListView.builder** requires itemBuilder --> takes function that gives us a context and number of type int, with index.

### Configuring and using Theme

- In App class theme argument can be setup
- global Application wide theme --> combination of styles
- theme: ThemeData() Object <-- provided by flutter
- primarySwatch: based on one single Color!

### Custom Font

create new folder in root assets/fonts

- pubspec.yaml
- define family
- define additional information like fontweight
- add default ThemeData object for example for appBarTheme

### Images

- need to be included in pubspecs.yaml

### Where

- where default method for function for every item in a list if true is returned item is kept in a new list, otherwise it is not included in the newly returned list.

### Flexible & Expanded

- each column in a row is as big as it needs to be or as big as you tell it to be
- Flexible Widget with fit property
- fit takes a flexfit configuration
- Expanded Widget
- expanded only knows flex configurations

### Futures

- showDatePicker returns a Future
- Future is a Class built into Dart
- Classes that allow to create Objects which will give a Value in the Future (for http requests for example)
- immediately returns future but no value for said future
- future triggers once value is returned
- .then can be used on future
- code execution will not stop

## Responsive & Adaptive UIs

- One Codebase
- One Widget Tree
- Different Leaves if Platform.isIOS
- android Sub-Tree
- iOS Sub-Tree

### Calculating Sizes Dynamically

- MediaQuery.of(context)
- size property
- access to height and width
- assign height with multiply between 0 and 1
- subtract appbar, statusbar

### Constraints

- Widget rendered on screen
- set by assigning height or width value
- each widget has default constraints
- disallow landscape mode -->
  - import flutter/services.dart
  - SystemChrome
  - setPreferredOrientations([DeviceOrientation.portraitUp])

### Adjust to Landscape Mode

- Switch element
- toggle Elements on off
- only display switch in landscape mode
- MediaQuery orientation boolean
- multiple conditional with ? and if without curlys

### MediaQuery Object Management

- set to final var in built method to avoid multiple object instances

### Adaptive UserInterface

- adaptive constructor
- not render if on iOS
- import dart:io
- Platform.isOS
- safe widgets in variables.
- don't mix material and cupertino

### Safe Area iOS

- reserved space for appdrawer and topicons
- wrap with SafeArea Widget
- use MaterialApp...

### Adaptive Widgets

- AdaptiveFlatButton
- import material and cupertino
- stateless class
- import dart:io for Platform check
- add property and constructor for values to button
- create instance for button when needed

## How does Flutter execute the build Method

- flutter aims to give 60 FPS Seconds
- updates screen 60 times per second
- all apps and games with 60 fps work that way
- screen updates x amount of seconds
- only inefficient if it needs to recalculate
- subsequent draws/refreshes, flutter takes the old informaiton and paints that

### Widget Tree & Element Tree & Render Tree

- You create Widget Tree
- Flutter internally creates Element Tree and render tree internally

| Widget Tree                         | Element Tree                                                                                                                       | Render Tree(What is on the Screen)               |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| Configuration (rebuilds frequently) | Links widgets with rendered objects (rarely rebuilds)                                                                              | Rendered objects on the screen (rarely rebuilds) |
|                                     |                                                                                                                                    |                                                  |
| Container                           | Container Element (references the container points at the widget) (Also points to the rendered Object)                             | Rendered Box                                     |
| - Column                            | Column Element                                                                                                                     | Rendered Box                                     |
| -My Sateless                        | MySateless Element                                                                                                                 | Rendered Box                                     |
| -My Stateful                        | MyStateful Element (creates element and calls create State Method, which creates a State Object which is connected to the element) | Rendered Box                                     |

- setState automatically leads to build beeing called.
- Widget is a Dart Class and can be instantiated
- Widget Tree is immutable, can only be overwritten with new configuration
- when build runs a part of the widget tree is recreated

### How Flutter rebuilds and repaints the screen

- state is connected to the element not the widget
- state is a separate object
- if state is called old widget is marked as dirty
- you get a new widget with the state data
- state object does not change
- new widget calls the build methods
- entire widget tree is rebuilt, new instances in memory
- **Elements hold a reference to the Widget**
- Elements know to which Widget they were connected
- only what is needed gets rerendered
- element tree is not rebuild, only widget tree is rebuilt
- element updates references, to know if new config is available
- if it is, it is passed to the render tree
- SPLIT APP efficiently, parts that change often should be confined in there widget

### Good Code

- Readability Understandabily Maintainability
  - Understandable --> understand it in the future
  - Understandable for others --> code guidelines
- performant
  - Certain practices can pimprove app performance
  - missing possible improvements doesn't automatically result in a bad laggy app
  - re evaluate code explore new best practices

### Widget Lifecycle

note: from top to bottom

| Statelesss Widgets   | Stateful Widgets     |
| -------------------- | -------------------- |
| Constructor Function | Constructor Function |
|                      | initState()          |
| build()              | build()              |
|                      | setState()           |
|                      | didUpdateWidget      |
|                      | build()              |
|                      | dispose()            |

- @overrite initState();
- the state in parentclass is not called, own state is called
- super.initState();
- @override didUpdateWidet(privious widget is argument)
- could be compared to new widget with widget prop(ref to updated one)
- @override dispose();

### App Lifecycle

How does the App react on the Device

| Lifecycle State Name | When is it hit                                      |
| -------------------- | --------------------------------------------------- |
| inactive             | App is inactive, no user input received             |
| paused               | App not visible to user, running in background      |
| resumed              | App is (again) visible and responding to user input |
| suspending           | App is about to be suspended                        |

### Context

- every widget has a context attached to it
- context is used internally by flutter to understand where the widget belongs
- context gives direct communication channel across the entire widget tree
- passing data between widgets
- can access any other widget without passing data through other widgets

### What are keys

- every Widget has a key
- certain widgets need a key
- only need if topmost item and a stateful widget, where a wrong state can get atached
- UniqueKey() is not good if constructors gets rerun
- ValueKey() with a specified identifier as arguments works best
- mostly on listviews with stateful widgets
