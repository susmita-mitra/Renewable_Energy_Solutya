import { useState } from "react";


function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);


  return (

    <header className="navbar">

      <div className="logo-box">

        <div className="logo-icon">

          <img 
            src="/assets/header/Ellipse 3.png"
            className="leaf1"
          />

          <img 
            src="/assets/header/Group 11 (1).png"
            className="leaf2"
          />

        </div>


        <span className="logo-text">
          RETHVELLE
        </span>


      </div>



<nav className="nav-menu">
        <a href="#" className="nav-active">
          ABOUT US
        </a>

        <a href="#" className="nav-muted">
          APPS
        </a>

        <a href="#" className="nav-muted">
          SOLUTIONS
        </a>

        <a href="#" className="nav-muted">
          FAQ
        </a>

      </nav>



      <div className="nav-actions">

        <button className="bell-btn">

          <img 
            src="/assets/header/Vector.png"
          />

        </button>


<button 
className="menu-btn"
onClick={() => setMenuOpen(!menuOpen)}
>

<img 
src="/assets/header/Group 9.png"
/>

</button>


      </div>


{
  menuOpen && (

    <div className="mobile-menu active">

      <a href="#">
        ABOUT US
      </a>

      <a href="#">
        APPS
      </a>

      <a href="#">
        SOLUTIONS
      </a>

      <a href="#">
        FAQ
      </a>


    </div>

  )
}


    </header>

  )
}


export default Navbar;