/*
    --------------------
        express.Router
    --------------------

    In Express.js, express.Router() is a mini Express application without all the server 
    configurations but with the ability to define routes, middleware, and even have its own set of 
    route handlers. It allows you to modularize your routes and middleware to keep your code 
    organized and maintainable.

    https://expressjs.com/en/guide/routing.html
    Use the express.Router class to create modular, mountable route handlers. A Router instance 
    is a complete middleware and routing system; for this reason, it is often referred to as a 
    "mini-app".

*/

const express = require('express')
const router = express.Router()
// const { home, register } = require("../controllers/auth-controller")
const authControllers = require("../controllers/auth-controller")

// router.get('/', (req, res) => {
//     res.status(200).send("Welcome to Person-to-Merchant payment System by Areeba Amjad through router")
// })

// From this we can do chaining by using route
// router.route('/').get((req, res) => {
//     res.status(200).send("Welcome to Person-to-Merchant payment System by Areeba Amjad through router")
// })

router.route('/').get(authControllers.home)

// router.route('/register').get((req, res) => {
//     res.status(200).send("Welcome to Registeration page through router")
// })


router.route('/register').post(authControllers.register)

router.route('/login').post(authControllers.login)

module.exports = router 