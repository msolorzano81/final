import React, { Component } from 'react';
import Logo from '../images/tys_logo.png' ;

const NavSignIn = () => (

    <nav className="navbar is-black is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item" href="#">
                <img src={Logo} />
            </a>
                <a className="navbar-item">
                    My Favorites
                </a>
                <a className="navbar-item">
                    Sign Out
                </a> 
        </div>
    </nav>

  );
  
  export default NavSignIn;