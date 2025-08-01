// useReducer hook in which we have concept of dispatch (assign work/tell someone to work) action (in which work is performed) 
// "action" is the desc in which what u want to do 
// "dispatch" is the function that carries out that action
// Same as the diff btw routes and controllers to understand this we used above strategy 

/*

    --------------------
     * Controllers
    --------------------
    
    In an Express.js application, a "controller" refers to a part of your code that is responsible for handling the application's logic. 
    Controllers are typically used to process incoming requests whic comes from router, 
    Interact with models (data sources) when we actually work with DB, and send responses back to clients. 
    They help organize your application by separating concerns and following the MVC (Model-View-Controller) design pattern.

*/


const home = async (req, res) => {
    try {
        res.status(200).send("Welcome to Person-to-Merchant payment System by Areeba Amjad through controller")
    } catch (error) {
        res.status(400).send({ msg: "Page not found" })
    }
}


const register = async (req, res) => {
    try {
        console.log(req.body)
        res.status(200).json({ message: req.body })
    } catch (error) {
        res.status(400).send({ msg: "Page not found" })
    }
}

module.exports = { home, register }