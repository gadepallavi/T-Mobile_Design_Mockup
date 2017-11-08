# `T-Mobile_Design_Mockup` —  A welcome screen for T-Mobile

This project is an application skeleton for a design mockup for T-Mobile

The app shows a welcome screen wired with one controllers and view together.

Assumption :
1) Dark pink is the background color for full page.


## Getting Started

To get you started you can simply clone the `T-Mobile_Design_Mockup` repository and install the dependencies:

### Prerequisites

You need git to clone the `T-Mobile_Design_Mockup` repository. You can get git from [here][git].

We also use a number of Node.js tools to initialize and test `T-Mobile_Design_Mockup`. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].

### Clone `T-Mobile_Design_Mockup`

Clone the `T-Mobile_Design_Mockup` repository using below URL:

```
https://github.com/gadepallavi/T-Mobile_Design_Mockup.git

```


### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [Node package manager][npm].
* We get the Angular code via `bower`, a [client-side code package manager][bower].
* In order to run the end-to-end tests, you will also need to have the
  [Java Development Kit (JDK)][jdk] installed on your machine. Check out the section on
  [end-to-end testing](#e2e-testing) for more info.

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files


### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].


## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
  welcome/                --> the view1 view template and logic
    welcome.html            --> the partial template
    welcome.js              --> the controller logic
    welcome_test.js         --> tests of the controller

  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```
