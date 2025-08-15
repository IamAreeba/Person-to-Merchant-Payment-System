
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

// ========================== 04 ============================= //
/*
    Object: Secure User Password using Bcrypt.js
    . Install package "npm i bcryptjs"
    . Higher the value of salt it will be complex to timetaken to decrypt the password at the time of login
    . We can hash our password without using this bcrypt thing we have userSchema whic is instance of our mongoose schema in this we have power
      from which we can use middlewares, use or create methods in which we have "pre" method
    . pre: We have to use this method before the model creation in the schemas In this we pass a method "save"  
    . save: When we are creating the user and storing in DB before the save this pre method will run. It is acting as a middeware 
            where before savin the data whatever we define in the pre func will called and the data will be saved in DB 
    . If the password wasn’t modified (for example, the user updated only their email), we don’t want to re-hash it again — so we just call next() 
      to skip the hashing step.
    . 201 means something is created
    . In this we have seen 2 ways to encrypt password using direct salt and hashing another in the userSchema
    
*/