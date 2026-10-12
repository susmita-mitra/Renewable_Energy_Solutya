import Reveal from "./Reveal";


const dotColumns = [
  {
    dots: ["grey", "grey"]
  },
  {
    dots: ["grey", "grey", "grey", "white"]
  },
  {
    dots: ["grey", "grey", "white", "white", "white"]
  },
  {
    label: "85%",
    className: "dot-column-85",
    dots: [
      "grey",
      "grey",
      "grey",
      "grey",
      "white",
      "white"
    ]
  },
  {
    dots: [
      "grey",
      "grey",
      "white",
      "white",
      "white"
    ]
  },
  {
    dots: [
      "grey",
      "grey",
      "grey",
      "grey",
      "white",
      "white"
    ]
  },
  {
    label: "96%",
    className: "dot-column-96",
    dots: [
      "grey",
      "grey",
      "grey",
      "grey",
      "grey",
      "white",
      "white"
    ]
  },
  {
    dots: [
      "white",
      "white",
      "white",
      "white"
    ]
  },
  {
    dots: [
      "white",
      "white",
      "white"
    ]
  },
  {
    dots: [
      "white",
      "white",
      "white",
      "white"
    ]
  },
  {
    label: "72%",
    className: "dot-column-72",
    dots: [
      "white",
      "white",
      "white",
      "white",
      "white"
    ]
  }
];


function FutureSection() {

  return (
  <Reveal>

    <section className="future-section">


      <div className="section-heading">

        <h2>
          Powering The Future With
          <span>Renewable Energy</span>
        </h2>

      </div>



      <div className="future-main">


        <div className="future-visual-card">


          <div className="efficiency-card">


            <div className="efficiency-top">

              <div>

                <h3>
                  85,0%
                </h3>

                <p>
                  Efficiency
                </p>

              </div>


              <button className="efficiency-plus">
                +
              </button>


            </div>



            <div className="efficiency-chart">


              {
                dotColumns.map((column, index) => (

                  <div
                    key={index}
                    className={`dot-column ${column.className || ""}`}
                  >


                    {
                      column.label && (

                        <span className="dot-label">
                          {column.label}
                        </span>

                      )
                    }



                    {
                      column.dots.map((color, dotIndex) => (

                        <span
                          key={dotIndex}
                          className={`dot dot-${color}`}
                        ></span>

                      ))
                    }


                  </div>


                ))
              }


            </div>



          </div>



          <div className="future-image-card"></div>


        </div>




        <div className="future-info">


          <button className="round-arrow-btn">


            <img
              src="/assets/header/Group 937.png"
              alt="Arrow"
              className="round-arrow-icon"
            />


          </button>



          <div className="national-expansion">


            <h3>
              National Expansion
            </h3>



            <p>
              Rethvelle has successfully implemented renewable energy systems
              across residential communities, commercial facilities, and
              industrial zones—expanding clean energy access across the country.
            </p>


          </div>


        </div>


      </div>





      <div className="future-bottom">


        <h3 className="future-bottom-title">

          Advanced Renewable
          <br />
          Infrastructure

        </h3>




        <div className="future-bottom-content">


          <div className="arrow-line"></div>



          <p>

            We engineer high-performance renewable energy ecosystems tailored to
            meet modern demands. From rooftop solar installations to
            utility-scale wind farms, our advanced technology maximizes energy
            output, reduces carbon emissions, enhances system efficiency, and
            ensures long-term operational reliability for sustainable growth.

          </p>



        </div>


      </div>



    </section>
</Reveal>
  );

}


export default FutureSection;