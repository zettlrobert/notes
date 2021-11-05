# Typescript

## Prerequisites
- Node.js on your machine.
- npm - node package manager


## Project
1. Create files app.ts and index.html - link script

1. NPM init
    - initialize project change entry point accordingly

2. Install Development Dependencies
    - concurrently - allows us to run multiple commands concurrently
    - tyepscript
    - lite-server - lightweight development only node server, 
                  - refreshes when making changes to HTML and JS.
                  - injects CSS using sockets.
    
    `npm install concurrently typescript lite-server --save-dev`

3. Initialize TypeScript project
    - tsc --init

4. Setting up Scripts
Define scripts for TypeScript Compioler, TypeScript Compiler Watcher,
lite server and a start command taht concurrently runs lite server
and watches for changes to TypeScript files to compile them and update
lite server in real-time.
    - TypeScript compiler: `"tsc": "tsc"`
    - TypeScript compiler watch mode: `"tsc:w": "tsc -w"`
    - lite-server: `"lite": "lite-server"`
    - start command: `"start": "concurrently \"npm run tsc:w\" \"npm run lite\" "`
Concurrently will run the YpeScript Compiler (tsc) in watch mode(-w) as well as run lite server.

3. Configure typescript in the created tsconfig.json file
    - set the out dir - location where compiled js lives
    - set soureMap - maps compiled ts to js to better debug

4. Inside the applicatio create a src directory
    - create index.ts file inside src


