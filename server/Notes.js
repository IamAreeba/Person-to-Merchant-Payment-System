
// ========================== 01 ============================= //
/*
    Object: Securing Your Private Data with Dotenv in our Backend App
    . To secure our data we have to use dotenv package 
    . npm i dotenv
    . In Mongodb a collection is a group of related document or data entries
    . If u dont have any collection that u wont see your DB 
    . To handle json data we used the middleware so use require to get env in your server also
    . "require("dotenv").config()" by writing this line it means that u can use env var in your app
    
*/

// ========================== 02 ============================= //
/*
    Object: Creating the User Schema & Model for User Registration
    . User schema telss the structure and with model we can do CRUD on that 
    . Schema: Defines the structure of the documents within a collection. It specifies the fields, their types, and any additional constraints or 
              validations.
    . In out registeration form we have only 4 properties or attributes no more or less
    . userSchema is our instance of mongo schema. userSchema is now have data and now we can give validation and define middleware 
    . Model: Acts as a higher-level abstraction that interacts with the database based on the defined schema. It represents a collection 
             and provides an interface for querying, creating, updating, and deleting documents in that collection. Models are created fromschemas and enable you to work with MongoDB data in a more structured manner in your application.

    . MongoDb store the collection name with their plural form so we write singular form in here 
    . Now in this we have created the model and schema
    
*/

// ========================== 03 ============================= //
/*
    Object: Storing Registered User Data in an Online Database
    . We are getting message in response but if we dont want that we have to do destructuring 
    . for findOne() method we have to await. Cuz we are delaing promise without waiting so its difficult to handle for them also
    
*/