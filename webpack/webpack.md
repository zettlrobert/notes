# [Webpack](https://github.com/webpack/webpack)

A bundler for javascript and friends. Packs many modules into a few bundled
assets. Code Splitting allows for loading parts of the application on demand.
Through "loaders", modules can be CommonJs, AMD, ES6 modules, CSS, Images, JSON,
Coffeescript, LESS, ... and your custom stuff.

Manages dependencies and loads them first.

## Install Webpack

### Install webpack CLI

    npm install webpack-cli

### Install webpack in project

    npm install --save-dev webpack

## Configuration

1. default is index.js --> exports to dist
1. webpack.config.js
1. exports nested Objects
1. add to scripts in package.json

## [Loaders](https://webpack.js.org/loaders/)

webpack enables use of loaders to preprocess files. This allows you to bundle
any static resource way beyond JavaScript. You can easily write your own loaders
using Node.js.

Loaders are activated by using loadername! prefixes in require() statements, or
are automatically applied via regex from your webpack configuration – see
configuration.

1. add module, rules array.
1. import file in main entry point
1. setup for scss(sass)
1. scss has to compiled into regular css
1. loaders are required "sass-loader"

#### Recap

1. write regular expression
1. install loaders
1. decide on order to runloaders

## Cache Busting & Plugins

1. Prevent Browsers from caching file.
1. content hash --> deepends on file content == Cache Busting
1. Add github-[contentHash].js to filename
1. Have Webpack build the HTML-file with Plugins

## Plugins

1. HtmlWebpackPlugin
1. require in config file
1. plugins: []
1. pass basic html file as template
1. new file in src directory
1. template.html
1. delete stylesheets and script links

## Setup Multiple Config Files

One file for both dist and dev and one each

1.  create webpack.dev.js
1.  create webpack.prod.js
1.  copie webpack.config.js content to both files

1.  Install webpack-merge to merge configs
1.  export from file
1.  import in other config file
1.  in package.json

        "start": "webpack --config webpack.dev.js",

        "build": "webpack --config webpack.build.js"

1.  setup devserver --save-dev wepback-dev-server

## Loaders

1. every folder in src directory

### HTMLLoader

1. install
1. add rule in common

If an Image Source is needed Webpack requires the Picture.

### Fileloader

1. install

### Clean Webpack Plguin

Delete dist directory everytime it is build --> clean slate

# Multiple Bundles

Seperate own Code fromn Librarys

## Use Plugin to generate CSS for Dist

1. install mini-css-extract-plugin
1. add do prod config
1. remove css form common but to dev
1. add to prod
1. change rule to use plugin

## Minify

1. install optimize-css-assets-webpack-plugin
1. add optimizer array to config
1. add js minifier again
1. Terser Plugin, require and pass as ne instance
