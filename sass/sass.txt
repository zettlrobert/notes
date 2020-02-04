Syntactically Awesome StyleSheets extension Language for CSS
  - write clean sustainable CSS
  - solve comon repetition and maintenance challanges


Compiling Sass
  - must be compiled to css

    //Filelocation
    sass yourfile.scss yourfile.css

    //Automate with build tools or own script
    gulp, webpack...

Sass: Overview
  - variables
  - mixins
  - nests


Nesting
  Place selectors inside the scope of another selector
    - variables scope is the context in which a variable is defined and available to use
    - scope of a selector between {}
    - selectors inside the scope of antother selector are referred to as children


Variables
  assign an identifier of your choice to a specific value
    - $ is used to define and reference variables
    - $translucent-white: rgba(255,255,255, 0.5);
    - stick to one naming convention!!!

  Sass(y) Types
    - numbers --> 8.11, 12 and 10px
    - Strings of text --> "potato", 'tomato', span
    - booleans --> true and false
    - null


Maps & Lists
  Two more Datatypes, lists and maps

    Lists
     - can be separated by either spaces or commas   --> 1.5em Helvetica bold;
                                                     --> Helvetica, Arial, sans-serif
     - you can also sourround a list with parantheses and create lists made up of lists

    Maps
     - similar to lists, but instead each object is a key-value pair
     --> (key1: value1, key2: value2);
     - the value of a key can be a list or another map



The & Selector in Nesting
  & character is used to specify where a parent selector should be inserted.
  Write pseudoclasses in a less reptitive way.

  SCSS
  .notecard{
    &:hover {
      @include transform (rotatey(-180deg));
    }
  }

  Compiles to:
  .notecard:hover {
    transform: rotatey(-180deg);
  }



Mixin
  - lets you make groups of CSS declarations that you can reuse
  - should only be used with an argument

  @mixin mixin-name {css: propertys}


Mixin: Arguments
  - argument or parameter is a value passed to the mixin that will be used inside the mixin such as $visibility

Default Value Arguments
 - mixin arguments can be assigned a default value int he mixin definition by using a special notation
 - default value is assigned if no value is passed when the mixin is included, defining default is optional


Mixin Facts
 - Mixins can take multiple arguments
 - Sass allows you to explictily define each arguemnt in your @include statement
 - when values are explicitly specified you can send them out of order
 - if a mixin definition has a combination of arguments with and without default value you should define the ones with no default value first
 - Mixins can be nested



List Arguments
 - allows you to pass multiple arguments in a list or a map format


String Interpolation
 - string interpolation is the process of placing a variable string in the middle of two other strings
 - in a mixin context, interpolation is handy when you want to make use of variables in selectors or file names


The & Selector in Mixins
 - & selector gets assigned the value of the parent at the point where the mixin is incldued
 - if there is no parent selector the value is null and Sass will throw an error



Functions in scss
 - Operate on color values
 - iterate on lists and maps
 - apply styles based on conditions
 - assign values that result from math operations


Arithmetic and Color
  $color: rgba(39, 39, 39, 0.5);
  $amount: 0.1;
  $color2: fade-out($color, $amount);

  fade-out($color, amount);
  fade-in($color, $amount);
  adjust-hue($color, $degrees);


Color Functions
 - perform mathematical functions to compute measurements - including colors

1. Operation is performed on red, green and blue components
2. it computes the answer by operationg on every two digits
  $color: #010203 + #040506;

--> 01 + 04 = 05
    02 + 05 = 07
    03 + 06 = 09
==> #050709


Each Loops
each loops iterate on each of the vlaues on a list the syntax is:
  @each $item in $list {
    //some rules and or conditions
  }


For Loops
For loops can be used to style numerous elements or assigning properties all at once
  @for $i from $begin through $end {
    //some rule
  }

$begin and $end are placeholder for start and end of loop
through and to are interchangeable in Sass


Conditionals
  if() is a functin that can only branch one or two ways based on a condition you can use it inline to assign the value of a property
    width: if( $condition, $value-if-true, $value-if-false);

  for cases with more than two outcomes the gif, @else-if and @else directives allow for more flexibility

  @mixin deck($suit) {
    @if($suit == hearts || $swit == spades) {
      color: blue;
    }
    @else-if($suit == clovers || $suit == diamonds) {
      color: red;
    }
    @else {
      //some rule
    }
  }



Sasstainability -- best practice
  Sass Structure
    the bigger the project the more important styling.

    sass/
      components/

        _button.scss      #buttons
        _carousel.scss    #carousel
        _cover.scss       #cover

      helpers/

        _variables.scss   #variables
        _functions.scss   #sass functions
        _mixins.scss      # sass mixins

      layout/

          _grid.scss      #grid system
          _header.scss    #header
          _fotter.scss    #footer

      pages

          _home.scss      #home specific styles
          _contact.scss   #contact specific styles


  main.scss               #primary Sass file



@Import in SCSS
extends @imprt rule to allow including other scss files
 - all imported scss files are improted into a main scss file which is then combined to make a single css output file
 - global scss file has access to any variables or mixins defined in its imported files @ import command takes a filename to import

default @import looks for a .scss file in the same or otherwise specified directory but there are a few circumstances where it will behave just lie a CSS @import
 - if files extension is .css
 - if filename begins with http://
 - if the filename is a url()
 - if the @import has any media queries


Organize with Partials
files yo split up to organize specific functionality in the codebase
 - user a _ prefix notation in the file name that tells sass to hold off on compiling the file individually iand insteand import it

 To import a file names "_variables.scss" --> @import "variables";
 The global file imports all the components and centralizes the logic


@Extend
we want the styles of one class to be applied to another in addition to its own individual styles so the traditional approach is to give both classes.


%Placeholders
- you may create classes solely for the purpose of extending them and never actually use them inside your html
- sass allows for a special type of selector called a placeholder, behaves just like a class or di selector but uses % notation.
- prevent rules form being rendered to CSS on their own and only become active once they are extended anywhere an id or class could be extended



Try to only create mixins that take in an argument ohterwise you should extend
Always look at your css output to make sure your extend is behaving as you intended
