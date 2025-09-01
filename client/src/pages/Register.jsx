
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../store/auth"


export const Register = () => {


    const [user, setUser] = useState({
        username: "",
        accNo: "",
        email: "",
        phone: "",
        password: ""
    })

    const navigate = useNavigate()
    const { storeTokenInLS } = useAuth()



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
    const handleSubmit = async (e) => {
        // console.log("User Info: ",user)
        e.preventDefault()

        try {
            const response = await fetch(`http://localhost:5000/api/auth/register`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                // Our data is in form of obj so we have to convert it into JSON
                body: JSON.stringify(user)
            })
            // console.log(response)
            const res_data = await response.json()

            if (response.ok) {

                console.log("res from server: ", res_data)
                storeTokenInLS(res_data.token)
                setUser({
                    username: "",
                    accNo: "",
                    email: "",
                    phone: "",
                    password: ""
                })
                navigate("/login")

            }

            else {
                console.log("Backend error:", res_data);

                const errorMsg = Array.isArray(res_data.msg)
                    ? res_data.msg.join("\n")
                    : res_data.msg;

                alert(errorMsg || "Something went wrong");
            }

        } catch (error) {
            console.log("register: ", error)
        }

    }

    return (
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
                                            autoComplete="on"
                                            value={user.username}
                                            onChange={handleInput}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="accNo"> accNo </label>
                                        <input
                                            type="text"
                                            name="accNo"
                                            id="accNo"
                                            placeholder="Enter accNo"
                                            required
                                            autoComplete="on"
                                            value={user.accNo}
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
                                            autoComplete="on"
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
                                            autoComplete="on"
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
                                            autoComplete="on"
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


