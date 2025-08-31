
// ========================== 01 ============================= //
/*
    . If u want to work on react project uses your fav framework NextJS etc 
    . To use react without FM use Vite or Parcel. We'll use Vite
        Vite: npm create vite@latest
        FM: React
        Variant: JS

    . Our root file which is App.jsx is exported as default export in main.jsx

*/

// ========================== 02 ============================= //
/*
    Object: React Router Dom
    . npm i react-router-dom
    . Using flat arrow fuction
    . main page wants default export
    . When we export directly so we have to export it like an obj in another file
    . Interview Question: If we do default export then how to import it in another file vice versa for default export ?

*/


// ========================== 03 ============================= //
/*
    Object: Navbar with react
    . In navbar page will not reload cuz we are calling one of its component and this is SPA
    . Component = If same piece of code we use every where we make component of it in a place and pass the reference where we need it
      e.g. Navbar, Footer etc
    . React is all about components
    . For components we use pascal conventions first letter capital. e.g. SetItem, GetItem
    . When making any component we have to use flat arrow fucntion
    . If we want to use the comonents every where we can either pass the reference to top of every component or we can pass it in BrowserRouter
    . 
*/


// ========================== 04 ============================= //
/*
    Object: Registration Page UI & stored Form data in React State Variable
    . If we have anything in public we can directly access it 
    . name attribute in input is very important
    . We can see all the components in the DevTools but we dont hve any states in Register page
    . In useState var which is hooks when we pass anything to setUser it will change the value of user
    . People can make diff state var for diff input but we can make it together by using obj in useState and pass it to the state var e.g. user
    . Now we have assigned the obj init we created i the user var now we have to assign it to te inputs so we used value attribute 
    . so when we assign the value in that input then we cant write anything cuz the value we have set it but we want that if i write any value in 
      that input the value has to be updated so we do it using "onChange" and inside that we are actually using function 
    . onChange =  When we use that we get an event obj use console to findout inside that we have target and inside we have name thats why that 
                  name obj is very imp and that name has to be matching with the one u describe in the schema cuz that data we have to pass in DB
    . setUser() is our updated function. So whatever the field user targeted we have updated its value in our obj in useState 
    . My user is obj thats why my setUser is also an obj
    . SpreadOperator(...) = If i want my prev data to be preserved i can use this operator. e.g. if i change phone value then remaining values
                            like phone, email will reaim intacked
    . But our name attribute is diff every time in input so when i get the value how will i set it to correct input.name we have to dynamically
      set that using this [user]: value. If we dont use that [] then we are gettiga value but not sure on which name we have to add it
    . Aftre doing every thing we get the value so in DevTools see components Register u wiil see the data in hooks dynamic
    . Whatever the form value user have filled we have stored it in State var see hooks 
    . So in postmon req.body we have passed the data to backend in mongodb now we are doing it vis state in frontend.We have go just connect
      frontend with backend but we want the updated data of frontend also thats why we store it in state w
    . onSubmit: form have an event onSubmit whenever user fill the form. Also prevent the page reload cuz by default when we click the btn it 
                reloads page   
    . We have stored the data in state object and onSubmit we are getting the data 
    . {
          How data dynamically rendered
          ..user,          password (init value ="") 
                           email    (init value ="")
                           name     (init value ="Areeba")
                           
          [name]: value,   
          [phone]: 234,    phone    (init value = "12"  updated value = "234")
      }
    . So whatever the value we target he will update dynamically
*/



// ========================== 05 ============================= //
/*
    Object: Storing Login Form Data in React State
    . Same as the work we did in Registeration
*/



// ========================== 06 ============================= //
/*
    Object: Home Page using React
    . We have multiple btns so we called it Reusable components 
*/


// ========================== 07 ============================= //
/*
    Object: Contact Page using React + storing data in states
    . // We can also write the above like that
        setContact((prev) => ({
            ...prev,
            [name]: value
        }))

*/


// ========================== 08 ============================= //
/*
    Object: Building a Complete MERN Stack Website | 404 Error Page
    . How to see if someone is accessing outside of the pages that we have created
    . We use wild card (*) 
    . We made Analytics area common by making it a component

*/ 



// ========================== 09 ============================= //
/*
    Object: Connect React with NodeJS & MongoDB & Stored Registration Form Data in Database in MERN
    . We need URL, methos e.g POST when we work with postmon we also need that in Frontend but how to pass the data 
    . body: we need to pass our state variable in json format
    . we parse URL either fetch or axios
    . The CORS (Cross-Origin Resource Sharing) policy is a security feature implemented by web browsers to restrict webpages from making 
      requests to a different domain than the one that served the webpage. In the context of a MERN stack (MongoDB, Express.js, React, Node.js) application, you might encounter CORS issues when the frontend (React) and backend (Express.js) are hosted on different domains.
    . We never face CORS policy in prod
    . So we have to tell our server that the requested data which is coming from PORT 5173 is ours we have to by pass that dont restrict it
    . We have to give access to it
    . npm i cors
    . We have did require in server but we have to use it as a middleware 
    . The fetch return promise to u so we use async await
    . Our server and client run on diff domain thats why we get CORS Policy
    . status: 201, statusText: "Created". If we get this then we have to clean the fields and redirect the user to login
    . For redirecting user we use useNavigate from react-router-dom
    . 


*/ 


// ========================== 10 ============================= //
/*
    Object: Storing React Login Form Data in our MongoDB Database 
    . Now after reg we have to check if the data in login form is valid or not, the data exist in DB or not
    . Now on the basic of token we have to redirect the user 
*/ 

