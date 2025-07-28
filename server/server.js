
/*
    For working on backend we need to install packages where all records of the things 
    we are using are stored in a file called package.json.

    We are creating the server with Express.js because using pure Node.js is lengthy.

    Steps to set up:
        mkdir server          -> Create a server folder
        npm init -y           -> Initialize package.json
        npm i express         -> Install express


    app.get: Sets up a route handler for HTTP GET requests.
    "/": Defines the route path, responding to the root URL.
    (req, res) => { ... }: An arrow function handling the request (req) and constructing the response (res).
    res.send("Hello, World!"): Sends the "Hello, World!" message as the response when the route is accessed.

    To get the response, we have to start (listen) the server so people can access it.

    Use:
        npm run start
    To continuously watch code changes, use nodemon (like continuous reload in Next.js).


*/



const express = require('express') // To get the power of express in my app
const app = express()              // Now with app we can create server, manage middlewares etc


app.get('/', (req, res) => {
    res.status(200).send("Welcome to Person-to-Merchant payment System by Areeba Amjad")
})


app.get('/register', (req, res) => {
    res.status(200).send("Welcome to Registeration page")
})


const PORT = 5000
app.listen(PORT, () => {
    console.log(`server is running at port http://localhost:${PORT}`)
})