import React from 'react'
import '../styles/navbar.sass'
import logo from '../images/logo.png'
import search from '../images/icon-search.gif'
import cart from '../images/icon-cart.gif'
import user from '../images/icon-user.gif'

export default function Navbar() {
  return (
	<div className="div-overall-nav">
		
	<img src={logo} className="logo-img"></img>



	<div className="div-nav-menu">
		<p className="nav-menu-button">Clothing</p>
		<p className="nav-menu-button">Grocery</p>
		<p className="nav-menu-button">Tech</p>
	</div>

	<div className="div-nav-icon">
		
		<img src={search} className="nav-icon" alt="icon-search"></img>
		<img src={cart} className="nav-icon" alt="icon-cart"></img>
		<img src={user} className="nav-icon" alt="icon-user"></img>
	</div>

	</div>
  )
}
