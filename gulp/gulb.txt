Gulp is a Taskrunner, tool for building Javascript Applications
  -plugins for tasks
    --> Minifications of scripts and styles                       //Fasster Application
    --> Concatenation                                             //Concatenate Multiple Files into one big file
    --> Cache busing                                              //Let Browser now if there is a new Version of a file
    --> Testing, linting & optimization
    --> Dev Server
    --> Debugging Tasks

How Gulp Works:
  - Built on node streams
     // Continues flow of Data that can be manipulated Continuesly
  - Pipelines  .pipe() operator
    // Chain of processing Elements, Output of one Element is Input of next Elements



GET STARTED!!!
  //Globally install Gulp
  npm install gulp-cli -g


  //In Project Folder
  //Initialize
  npm init


  //Install Gulp in project --> --save-dev save as Development Dependencie
  npm install --save-dev gulp


  //Create Application Folder src code
  mkdir src


  //Create Gulpfile.js
  gulpfile.js

  //Require gulp
  in gulpfile.js
    Example::
    const gulp = require('gulp');


  //Top Level Functions
    gulp.tasks      // Define Tasks
    gulp.src        // Point to files to use
    gulp.dest       // Points to folder to output
    gulp.watch      // Watch files and folders for changes


  //Create Task
    Example:: Task defines as 'message'
    gulp.task('message', function(){
      return console.log("Gulp is running...");
    });


  //Run Task
    In Terminal
    gulp message


  //GULP > 3
          1. Return a Stream
          This is not really an option if you're only trying to print something, but it's probably the most frequently used async completion mechanism since you're usually working with gulp streams.
          Here's a (rather contrived) example demonstrating it for your use case:

          var print = require('gulp-print');

          gulp.task('message', function() {
            return gulp.src('package.json')
              .pipe(print(function() { return 'HTTP Server Started'; }));
          });

          The important part here is the return statement. If you don't return the stream, gulp can't determine when the stream has finished.



          2. Return a Promise

          This is a much more fitting mechanism for your use case.
          Note that most of the time you won't have to create the Promise object yourself,
          it will usually be provided by a package (e.g. the frequently used del package returns a Promise).

          gulp.task('message', function() {
            return new Promise(function(resolve, reject) {
              console.log("HTTP Server Started");
              resolve();
            });
          });

          Using async/await syntax this can be simplified even further. All functions marked async implicitly return a Promise so the following works too (if your node.js version supports it):

          gulp.task('message', async function() {
            console.log("HTTP Server Started");
          });



          3. Call the callback function

          This is probably the easiest way for your use case:
          gulp automatically passes a callback function to your task as its first argument. Just call that function when you're done:

          gulp.task('message', function(done) {
            console.log("HTTP Server Started");
            done();
          });



          4. Return a child process

          This is mostly useful if you have to invoke a command line tool directly because there's no node.js wrapper available.
          It works for your use case but obviously I wouldn't recommend it (especially since it's not very portable):

          var spawn = require('child_process').spawn;

          gulp.task('message', function() {
            return spawn('echo', ['HTTP', 'Server', 'Started'], { stdio: 'inherit' });
          });


// Copy all HTML Files to dist
  - Create tasks
  - return Promise to catch error and Resolve(reject needs to be defined)
  - select src for task
  - !!Chain Sources in Array ['src/*.html', 'src/*.css'],
  //BASE tells Gulp from where to start copying added to gulp.src(['xx/*/*', 'yy/**/*'], {base: 'base'})
  {
    base: 'src'
  }
    --> gulp.src("src/*html"); //Path and select Files

  --> Run Task with gulp Taskname


// Optimize Images
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


