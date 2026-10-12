import Navbar from "./Navbar";


function Hero() {

    return (

        <section className="hero">


            {/* Hero Background */}
            <img
                src="/assets/header/Subtract.svg"
                alt=""
                className="hero-bg"
            />



            {/* Navbar */}
            <Navbar />



            {/* Right Grey Panel */}
            <div className="hero-right-panel">

            </div>



            {/* Hero Content */}
            <div className="hero-content">


                <p className="hero-subtitle">
                    THE FUTURE OF CLEAN ENERGY
                </p>


                <h1 className="hero-title">
                    Rethvelle
                </h1>


            </div>



            {/* Bottom Description */}
            <p className="hero-description">

                Powering a sustainable future with innovative renewable energy solutions, harnessing solar, wind, and smart
                <br />

                technology to deliver cleaner, smarter, efficient energy systems worldwide.

            </p>




            {/* Hero Action */}
            <div className="hero-action">


                <div className="hero-circle hero-circle-left">

                </div>



                <div className="hero-circle hero-circle-right">


                    <img
                        src="/assets/header/plus.png"
                        alt="Plus"
                        className="plus-icon"
                    />


                </div>


            </div>



        </section>

    )

}


export default Hero;