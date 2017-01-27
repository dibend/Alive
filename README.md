# Alive

##Run arbitrary javascript from central server while window is open

This Proof of Concept demonstrates the ablility to excecute arbitrary javascript from a central server in a window left open.

When the server is running and someone has alive.html open in a web browser, the javascript contained in alive.js will be downloaded from the server and ran every second.
alive.js can be modified while the server and client are running and the altered javascript will be run by the client.

## test it out

Install [node.js](https://nodejs.org/en/) if you haven't

run `npm install` to install dependencies

run `npm start` to start the alive server on port 3000

open localhost:3000 in your web browser on the same machine or visit port 3000 on your server with another device's web browser 
