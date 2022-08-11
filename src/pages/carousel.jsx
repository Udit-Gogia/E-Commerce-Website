import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../comps/Navbar"
import '../styles/carousel.sass'
import tech from "../videos/Tech.mp4"
import Groceries from "../videos/Groceries.mp4"
import Clothing from "../videos/Clothing.mp4"
export default function carousel() {

  const settings = {
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
    autoplayspeed: 500
  };
	
  return (
	<>
	<Navbar />
	<div className="div-carousel">
        
        <Slider {...settings}>

          <div className="one car">
            
          <video autoPlay muted loop className='video-tech' >
            <source src={tech} type="video/mp4" />
          </video>

          <div className="text-box">
            <h1 className="tech-title">TECH</h1>
          </div>

          </div>
          <div className="two car">
          <video autoPlay muted loop className='video-tech' >
            <source src={Groceries} type="video/mp4" />
          </video>

          <div className="text-box">
            <h1 className="grocery-title">GROCERY</h1>
          </div>
          </div>
          <div className="three car">
          <video autoPlay muted loop className='video-tech' >
            <source src={Clothing} type="video/mp4" />
          </video>

          <div className="text-box">
            <h1 className="clothing-title">CLOTHING</h1>
          </div>
          </div>
          
          
        </Slider>
	</div>

	</>
  )
}
