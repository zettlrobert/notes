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

**[... continue in free time...]**

## Routing in VueJS Application
* always the same page it just looks like it is an other page for the user
* the whole application is handled through VueJS

### Setting up the VueJS Router (vue-router)
* dynamically switching components --> looks like individual pages
* install vue-router with npm as prod dependency `npm install --save vue-router`

### Setting Up and Loading Routes
* import VueRouter from 'vue-router'
* `Vue.use(VueRouter)` --> enables routing
* in SPA you only have one root component
* routes.js on SPA root level (same as main/app.js)
* import components into router file
* exports const routes with and array of objects
```
export const routes = [
  { path: '/user', component: user }
  { path: '', component: home }
]
```
* import and register routes in main.js
* create router `const router = new VueRouter({ routes })`
* add the router in the Vue Instance
* in main component use `<router-view></router-view>`

### Understanding Routing Modes (Hash vs History)
* localhost:8080/#/
* hash allows to send the part in front of it to the server
* part after # is handed over to the JS Application
* to avoid # the server needs to return the index file in all cases
* **always return the index.html file**
* to tell vue that the server is configured correctly add `mode: 'history'` to the router object
* [server configurationton](https://router.vuejs.org/guide/essentials/history-mode.html) (HTML5 History Mode)

### Navigate with Router Links
* vue-router provides an alternative to href attribute
* router-link element --> renders anker tag
* `<router-link to="/path">Home</router-link>` 
* import components in SPA root-file
* doesn't reload page if clicked --> works with attached click listener
* it listens to the click and loads the component, no page reload 

### Styling Active Links
* add a tag property to router link
* add an empty anker tag inside the router-link
* `<router-link to="/" tag ="li" active-class="active">Home</router-link>`
* marks link as active when url starts with / --> home is always marked, good behavior if you have nested routes
* add exact to router-link to force to check for full path
* `<router-link to="/" tag ="li" active-class="active" exact>Home</router-link>`

### Navigate from Code
* with method: navigateHome
* inside method access the router
* $ marks objects provided by an other package
* `this.$router.push({path: '/'});`

### Setting Up Route Parameters
* to pass any dynamic piece or segment inside the path use :
* `path: /user/:id` tells the router to visit user / something 
* flexible element which gets embedded inside the url

### Fetching and using Route Parameters
* to retrieve a dynamic route parameter, add a property
* set value for parameter (id), access the route object
* id: `this.$route.params.id` --> visit doc to see an overview off all route object propertys
* component will only be created once component has loaded

### Reacting to Changes in Route Parameters
* the component is not recreated if we are already on the component, vue js will not recreate the component if url changes (no page reload)
* we have to watch for router parameters and if they change
* setup watcher and watch route
* `watch: { '$route': (to, from){ this.id = to.params.id; }} }` to is a route

### Vue-router 2.2 Extract Route Params via "props"
* [route via props example](https://github.com/vuejs/vue-router/tree/dev/examples/route-props)
* you can pass a static value
* bind a dynamic value to props
* use a function to allow converting values

### Setting up Child Routes (Nested Routes)
* for example nest all user functions in a user subroute
* configure subroutes in routes.js
* add new property to the route which should have some nested routes
```
  { path: '/user', component: User, children: [
    { path: '', component: SomeUserFunction }
    { path: ':id', component: UserDetail }
  ]}
```
* if path starts with / it will be appended directly after the domain
* if slash is left out it will be appended to the path of the parent route
* child components need to be imported inside routes.js
* to load them we have to set up a new router-view inside the user component

### Navigating to Nested Routes
* use router-link directly inside the ul
* add tag="li" 
* add to="/user" attribute
* : to bind dynamically to use path from property
* if route params can't change inside the component there is no need to watch for changes reloading via url will update properties
  
### Making Router Links more Dynamic
* add v-bind or colon to bind to to attribute
* `:to="'/user/' + $route.params.id + 'edit'"`

### Better Way of Creating Linsk - With Names Routes
* in routes js we can give any route a name by just adding name propertie to the object
* now object can be passed to the to="" attribute
* `to="{ name: pathName, params: { id: $route.params.id } }"`
* named routes can be used everywhere where the route is used

### Using Query Parameters
* query parameters are always at the end of the url
* to pass query parameters
* add them to the route directly
* or add property to the object with key query
* `to="{ name: pathName, params: { id: $route.params.id }, query: { locale: en, q: 100 } }"`
* can be accessed with `$route.query.keyName` 
  
### Multiple Router Views (Named Router Views)
* not only routes can be named 
* router views can be names too
* second router view where the component is loaded
* `<router-view name="header-top"></router-view>`
* in routes.js a new property can be added, called components: 
* it is an object with a default value (component)
* other key can be added 
* dynamically render view depending on the name of the route property

### Redirecting
* don't set up a component in routes.js set up path with the redirect key
* `{ path: 'redirect-me', redirect: { name: 'home' } }`
* the objects setup in routes.js can be used inside are direct
  
### Setting Up "Catch All" Routes / Wildcards
* setting up a path which catches everyhting that is not handled by a specific path
* `{ path: '*', redirect: '/'}`
* generic catch all route with a asterisk wildcard character

### Animating Route Transitions
* wrap router-view with the transition component
* this will animate the switching of the route
* set up css animation in style
* set mode on transition group 

### Passing the Hash Fragment
* navigate to the anchor tag #
* pass the hash segment
* export the js object for the export and store it
``` 
link: { 
        name: pathName,
        params: {
          id: $route.params.id 
        }, 
        query: { 
          locale: en,
           q: 100
        },
        hash: '#anchorName'
      }"
```

### Control the Scroll Behavior
* in main js add to the router instance the method scrollBehavior after mode
* scrollBehavior has 3 arguments, to, from, savedPosition
* returns x, y
* check for hash with simple if statement
* return with hash
* `return { selector: hash }`
* check for savedPosition
* if position is saved return it

### Protecting Routes with Guards
* only allow navigation if user is allowed
* beforeEnter --> is the user allowed to visit route
* we have three different places to setup the is allowed to enter check
* main.js execute a beforeEach function on router
```
router.beforeEach((to, from, next) => 
  next();
}
```
* you have to pass next with an option
* pass nothing will continue
* pass false if you want to stay where you are
* pass path or object defining path to redirect
* gets executed on each routing action if it is set up on theglobal routing object
* **add beforeEnter in routes.js router path property**
* is checking on the route level
`beforeEnter: (to, from, mext) => {}`
* checking on the component level
* we have two new methods available
  * beforeRouterEnter(to, from, next) can be added **next must be passed!**
  * if you need to access the object you need a callback to the vue model to get access to the component
  * here you could check if the user is authenticated other operation before calling next 
* **beforeLeave**
* setup up property to check for before leave in the component
* setup beforeRouteLeave() Method in the component
* good way to make sure the user does not navigate away by accident

## Loading Routes Lazily
* for a big application lazy loading can make a big performance difference
* find the right balance of having a big all in one bundle and loading parts only if you need them
* lazy loading is only loading parts of the application if they are really needed
* everything that is imported at the top of a file is always included even if you don't need it
* you have to change the syntax, so webpack can recognize it
* example function for webpack
```
const User = resolve => { 
  require.ensure(['./components/user/User.vue], () => {
    resolve(require('./components/user/User.vue'));
  });
}
```
* resolves the path if it should be used
* if it is in an asynchronism function webpack will only execute function if it is only needed
* it will create the corresponding bundle during the build process
* check if it works via the network tab in the dev-tools
* different builds which webpack created, all routes created with asynchronous syntax get there bundle and it is loaded when it is needed
* if certain pieces should e grouped inside one sub-bundle, they can be grouped with the additional argument to the require.ensure function(after resolve) 

# [VueX](https://vuex.vuejs.org/)
Better way of state management for vue applications
Why better state-management is needed
* The more layers components have the more complicated it gets
* Emit Bus could be used but still has its issues with a lot of emits and listens
* changes are hard to track
* vuex is similar to redux and flux
* is written by vuejs team

### Understanding "centralized state"
* vuex uses a central store where the application state is stored
* components still can have there own individual state
* everything that is used in different parts of the application should be stored in the store

### Using the Centralized State
* typically all vuex related parts are stored in a folder named store
* in store directory create store.js
* helpers from the vuex package are needed
* in store.js import vue and vuex from vue and vuex the package provides additional tools to handle state-management
* tell vue to use vuex `Vue.use(Vuex)` 
* we need a property called state (is an object)
* in state every state element is stored
* state needs to be exported
* in main js the store needs to be imported
* store needs to be registered in the root vue instance
* store can be access by `this.$store.state.variableName` 

### Why centralized State Alone Won't Fix It
* if you have the same state variable in two components and manipulate it, the code needs to get duplicated
* find solution for DRY principle

### Understanding and using Getters
* instead of directly accessing the state in the component where we need it we can create a getter
* access the getter from different components
* getters: is a reserved property in the root store component
  ```
    export const store = new Vuex.Store({
      state: {
        counter: 0
      },
      getters: {
        doubleCounter: state => {
          return state.counter * 2;
        }
      }
    })
  ```
* in component inside a computed property `return this.$store.getters.doubleCounter`

### Mapping Getters to Properties
* implement a second getter inside the store
* instead of using computed properties you can map the getters to properties with the helper function
* helper function **mapGetters**  needs to be im ported from vuex
```
  computed: mapGetters([
    'doubleCounter',
    'stringCounter'
  ])
```
* can be accessed like props
* can't add own computed props that way --> solution is es6 object
* spread operator allows to pull out properties and methods and crate separate key value pairs for them
* add new dev-dependency babel-preset-state-2
* in .babelrc add new preset: ["stage-2"]
```
  computed: {
    ...mapGetters([
      'doubleCounter',
      'stringCounter'
  } 
  ])
```

### Understanding and using Mutations
* if many components manipulate state it can get hard to track which component manipulate it at what time
* add mutations to the store.js file.
* each mutation gets state as input
* `this.$store.commit('methodName')` state is passed automatically
* mapMutations need to be imported like mapGetters
* mutations allow us to change the state in one central place the store.js file!
* never run a asynchronous function in a mutation

### How Actions improve Mutations
* mutations have to change the state immediately 
* an action is a extra function which can run asynchronous task
* the mutation gets only committed when the asynchronous task is done
* actions are added like mutations in the store.js
* inside actions methods are set up
* actions take context as argument
* context gives access to commit method has a lot of the store properties
* destructuring can be used to pull out commit or other methods from the context object
* its good practice to use actions to avoid using mutations to change state to always use them
* use mapActions to map actions like getters or mutations

### Mapping Actions to Methods
* mapAction is used to get access to our actions
* second argument mostly called payload can be passed on to mutations
* if you need to pass more use an object to pass arguments

### Vuex Pattern
* We have central store, which gets adjusted by mutations
* mutations have to be synchronous
* we use actions to commit mutations
* actions are dispatched by components
* to use state we have getters
* they allow to access state in different components
* mapGetters is used to create computed properties
* mutations are used to change the state, they get the state and data as input
* they directly manipulate state
* we need to use actions if we want to run async code

### Two-Way-Binding (v-model) and Vuex
* v-model value will not work because it can't change computed properties
* v-model can't set the state
* a method which updates state can be used
```
updateValue(event) {
  this.$store.dispatch('updateValue', event.target.value)
}
```
* to use v-model we need to change the computed property with a setter
* the computed property needs to be turned into an object with a getter and setter
* the setter executes this.$store.dispatch('updateValue', value)
* setters in computed properties are rarely used but possible
* use with caution!

### Improving Folder Structure
* how to split store.js into multiple files
* **there are multiple ways to setup vuex file structure**
* inside store there is a modules directory

### Modularizing the State Management
* split store.js into **modules** where each module contains all getters, actions and mutations for one module
* in one module create an objects
* export state, mutations, actions, getters from the new module file
* inside store.js
* modules need to be merged into store.js
* we will always have a central store with a central state
* in store.js we add a new property, called modules
* module needs to be imported and added to the module prop

### Using separate files
* if you have a lot of different actions you can create other files, for example action.js (storefolder root)
* in action.js file export constants with named exports
```
export const updateValue = ({commit}, payload) => {
  commit('updateValue', payload);
}
```
* import * as actions from the actions file // js creates an object with all exported values
* use imported objects with the name inside of store.js
* so all tasks are outsourced and more specialized things are in modules which could be split as well

### Using Namespaces to Avoid Naming Problems
* if you are using multiple modules you have to make sure to not use the same name (no key duplicates)
* all things are merged into the same store.js and share the same namespace
* **other pattern for big applications**
* crate types.js
`export const DOUBLE_COUNTER from 'counter/DOUBLE_COUNTER'`
* import all types in one object `import * as types from '../types'`
* dynamic property name with [types.DOUBLE_COUNTER] tells JS to assign a name on runtime
* import * as types from '../store/types/'
* in the results the getters need to be updated
* counter: types.COUNTER
* types file is used to manage global namespace
* ensures that the same name is not used twice

### Auto-Namespaceing with Vuex 2.1
* **Modules can now be auto-namespaced by using the new namespace: true option**
* getters, actions and mutations inside a namespaced module will automatically be prefixed with a nhamespaced inferred from the modules registration path.
* [Autonamespacing](https://github.com/vuejs/vuex/releases/tag/v2.1.0)


### Useful Links
* [getbootstrap.com](https://getbootstrap.com/docs/4.5/components/alerts/)
* [Vuex Github Page](https://github.com/vuejs/vuex)
* **[Vuex Documenation](https://vuex.vuejs.org/en/)**


# Form Validation

### [vuetify](https://vuetifyjs.com/en/) of [vuelidate](https://vuelidate.js.org/)

## Vuelidate
lightweight model based validation package

    npm install vuelidate


````
import Vue from 'vue'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

```` 

* required needs to be put onto the field (make conditonal with elvis expression)
* import from vuelidate library all validators we need

```` 
import { require } from 'vuelidate/lib/validators';

```` 

* add validation section inside script
  * which validators are used against what field in the form

* method that checks if what is typed in is correct
  * array of error messages
  * this.$v --> value user entered into field

Example username required (in computed)

```` 
usernameErrors() {
  const errors = [];
  !this.$v.username.required
    && errors.push('Username is required')
  return errors
}

```` 

* error message is still displayed if you type into the field
* @input and @blur has to be added
* you need to tell vuelidate that testing is required on each input and on field leave
  * @input="$v.username.$touch()" 
  * @blur="$v.username.$touch()" 


errorMethod check (in computed)
```` 
 emailErrors () {
   const errors = [];
   if (!this.$v.email$dirty) return errors;
   !this.$v.email.email && errors.push('Must be valid e-mail');
   !this.$v.email.required && errors.push('Must be valid e-mail');
   return errors
 }
```` 
* first thing that is checked is dirty --> no validation if the user did not have interaction with the field
