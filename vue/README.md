# Vue

Vuejs allows to create small widgets for existing applications over medium sized applications up to big SPAs which are entirely driven by Vuejs

### Why Vue

Vue is lean & small 16kb minified and gzipped for the core framework, fast runtime performance

### [Getting Started](https://vuejs.org/v2/guide/)

### First VueJS Application
* each Vue application needs a Vue instance which controls the HTML code
* Vue instance is an object with reserved properties
  * `el: ''` assigns a HTML id as template for the Vue instance
  * `data` propertie is an Object which stores all data for this instance
  * vue looks into the data object finds the properties and can output it in {{ here }}
* vue js controls with directives
* reserved properties methods in vue instance
  * this inside methods refers to data object **Vue proxies all data objects to the Vue instance** this gives access to all properties saved in data

## Using VueJS to interact with the DOM

### Understanding VueJS Templates
* by instantiating a vue instance, vue takes code from the root element and creates an instance
* vue creates a template based on the HTML code stores it internally and uses said template to create HTML document which gets used to render the DOM
* there is a layer in the middle which takes our HTML code renders it and generates HTML which gets outputted

### How the VueJS Template Syntax and Instance Work Together
* you have access to all properties in the data object just with there name, no `this or data. needed`
* methods need parentheses to be executed, but can be called in double curlys everywhere in the template **function needes to return something which can be converted to a string**

### Accessing Data in the Vue Instance
* vue proxies all properties and methods calling `this` anywhere in the Vue instance allows us to access properties and methods

### Binding to Attributes
* curly braces can't be used in any HTML element attribute!
* curly braces can only be used were text is used in the HTML
* adding with directive for example:
  * `v-bind:href="instanceAttributeName"`

### Understanding and Using Directives
* is an instruction which is placed in the code
* you can also write your own directives

### Disalbe Re-Rendering with v-once
* `v-once` forces elements to only render once! if properties changes it still gets rerendered

### How to Output Raw HTML
* Vue by default escapes HTML elements it only renders text
* v-html --> tells Vue to render HTML code and not escape it **use carefully can expose us to crosssite scripting**

### Listening to Events
* `v-on:click="functionName"`  and argument name(click, mouseenter, mouseleave...) allows vue to listen to dom event
* event object is created and passed automatically just access it as function parameter

### Passing your own Arguments with Events
* add parentheses to function name and pass argument in the parentheses
* if you want to pass default and own argument just pass a second parameter, but naming is important
* `2, $event`  function ...(step, event)...

### Modifiying an Event - with Event Modifiers
* use event modifiers 
* `v-on:_mousemove.stop` 

### Listening to Keyboard Events
* `v-on:keyup.enter='functionName'` gets executed as soon as key is pressed
* [Event Motifiers](https://vuejs.org/v2/guide/events.html#Event-Modifiers)

### Writing JavaScript Code in the Templates
* simple javascript expressions can be evaluated as long as they don't contain loops or if statements

### Using Two-Way-Data-Binding
* `v-model='nameProp'` directive tells vue to setup two-way data binding

### Reacting to changes with Computed Properties
* to model cross dependency properties use computed properties
* dependent properties
* data in a vue component is not reactive!
* methods get executed each time a property changes --> the pages updates
* computed functions can be used like properties
* **everything stored here can be used like data stored in the data object**
* **RESULT IS CACHED**
* use methods only if you know that you don't want to cache the result!

### An Alternative to Computed Properties: Watching for Changes
* **watch** executes code upon data changes
* watch needs a key which matches a property 
* the watch function gets executed when the matching property changes
* but use computed properties where possible
* use watch when you need **asynchronous** tasks
* for example timeouts for some execution
* inside closures the this state needs to be saved in a variable
* watch does not set properties, only set code which should run if a property changes

### Saving Time with Shorthands
| code | shorthand|
|---|---|
| v-on:click | @click |
| v-bind:href | :href |

### Dynamic Styling with CSS Classes - Basics
* in order to conditionally attach a class it needs to be bound to a property
* `:class="{ 'red': attachRed }"` attach key with css object and a value for true or false
* class can be used even if :class bind is used


### Dynamic Styling with CSS Classes - Using Objects
* bind a object to the class
* use a computed property
*  `divClasses () { return { red: this.attach Red, blue: !this.attachRed } }` 

### Dynamic Styling with CSS Classes - Using Names
* bind a property key --> the value gets parsed
* can be set through anything for example an input
* you can use array syntax to mix setup
* `:class="[color, {red: attachRed}]"`  

### Setting Styles Dynamically (without CSS Classes)
* `:style="{backgroundColor: color}"` key ist the style you want to bind too 
* needs to be written in camelCase or with quotes
* style object can be setup inside computed property
* `myStyle: () { return { backgroundColor: this.color, width: this.width + 'px'} }`
* `:style="myStyle"`

### Styling Elements with the Array Syntax
* `[myStyle, {height: width + 'px'}]` 
* myStyle is a computed property which returns an object
