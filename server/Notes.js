
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


// ========================== 05 ============================= //
/*
    Object: Secure User Authentication with JSON Web Token (JWT)
    . What is JWT ?

    . JSON Web Tokens (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information   
      between parties as a JSON object.  
    . JWTs are often used for authentication and authorization in web applications.  
    1. Authentication: Verifying the identity of a user or client.  
    2. Authorization: Determining what actions a user or client is allowed to perform.  

    Components of a JWT:

    . Header: Contains metadata about the token, such as the type of token and the signing algorithm being used.  
    . Payload: Contains claims or statements about an entity (typically, the user) and additional data. Common claims include user ID, username, 
               and expiration time.  
    . Signature: To verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way, a 
                 signature is included.
    
    . Tokens: Tokens, such as JWTs (JSON Web Tokens), are typically not stored in the database along with other user details. Instead, they are 
              issued by the server during the authentication process and then stored on the client-side (e.g., in cookies or local storage) for later use.

    . Install package "npm i jsonwebtoken"
    . With the help of this methods we have used in model we can create no.of methods 
    . userSchema is our instance method in which we create no. of functions like generateToken

    . In most cases, converting `_id` to a string is a good practice because it ensures consistency and compatibility across different JWT 
      libraries and systems. It also aligns with the expectation that claims in a JWT are represented as strings.
    
*/


// ========================== 06 ============================= //
/*
    Object: Building a Complete User Login Route with Functionality
    
*/

// ========================== 07 ============================= //
/*
    Object: Building a Custom Compare Password Check Function
    
*/


// ========================== 08 ============================= //
/*
    Object: Registration & Login Form Validation using ZOD
    . We did only require: true for validation but we will use ZOD validation it was built for TS but we use it through JS
    . Package install: "npm i zod"
    . We have created the obj schema now we need a validator middlware whcih validates that whatever the user enter in the registeration and 
      whatever we have define in zod structure are matching or not. For this work we need a middleware 

    . await schema.parseAsync(req.body) is the line where you use Zod to validate the request body data against the defined schema.
      https://github.com/colinhacks/zod#parseasync

    . Using Sync Version = `.parse(data: unknown): T`

      Given any Zod schema, you can call its `.parse` method to check `data` is valid. If it is valid then it returns a value is returned 
      with full type information! Otherwise, an error is thrown.

    . Using Async Version = `parseAsync(data: unknown): Promise<T>`

      If you use asynchronous [refinements](https://github.com/colinhacks/zod#refine) or[transforms](https://github.com/colinhacks/zod#transform) (more on those later), you'll need to use `.parseAsync`.

    . Now we have made both now next is to check on the route before redirecting we have to check the input there we will use that zod and 
      obj schema and aftere checking we redirect in that defined route and then our main controller will run  
      
*/