import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav>
    
    <div>
      <Link to="/">
        TreatyoSelf
      </Link>
    </div>

    <div>
          <Link to="/" >
          signup
          </Link>
    </div>
      
          <div>
          <Link to="/home" >
            home
          </Link>
          </div>
         
         <div>
          <Link to="/subscriptions" >
            subscriptions
          </Link>
        </div>
      
  </nav>
);

export default Navbar;