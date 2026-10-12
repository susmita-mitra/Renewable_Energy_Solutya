import { useEffect, useState, useRef } from "react";
import Reveal from "./Reveal";


const trustData = [

  {
    number: 655,
    title: "Proven Industry Expertise",
    description:
      "We deliver reliable renewable energy solutions backed by years of experience, serving residential, commercial, and industrial sectors with efficient, sustainable systems.",
    imageClass: "trust-image-1"
  },


  {
    number: 275,
    title: "Advanced Green Technology",
    description:
      "Our solutions integrate smart solar, advanced energy storage, and real-time monitoring systems to maximize efficiency, optimize performance, and ensure reliable sustainable power management.",
    imageClass: "trust-image-2"
  },


  {
    number: 780,
    title: "Trusted Nationwide Partner",
    description:
      "Businesses across the country rely on us for scalable, compliant, and future-ready energy solutions designed to enhance efficiency, ensure regulatory standards, and support long-term sustainable growth.",
    imageClass: "trust-image-3"
  }

];







function Counter({ target }) {


  const [count, setCount] = useState(0);

  const [startCount, setStartCount] = useState(false);


  const counterRef = useRef(null);





  // Detect scroll visibility

  useEffect(() => {


    const element = counterRef.current;


    if (!element) return;



    const observer = new IntersectionObserver(


      (entries) => {


        if (entries[0].isIntersecting) {


          // reset and start again

          setCount(0);

          setStartCount(true);


        } 


        else {


          // stop and reset

          setStartCount(false);

          setCount(0);


        }


      },


      {
        threshold:0.5
      }


    );



    observer.observe(element);



    return () => observer.disconnect();



  }, []);









  // Number animation

  useEffect(() => {


    if(!startCount) return;



    let start = 0;


    const duration = 2000;


    const increment = target / (duration / 16);




    const timer = setInterval(() => {



      start += increment;




      if(start >= target){


        start = target;


        clearInterval(timer);


      }





      setCount(Math.floor(start));



    },16);





    return () => clearInterval(timer);



  },[startCount,target]);








  return (

    <h3 ref={counterRef}>

      {count},0k

    </h3>

  );

}









function TrustSection() {


  return (

    <Reveal>

    <section className="trust-section">



      <div className="trust-heading">


        <h2>

          Why Businesses Trust Our Green


          <span>
            Energy Solutions
          </span>


        </h2>


      </div>









      <div className="trust-content">


        {

          trustData.map((item,index)=>(


            <div
              className="trust-row"
              key={index}
            >





              {/* Left Stat */}

              <div className="trust-stat">


                <div className="trust-stat-top">


                  <span className="trust-play"></span>



                  <Counter target={item.number}/>



                </div>


              </div>









              {/* Middle Image */}


              <div
                className={`trust-image-box ${item.imageClass}`}
              ></div>









              {/* Right Content */}


              <div className="trust-detail">



                <h4>
                  {item.title}
                </h4>




                <p>
                  {item.description}
                </p>





                <a href="#">
                  Learn More
                </a>




              </div>





            </div>


          ))

        }



      </div>








      <button className="view-all-btn">


        <span>
          View All
        </span>




        <span className="view-all-arrow">


          <img
            src="/assets/header/below_arrow.png"
            alt="Arrow"
          />



        </span>



      </button>





    </section>
    </Reveal>

  );

}



export default TrustSection;