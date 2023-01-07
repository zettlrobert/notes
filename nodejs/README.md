# My Notes on [Nodejs](https://nodejs.org)

Node.js is a JavaScript runtime build on Chromes V8 JavaScript engine(C++).
JavaScript on a Server.
Node.js uses an event-driven, non-blocking I/O model taht makes it lightweight and efficient.
Node.js package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

Node does not know how to run JS Code, it passes code to the V8 which returns the results.

### [Node Documentation](https://nodejs.org/dist/latest-v12.x/docs/api/)

- non blocking
- asynchronous
- event driven

Start Node in Console (Read Eval Print Loop)

    $ node

### useful objects

#### global

global stores variables and methods which are accesible in node

#### process

various properties and methods to manipulate running node processes

#### exit

use exit to exit the current node process or use CTRL + C

### Run Node files

    $ node filename

### Node Module System

Node requires modules for functionality some ware integrated natively some need to be loaded.
Example: Filesystem Module

    $ const fs = require('fs');

### Require files

    $ require('./path/to/file');

modules and variables need to be exported to be available.
Implemeted in a new Variable.

### Importing NPM modules

Initialize Project

    $ npm init
    $ npm i packagename

### Global NPM Packages

A Node package which is available System wide.

    $ npm install module -g

### Filesystem

Storing Data to the System

### Commandline Arguments

Arguments are under process.argv
2 Strings are always provided

- path to the node executable on the machine
- path to file on machine
- provided Arguments

provvide additional options

- --command="value"

## Node Debugging

- console.log() -- most basic tool
- debugger - node debugger
- chrome://inspect/#devices'
- node inspect -- if debugger needs to be used
- chrome://inspect/#devices
  - **node inspect app.js**
  - console
  - sources -- function wraps code to run it
  - add project to developer tools
  -

### Error Messages in Nodejs

- below error message there is a stacktrace
- points to problem

### Making HTTP Requests

##### With NPM Packages

- request

## Webserver

- [express](http://expressjs.com/) library

### Core Node Modules

- path
  - path.join()

### Template Engine for Dynamic Websites

- handlebars - hbs

#### Customize hbs

Tell Express where the views are located.

- create constant
- app.set dirname, path

##### hbs Partials

- partials Path
- partials registerPartials

### 404

- wildcard get on fileend

## Application Deploying

- git
- github
- heroku(production server)
