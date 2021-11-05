# Javascript

### JavaScript Releases
Every Year since 2015 there is a new release of JS.
Backwards Compatibility -> Moden JS Engines are ALWAYS backwards compatible.
No breaking changes, releases not versions.
JS is not forwards compatible.

#### During Development
Simply use a current Engine

#### During Production
Use babel to transpile and polyfill your code
(Converting back to es5 to ensure browser compatibility)

## JavaScript Fundamentals
JavaScript is a high-level Object-Oriented, Multi-Paradigm Programming Language.

### Values and Variables
A value is the smallest form of Information you can have.
Values are usually stored in variables.

### Data Types
Value is only a primitive if it is not an Object.
There are 7 primitive Data Types
|Type|Description|Used for|
|--|--|--|
|Number| Floating point numbers| Used for decimal and integers|
|String| Sequence of characters| Used for text|
|Boolean| Logical type that can only be true or false| Used for taking decisions|
|Undefined| Value taken by a variable that is not yhet defined (empty value)| -|
|Null| Also 'empty value'| -|
|Symbol| Value that is unique and cannot be changed| id for object properties |
|BigInt| Large integers than the Number type can hold| - |

JavaScript has dynamic typing:
No manual definition of the data type for the value stored in a variable.
Data types are determined automatically.

#### Declaring Variables
|Statement|Description|
|--|--|
|let|declares a block-scoped local variable, optionally initializing it to a value|
|const|block-scoped, value of a constant can't be changed and can't be redeclared|
|var|Legacy Statement for declaring variables|

### Type Conversion and Coercion 
Conversion is when a conversion is executed manually.
Coercion is when a coversion is executed in the 'background'.

### Statements and Expressions
An expression is a piece of code that prodcus and expression
Example: 3 + 4

A Statement is a line of code commanding a task. Every program consists of a sequence of statements.


### Strict Mode
'use strict' activates strict mode, has to be first statement in script
Forbids to to certain things and creates visible errors.

### Function Declration vs Expressions
Declarations can be called before initialization.
Function Expressions can only be called after initialization.
Arrow Functions, a special form of a function expression DO NOT GET THIS Keyword.




