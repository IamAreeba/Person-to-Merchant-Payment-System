import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../store/auth"
const URL = "http://localhost:5000/api/auth/login"

export const Login = () => {


    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate()
    const { storeTokenInLS } = useAuth()


    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value

        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        // console.log("User Info: ", user)
        e.preventDefault()

        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })

            console.log("Login Successful: ", response)
            const res_data = await response.json()

            if (response.ok) {

                // console.log(response.ok)
                storeTokenInLS(res_data.token)
                setUser({
                    email: "",
                    password: ""
                })
                navigate("/")
            }
            else {
                console.log("Backend error:", res_data);

                const errorMsg = Array.isArray(res_data.msg)
                    ? res_data.msg.join("\n")
                    : res_data.msg;

                alert(errorMsg || "Something went wrong");
            }



        } catch (error) {
            console.log("Login Error: ", error)
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
                                            autoComplete="on"
                                            value={user.email}
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


