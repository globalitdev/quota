# Creating a new widgets project
Create a new empty widget project
```sh
$ mkdir widget-project
$ cd widget-project
$ npm init -y
```
Add these development dependencies to your package.json file
```json
"devDependencies": {
  "babel-plugin-class-name": "github:zeddidragon/babel-plugin-class-name#a25cb60",
  "babel-plugin-transform-class-properties": "^6.19.0",
  "babel-plugin-transform-decorators-legacy": "^1.3.4",
  "babel-polyfill": "^6.9.1",
  "babel-preset-es2015": "^6.3.13",
  "babel-preset-stage-0": "^6.3.13",
  "babelify": "^7.2.0",
  "budo": "^9.3.0",
  "envify": "^3.4.1",
  "ftw": "git+ssh://git@bitbucket.org/globalit/fanteam-widgets.git#fantwo",
  "isomorphic-fetch": "^2.2.1"
}
```
Add node_modules to .gitignore
```sh
$ echo "node_modules" > .gitignore
```

Using yarn
```sh
$ npm i yarn -g
$ yarn
```

Using npm
```sh
$ npm i
```

Add these Browserify transforms to your package.json

```json
"browserify": {
  "transform": [
    "ftw/transforms/fn-jadeify",
    "ftw/transforms/styles",
    "ftw/transforms/icons",
    [
      "babelify",
      {
        "presets": [
          "es2015",
          "stage-0"
        ],
        "plugins": [
          "transform-class-properties",
          "transform-decorators-legacy",
          "class-name"
        ],
        "extensions": [
          ".js",
          ".jade"
        ]
      }
    ],
    "envify"
  ]
}
```

Your first component
```sh
$ mkdir client
$ mkdir client/components
$ mkdir client/components/hello-world
$ cd client/components/hello-world
$ touch hello-world.component.js
$ touch hello-world.component.jade
$ touch hello-world.component.sass
```

Edit the hello-world.component.js and add some basics
```js
// Import necessary decorators
import {Component, Template} from 'ftw/lib'
// Import the template file
import template from './hello-world.component.jade'

// Set component namespace (<ft-hello-world></ft-hello-world>)
@Component('ft')
// Tell component to use the template
@Template(template)

/*
* Tell babel what to export.
* Class name is used as tag name.
* All components must extend from HTMLElement
*/
export default class HelloWorld extends HTMLElement {

}
```

Add component to your application (back to the root of the project)
```sh
$ touch client/components/index.js
```

Export your component by adding this to the file
```js
export HelloWorld from './hello-world/hello-world.component'
```

```sh
$ touch client/index.js
```
Import your components
```js
import './components'
```

Create your index for the project
```sh
$ mkdir public
$ touch public/index.html
```

Copy this template into your index
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>My widget project</title>
</head>
<body>
  <!-- Add your component to the template -->
  <ft-hello-world></ft-hello-world>
  <!-- Include the webcomponents polyfill -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.7.23/webcomponents.min.js"></script>
  <!-- Include the application -->
  <script src="application.js"></script>
</body>
</html>
```

Create a shortcut to start your project by adding this to package.json
```json
"scripts": {
  "start": "budo client/index.js --open --live --dir public --serve application.js"
}
```
* `client/index.js` is the starting point of the application
* `--open` opens your default browser
* `--live` watches for file changes and reloads the browser
* `--dir` sets the static assets (webroot)
* `--serve` name of your bundle (see index.html above)

Start your application
```sh
$ npm start
```

## Templates

We're going to make a component that takes an attribute for a translation key and a dynamic class based on the attribute

Lets start with the basic text.
Open your hello-world.component.jade and enter
```jade
h1 Hello World
```

## Attributes

If you see "Hello World" in your browser, it works!
Now lets make it a bit more dynamic by interpolating a name from an attribute
```jade
h1 Hello ${name}
```

Now you should see "Hello undefined"
Lets wire up the attribute
Open your hello-world.component.js file
```js
// We now need to add the Attribute decorator
import {Component, Template, Attribute} from 'ftw/lib'
import template from './hello-world.component.jade'


@Component('ft')
@Template(template)
// Make an attribute available to the template
@Attribute('name', String)
export default class HelloWorld extends HTMLElement {

}
```
The attribute is not used yet. Go back to public/index.html and add the attribute to our component
```html
<ft-hello-world name="User"></ft-hello-world>
```
Tada!

## Translations

Right now this is English only, which is not great. Lets make it more international by adding translations.
```js
// Add the translation decorator
import {Translation} from 'ftw/services/translation'
```

```js
// Make the translation available to the template
@Translation('hello_world')
```

Use translation in your template
```jade
h1= t('hello', {name})
```
First argument in the translation method is our translation key.
The second argument is our variables.

Now we need a simple translations file. For this demo we will make a static JSON file.
First we need a config file to set the root url for data.
```sh
$ mkdir client/config
$ touch client/config/index.js
```

Open the new index.js and add
```js
import config from 'ftw/services/config'
config.root = location.origin
```

Import config into the application
Open client/index.js and add
```js
import './config'
```

Now create the translation file
```sh
$ mkdir public/translations
$ touch public/translations/en.json
```

Open en.json and add
```json
{
  "hello_world": {
    "hello": "Hello {name}"
  }
}
```
You should now see the string translated in your browser. Feel free to change "Hello {name}" to something else to see the translation work.

Lets add some styling for the component. First of all you need to include the sass file in your template.
Open hello-world.component.jade
```jade
style= require('./hello-world.component.sass')
```

You can now write any styles you need in the sass-file.
```sass
// Import some standard variables from widgets
@import 'ftw/mixins/variables.sass'

h1
  color: $danger
```

## Using existing widgets, events and templating
Widgets are imported from ftw. Lets try and use the form-control.
You need to import the widgets you need to use. This is done to avoid loading more code than necessary.

In hello-world.component.js
```js
import 'ftw/components/form-control/form-control'
```


You can now use the widget in hello-world.component.jade.
Most widgets has the `ft` namespace, which is why you need to prefix the widgets in your template.
Add this line to your template
```jade
h1(class={matches: match})= t('hello', {name})
ft-form-control((valueChanged)=this.matches(e.value, name))
```

This will add an text input that listens for changed value. *The parenthesis is for event listeners.*
When the event is fired it will run the matches method which we will define in the javascript file now.

The class attribute contains an object where the key is the class name which will be added if the value is truthy.

Open hello-world.component.js
```js
export default class HelloWorld extends HTMLElement {
  // This is the method we're running from our template on value change
  matches(value, name) {
    // Set a variable to the boolean result of checking wether
    // the value equals the name in our attribute
    this.match = value === name
    // Update the view by calling the built in render method
    this.render()
  }
}
```

Now we just need to add the class `.matches` to our sass
```sass
.matches
  color: $success
```

Try typing "User" in the input field. The text color should turn green when it matches.
