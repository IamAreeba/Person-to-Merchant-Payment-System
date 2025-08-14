import { Analytics } from "../components/Analytics"


export const Home = () => {

    return (

        <>
            <main>

                {/* First Section - Hero Section  */}
                <div className="section-hero">
                    <div className="container grid grid-two-cols ">

                        {/* Left Hero Content */}

                        <div className="hero-content">
                            <p>Welcome to the Future of Digital Payments</p>
                            <h1>P2M Payment System</h1>
                            <p>
                                Send and receive secure payments instantly between customers and merchants.
                                Our platform ensures fast transactions, easy integration, and reliable security.
                                Get started today and experience seamless digital payments.
                            </p>

                            <div className="btn btn-group">
                                <a href="/contact">
                                    <button> Connect Now </button>
                                </a>

                                <a href="/services">
                                    <button className="btn secondary-btn"> Learn More </button>
                                </a>

                            </div>


                        </div>

                        {/* Right Hero Images */}
                        <div className="hero-image">
                            <img src="/images/home.png" alt="Coding Together" width="400" height="500" />
                        </div>


                    </div>
                </div>



                {/* Second Section - Analytics Section  */}
                <Analytics />



                {/* Third Section */}
                <div className="section-hero">
                    <div className="container grid grid-two-cols ">

                        {/* Left Hero Content */}

                        {/* Right Hero Images */}
                        <div className="hero-image">
                            <img src="/images/design.png" alt="Coding Together" width="400" height="500" />
                        </div>

                        <div className="hero-content">
                            <p>Welcome to the Future of Digital Payments</p>
                            <h1>P2M Payment System</h1>
                            <p>
                                Send and receive secure payments instantly between customers and merchants.
                                Our platform ensures fast transactions, easy integration, and reliable security.
                                Get started today and experience seamless digital payments.
                            </p>

                            <div className="btn btn-group">
                                <a href="/contact">
                                    <button> Connect Now </button>
                                </a>

                                <a href="/services">
                                    <button className="btn secondary-btn"> Learn More </button>
                                </a>

                            </div>


                        </div>

                        


                    </div>
                </div>



            </main>




        </>


    )
}