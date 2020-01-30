# Weather-Journal App Project

## Overview
This project is an asynchronous node based web app. It uses the Web API of openweathermap.org. 
A local server (server.js) is set up via node and express.
The app.js is in the website directory and holds the API key.

## User interaction
The user can enter a zip-code in the UI. The current temperatur in this zip-area is then retrieved from the API via fetch as json strings. It will be displayed on the dynamically updated GUI.

## Installation instructions
To get this application run, install node.js on your machine. 
In the file package.json is a list of dependencies, listing all node packages the application needs.
Excuting then "npm install" will install all packages/libraries into the directory node_modules.
Run "npm start" to start the local server, listening on port 3000.

## Extras
