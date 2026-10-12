import Reveal from "./Reveal";

function CommitmentSection() {

  return (

    <Reveal>

    <section className="commitment-section">

      <div className="commitment-heading">

        <h2>

          Our Long-Term Commitment To

          <span>
            Sustainable Innovation
          </span>

        </h2>
        <img
          src="/assets/header/Group 937.png"
          alt="Arrow"
          className="commitment-arrow"
        />


      </div>





      <div className="commitment-grid">



        <div className="commitment-item eco-friendly-item line-item">


          <img
            src="/assets/header/eco-friendly.png"
            alt="Eco Friendly"
            className="commitment-icon"
          />



          <h4>
            Eco-Friendly Properties
          </h4>



          <p>

            We develop properties with an environmentally responsible
            approach, prioritizing energy efficiency, smart resource
            management, sustainable materials, and creating positive
            impact for surrounding communities and long-term growth.

          </p>


        </div>





        <div className="sustainable-card">


          <img
            src="/assets/header/sustainable.png"
            alt="Sustainable"
            className="sustainable-icon"
          />



          <div className="sustainable-content">


            <h4>
              Sustainable Design
            </h4>



            <p>

              Every project is guided by long-term sustainability
              principles—combining modern aesthetics, functional
              excellence, and responsibly sourced materials.

            </p>


          </div>


        </div>





        <div className="commitment-item investment-item line-item">


          <img
            src="/assets/header/investement.png"
            alt="Investment"
            className="commitment-icon"
          />



          <h4>
            Long-Term Investment Value
          </h4>



          <p>

            Our developments are thoughtfully designed to deliver lasting
            value, balancing sustainable economic growth with strong
            social responsibility and environmental stewardship to
            support resilient communities and long-term progress.

          </p>


        </div>





        <div className="commitment-item technology-item line-item">


          <img
            src="/assets/header/innovation.png"
            alt="Innovation"
            className="commitment-icon"
          />



          <h4>
            Innovation & Green Technology
          </h4>

          <p>

            By integrating advanced green technologies and innovative
            sustainable solutions, we create healthier, smarter, and
            more energy-efficient spaces designed to adapt, perform
            efficiently, and remain resilient for future generations.

          </p>


        </div>

      </div>

    </section>
    </Reveal>

  );

}


export default CommitmentSection;