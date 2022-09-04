import React from 'react'
import '../styles/navbar/navbar.css'
import logo from '../assets/images/logo.png'
// import search from '../images/icon-search.png'
import cart from '../assets/images/icon-cart.png'
import user from '../assets/images/icon-user.png'
import clothing from "../assets/images/icon-fashion.png"
import grocery from "../assets/images/icon-grocery.png"
import mobile from "../assets/images/icon-electronics.png"
// import Auth from "../pages/auth"
// import {BrowserRouter as Router, Link}  from 'react-router-dom';


export default function Navbar() {
  return (
	<div className="div-overall-nav">
		
	<img src={logo} className="logo-img" alt="icon-dev" width="30"></img>
	


	<div className="div-nav-menu">
		<div className="div-nav-button">
		<img src={clothing} alt="icon-clothing" width="25"></img>
		<p className="nav-menu-button">Fashion</p>
		</div>
		<div className="div-nav-button">
		<img src={grocery} alt="icon-clothing" width="25"></img>
		<p className="nav-menu-button">Grocery</p>
		</div>
		<div className="div-nav-button">
		<img src={mobile} alt="icon-clothing" width="25"></img>
		<p className="nav-menu-button">Tech</p>
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
