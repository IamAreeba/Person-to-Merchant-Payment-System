
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

// Since our nodemon continuously checkout only server file so we have to include alll things here
const router = require('./router/auth-router')


/*
Middleware is a function that has access to the req, res, and next() objects, and it runs before the final route handler.
Middleware in Express.js is a function that sits between the request and the response.
    I want to get and post with JSON data but i have to define a middleware for that
    app.use(express.json());: This line of code adds Express middleware that
    parses incoming request bodies with JSON payloads. It's important to place this
    before any routes that need to handle JSON data in the request body. This
    middleware is responsible for parsing JSON data from requests, and it should be
    applied at the beginning of your middleware stack to ensure it's available for
    all subsequent route handlers.
*/

app.use(express.json())


// This line tell my server that i a using router so dont use below app routes so based on thsi he jump into that particular path
// Mount the Router: To use the router in your main Express app, u can mount it at specific URL Prefix
// Mounting a router means connecting a group of related routes to the main app under a common path.
app.use('/api/auth', router)


// app.get('/', (req, res) => {
//     res.status(200).send("Welcome to Person-to-Merchant payment System by Areeba Amjad")
// })


// app.get('/register', (req, res) => {
//     res.status(200).send("Welcome to Registeration page")
// })


const PORT = 5000
app.listen(PORT, () => {
    console.log(`server is running at port http://localhost:${PORT}`)
})