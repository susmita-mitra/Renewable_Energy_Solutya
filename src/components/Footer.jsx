import Reveal from "./Reveal";

const footerButtons = [
  "Get Started",
  "Solutions",
  "Contact Us"
];


const socialIcons = [
  {
    name: "Facebook",
    image: "/assets/header/fb.png"
  },
  {
    name: "X",
    image: "/assets/header/x.png"
  },
  {
    name: "Instagram",
    image: "/assets/header/intsa.png"
  }
];


const footerColumns = [
  [
    "Solutions",
    "Solar Energy",
    "Energy Solutions"
  ],

  [
    "Industries",
    "Residential",
    "Commercial"
  ],

  [
    "Company",
    "About Us",
    "Sustainability"
  ]
];



function Footer(){

return(

 <Reveal>

<footer className="footer-section">


  {/* FOOTER TOP */}

  <div className="footer-top">


    <div className="footer-top-left">


      <h4>
        Renewable Energy Solutions
      </h4>



      <div className="footer-buttons">


        {
          footerButtons.map((button,index)=>(

            <a
              href="#"
              key={index}
              className={
                index === 0
                ? "footer-btn footer-btn-active"
                : "footer-btn"
              }
            >

              {button}

            </a>

          ))
        }


      </div>


    </div>





    <h2 className="footer-heading">


      <span>
        Small Changes In
      </span>


      <span>
        Energy Big
      </span>


      <span>
        Changes For Earth
      </span>


    </h2>



  </div>






  <h4 className="footer-social-title">

    Find Us On Social Media

  </h4>





  <div className="footer-divider"></div>






  {/* FOOTER BOTTOM */}

  <div className="footer-bottom">



    {/* SOCIAL ICONS */}

    <div className="social-icons">


      {
        socialIcons.map((icon,index)=>(

          <a
            href="#"
            aria-label={icon.name}
            key={index}
          >

            <img
              src={icon.image}
              alt={icon.name}
            />

          </a>

        ))
      }


    </div>







    {/* FOOTER LINKS */}

    <div className="footer-links">


      {
        footerColumns.map((column,index)=>(


          <div
            className="footer-column"
            key={index}
          >


            {
              column.map((item,itemIndex)=>(

                <a
                  href="#"
                  key={itemIndex}
                >


                  <span>
                    {item}
                  </span>



                  <span>

                    <img
                      src="/assets/header/Group 804.png"
                      alt=""
                    />

                  </span>


                </a>

              ))
            }


          </div>


        ))
      }


    </div>



  </div>



</footer>
</Reveal>

)

}


export default Footer;