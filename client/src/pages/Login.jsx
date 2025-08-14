import { useState } from "react"

export const Login = () => {


    const [user, setUser] = useState({
        email: "",
        password: ""
    })


    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value
        
        setUser({
            ...user,
            [name]: value
        })
    }
    
    const handleSubmit = (e) => {
        console.log("User Info: ", user) 
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
                                />
                            </div>

                            {/* Lets tackle registration form */}
                            <div className="registration-form">
                                <h1 className="main-heading mb3" > Login Form </h1>
                                <br />



                                <form onSubmit={handleSubmit}>
                                    
                                    <div>
                                        <label htmlFor="email"> Email </label>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            id="email" 
                                            placeholder="Enter Email"
                                            required
                                            autoComplete="off"
                                            value = {user.email}
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
                                            value = {user.password}
                                            onChange={handleInput}
                                            />
                                    </div>

                                    <br />

                                    <button type="submit" className="btn btn-submit" >
                                        Login Now
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


