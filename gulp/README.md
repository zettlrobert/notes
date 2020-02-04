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
* install with dev dependencie
    
    $ npm install --save-dev gulp-imagemin

* require imagemin
  
      const imagemin = require('gulp-imagemin');


### Minifiy JS
PACKAGE gulp-uglify

    $ npm install --save-dev gulp-uglify

* require uglify
  * uglify requires 'readable-stream'

    $ npm install --save-dev readable-stream


### Run all tasks with one Command
* array with task
 
      gulp.task('default', ['task1', 'task2', 'task3']);


### Watch files
* To run Automatically
* create task
  location to watch, name of task.

      `gulp.task('watch', function(){
        gulp.watch('src/*.html, ['copyHtml']);
        gulp.watch('src/js/*.js', ['task']);
        gulp.watch('src/', ['task']);
      })`



### WORKFOLW

Development Folder (html, js, css)
1. Gulp Watcher
1. Distribution Folder(js, css, html)
1. Webserver(nginx, apache, node.js)
1. www.example.com
