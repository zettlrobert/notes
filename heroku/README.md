# Heroku

## Initial Deploy
* add ssh key to heroku

    $ heroku keys:add

* create heroku application

    $ heroku create project-name

* add start script to application

* provide Heroku Provided Port via Heroku environment Variable

      $ const port = process.env.PORT

      app.listen port

* make commit and push code to Heroku


## New Feature Deployment
