import Reveal from "./Reveal";

const chartBars = [
  "bar-1",
  "bar-2",
  "bar-3",
  "bar-4",
  "bar-5",
  "bar-6",
  "bar-7",
  "bar-8",
  "bar-9",
  "bar-10"
];


function JourneySection() {

  return (

    <Reveal>

    <section className="journey-section">


      {/* LEFT CONTENT */}

      <div className="journey-content">


        <h2 className="journey-heading">


          <span className="journey-white">
            Begin Your
          </span>


          <span className="journey-white">
            Renewable Energy
          </span>


          <span className="journey-muted">
            Journey For A
          </span>


          <span className="journey-muted">
            Better Tomorrow
          </span>


        </h2>




        <button className="journey-btn">


          <span>
            Start Now
          </span>


          <span className="journey-btn-circle">
            ›
          </span>


        </button>


      </div>






      {/* RIGHT CHART CARD */}

      <div className="journey-chart-card">



        <div className="chart-card-top">


          <img
            src="/assets/header/logo.png"
            alt="Logo"
            className="chart-logo"
          />



          <div className="chart-circles">

            <span></span>
            <span></span>
            <span></span>

          </div>



        </div>







        {/* CHART AREA */}

        <div className="chart-area">


          <div className="chart-labels">

            <span>100%</span>
            <span>80%</span>
            <span>50%</span>
            <span>30%</span>
            <span>0%</span>

          </div>





          <div className="chart-bars">


            {
              chartBars.map((bar,index)=>(

                <div
                  key={index}
                  className={`bar ${bar}`}
                ></div>

              ))
            }


          </div>



        </div>



      </div>






      {/* WATERMARK */}

      <div className="journey-watermark">

        Rethvelle

      </div>



    </section>

    </Reveal>

  );

}


export default JourneySection;