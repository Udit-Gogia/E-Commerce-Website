import React from 'react'
import '../styles/navbar.sass'
import logo from '../images/logo.png'
// import search from '../images/icon-search.png'
import cart from '../images/icon-cart.png'
import user from '../images/icon-user.png'
import clothing from "../images/icon-fashion.png"
import grocery from "../images/icon-grocery.png"
import mobile from "../images/icon-electronics.png"
// import Auth from "../pages/auth"
// import {BrowserRouter as Router, Link}  from 'react-router-dom';


export default function Navbar() {
  return (
	<div className="div-overall-nav">
		
	<img src={logo} className="logo-img" alt="icon-dev" width="30"></img>
	


	<div className="div-nav-menu">
		<div className="div-nav-button">
		<img src={clothing} alt="icon-clothing" width="30"></img>
		<p className="nav-menu-button">Clothing</p>
		</div>
		<div className="div-nav-button">
		<img src={grocery} alt="icon-clothing" width="30"></img>
		<p className="nav-menu-button">Grocery</p>
		</div>
		<div className="div-nav-button">
		<img src={mobile} alt="icon-clothing" width="30"></img>
		<p className="nav-menu-button">Mobile</p>
		</div>
		
	</div>

	<div className="div-nav-icon">
		
		{/* <img src={search} className="nav-icon" alt="icon-search"></img> */}
		<img src={cart} className="nav-icon" alt="icon-cart"></img>
        <img src={user} className="nav-icon" alt="icon-user"></img>
		{/* <Router>

		<Link to="../pages/auth">
     		<button type="button">
          		<img src={user} className="nav-icon" alt="icon-user"></img>
     		</button>
 		</Link>
		</Router> */}

	</div>

	</div>
  )
}
