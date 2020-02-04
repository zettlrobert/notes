# Gulp 
is a Taskrunner, tool for building Javascript Applications

## plugins for tasks
* Minifications of scripts and styles    
* Concatenation                          * Concatenate Multiple Files into one big file
* Cache busing                           
* Testing, linting & optimization
* Dev Server
* Debugging Tasks

## How Gulp Works:
* Built on node streams
  * Continues flow of Data that can be manipulated Continuesly
* Pipelines  .pipe() operator
  * Chain of processing Elements, Output of one Element is Input of next Elements


### How to get started
Globally install Gulp
     
     $ npm install gulp-cli -g

### Initialize and install
  
     $ npm init

     $ npm install --save-dev gulp

### Create Gulpfile

     $ gulpfile.js

### Require gulp
    const gulp = require('gulp');

### Top Level Functions
* gulp.tasks
  * Define Tasks
* gulp.src        
  * Point to files to use
* gulp.dest       
  * Points to folder to output
* gulp.watch      
  * Watch files and folders for changes


### Create Task
Example:: Task defines as 'message'
    
    `gulp.task('message', function(){
      return console.log("Gulp is running...");
    });`


### Run task
    $ gulp message


### Copy all HTML Files to dist
* Create tasks
* return Promise to catch error and Resolve(reject needs to be defined)
* select src for task
* !!Chain Sources in Array ['src/*.html', 'src/*.css'],
  * BASE tells Gulp from where to start copying added to 

`gulp.src(['xx/*/*', 'yy/**/*'], {base: 'base'})
  {
    base: 'src'
  }`
    
* gulp.src("src/*html"); //Path and select Files
* Run Task with gulp Taskname


### Optimize Images
  PACKAGE gulp-imagemin

  - install with dev dependencie
  --> npm install --save-dev gulp-imagemin

  - require imagemin
  --> const imagemin = require('gulp-imagemin');

  //Look up how TO imagemin @git



//Minifiy JS
  - get PACKAGE
  npm install --save-dev gulp-uglify
  - require uglify
  //uglify requires 'readable-stream'
  --> npm install --save-dev readable-stream


//Run all tasks with one Command
  - array with task
  --> gulp.task('default', ['task1', 'task2', 'task3']);


//Watch files
 - To run Automatically
 - create task
  location to watch, name of task.

  gulp.task('watch', function(){
    gulp.watch('src/*.html, ['copyHtml']);
    gulp.watch('src/js/*.js', ['task']);
    gulp.watch('src/', ['task']);
  })








//WORKFOLW

Development Folder (html, js, css)
  --> Gulp Watcher
    --> Distribution Folder(js, css, html)
      --> Webserver(nginx, apache, node.js)
        --> www.example.com


// Setup Website
  - create Digital Ocean Droplet
    - create Webserver

  - ssh into Droplet(ssh root@ip)

  - change password for root

  - update Package manager
    - apt-get update
    - apt-get install ngnix

  - turn on ngnix Server
      service nginx reload
      service nginx restart

  // Setup Folder Structure
    - Dev folder
      --> mkdir public(projectname)
        --> cd public
    - distribution folder
      --> mkdir dist

  // Create Index to Dist
    - move ngnix Index
      --> mv /var/www/html/index.nginx-debian.html /public/dist
    - move to dist
      --> cd /public/dist
    - rename
      --> mv index.nginx-debian.html index.html

      PAGE is Gone

  //Configure nginx
  - move to
    --> cd /etc/nginx/sites-enabled/
  - server setup
    --> vim default
      - point to public/dist/
        --> root /public/dist/
  --> service nginx reload
  --> service nginx restart

  //In Dist Create
  --> mkdir css
  --> mkdir js

  //In Public
  --> mkdir css
  --> mkdir js

  //Install Gulp
  --> install node
  --> install gulp

  //Create gulpfile
   --> gulpfile.js


