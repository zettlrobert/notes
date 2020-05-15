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
