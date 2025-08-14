
import { useState } from "react"


export const Register = () => {

    
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""    
    })

    // Handling the input values
    const handleInput = (e) => {
        // console.log("Event Object: ", e)
        let name = e.target.name
        let value = e.target.value

        // My user is obj thats why my setUser is also an obj
        setUser({
            ...user,
            // Below we are getting value but cant assign it in input.name attribute
            // user: value
            [name]: value,
        })
    }

    // Handling the form submit
    const handleSubmit = (e) => {
        console.log("User Info: ", ) 
        e.preventDefault()
        
    }

    return(
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols ">

                            <div className="registration-image">
                                <img 
                                    src="/images/register.png" 
                                    alt="a girl is trying to do registration"
                                    // width="20"
                                    // height="20" 
                                />
                            </div>

                            {/* Lets tackle registration form */}
                            <div className="registration-form">
                                <h1 className="main-heading mb3" > registration Form </h1>
                                <br />


                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username"> Username </label>
                                        <input 
                                            type="text" 
                                            name="username" 
                                            id="username" 
                                            placeholder="Enter UserName"
                                            required
                                            autoComplete="off"
                                            value={user.username}
                                            onChange={handleInput}
                                            />
                                    </div>

                                    <div>
                                        <label htmlFor="email"> Email </label>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            id="email" 
                                            placeholder="Enter Email"
                                            required
                                            autoComplete="off"
                                            value={user.email}
                                            onChange={handleInput}
                                            />
                                    </div>

                                    <div>
                                        <label htmlFor="phone"> Phone </label>
                                        <input 
                                            type="number" 
                                            name="phone" 
                                            id="phone" 
                                            placeholder="Enter Phone Number"
                                            required
                                            autoComplete="off"
                                            value={user.phone}
                                            onChange={handleInput}
                                            />
                                    </div>

                                    <div>
                                        <label htmlFor="password"> Password </label>
                                        <input 
                                            type="password" 
                                            name="password" 
                                            id="password" 
                                            placeholder="Enter Password"
                                            required
                                            autoComplete="off"
                                            value={user.password}
                                            onChange={handleInput}
                                            />
                                    </div>

                                    <br />

                                    <button type="submit" className="btn btn-submit" >
                                        Register Now
                                    </button>

                                </form>
                            </div>

                        </div>
                    </div>
                </main>
            </section>
        
       
        
        </>
    )
}


