import { useState } from "react"

export const Contact = () => {

    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: ""
    })

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value

        setContact({
            ...contact,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Cotact Info: ", contact)
    }

    return (
        <>

            <>
                <div className="section-contact">
                    <div className="contact-content container">
                        <h1 className="main-heading"> Contact Us</h1>
                    </div>

                    {/* Contact page main */}
                    <div className="container grid grid-two-cols">

                        <div className="contact-img">
                            <img src="/images/support.png"
                                alt="w are always ready to help"
                                width="100"
                                height="100"
                            />
                        </div>

                        {/* Contact form actual content */}
                        <section className="section-form">
                            <form onSubmit={handleSubmit} >

                                <div>
                                    <label htmlFor="username"> Username </label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        placeholder="Enter Username"
                                        required
                                        autoComplete="off"
                                        value={contact.username}
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
                                        value={contact.email}
                                        onChange={handleInput}
                                    />
                                </div>


                                <div>
                                    <label htmlFor="message"> Message </label>
                                    <br />
                                    <textarea
                                        name="message"
                                        id="message"
                                        cols="30"
                                        row="10"
                                        required
                                        autoComplete="off"
                                        value={contact.message}
                                        onChange={handleInput}

                                    ></textarea>
                                </div>


                                <div>
                                    <button type="submit" className="btn btn-submit" >
                                        Login Now
                                    </button>
                                </div>

                            </form>
                        </section>

                    </div>
                </div>

            </>

        </>
    )
}


