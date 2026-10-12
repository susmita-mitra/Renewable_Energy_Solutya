import Reveal from "./Reveal";

function SmartEnergySection() {

  return (

    <Reveal>

    <section className="smart-energy-section">


      <div className="smart-energy-top">


        {/* LEFT VISUAL CARD */}

        <div className="clean-energy-card">


          <h3>
            Clean Energy
            <br />
            Properties
          </h3>



          <button className="clean-plus-btn">
            +
          </button>



          <div className="clean-energy-image"></div>


        </div>





        {/* RIGHT CONTENT */}

        <div className="smart-energy-content">


          <h2 className="smart-energy-heading">

            Smart Renewable
            <br />
            Energy Solutions For

            <span>
              Every Need
            </span>


          </h2>





          <div className="smart-energy-info">


            <img
              src="/assets/header/Group 913.png"
              alt="Arrow"
              className="smart-energy-arrow"
            />



            <p className="smart-energy-description">

              Renewable Energy Solutions Nationwide

            </p>


          </div>





          <button className="get-started-btn">


            <span>
              Get Started
            </span>



            <span className="get-started-circle">

              <img
                src="/assets/header/angle.png"
                alt="Arrow"
              />

            </span>


          </button>



        </div>


      </div>





      {/* SERVICES LIST */}

      <div className="energy-services">


        <div className="energy-service-row">


          <h4>
            Nationwide Renewable Installations
          </h4>



          <div className="service-pill"></div>



          <span className="service-number">
            001
          </span>


        </div>





        <div className="energy-service-row">


          <h4>
            Integrated Solar &amp; Smart Systems
          </h4>



          <div className="service-pill"></div>



          <span className="service-number">
            002
          </span>


        </div>





        <div className="energy-service-row">


          <h4>
            Scalable Energy Solutions
          </h4>



          <div className="service-pill"></div>



          <span className="service-number">
            003
          </span>


        </div>



      </div>



    </section>
    </Reveal>

  );

}


export default SmartEnergySection;