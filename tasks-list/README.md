# Introduction

The project was created with [Create React App](https://github.com/facebook/create-react-app) which helps us with the startup configuration for quick setup of the app.

It also does not provide the new performance measurements given by google(https://support.google.com/webmasters/answer/9205520?hl=es).

## Start Proyecto.

To start the project, Download all dependencies with NPM -i or Yarn whichever is more comfortable for you.

Once downloaded we are going to start the application [npm run start].

This will bring up the application in http://localhost:3001/


# Design
A basic project architecture was used using Redux for state management, facilitating the centralization of the state of the entire application in a single place. 

Independent components with low coupling were always thought of, so that they can be reused from any other part of the application.

For the styles, StyleComponet is used, which helps us to centralize the styles avoiding long css files that are unmaintainable over time.

# Test
Unit tests were not performed due to time constraints.

Integration tests with selenium could also be added, but being such a small project, I didn't think it was necessary.

