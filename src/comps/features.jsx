import React from 'react'
import '../styles/features/features.css'
import ImgDelivery from '../assets/images/icon-delivery.png'
import ImgCustomerService from '../assets/images/icon-customer-service.png'
import ImgReturn from '../assets/images/icon-return.png'

export default function Features() {
  return (
	<div className="div-overall-features">
		<hr size={1}/>
		<div className="div-features">
			<div className="div-child-features">
				<p className='text-div-features head-medium'> What we Promise to bring ....</p>
			</div>
			<div className="div-child-features">
				<img src={ImgDelivery} alt="icon-delivery" className="icon-features delivery" />
				<p className='text-div-features head-medium'> Free and Fast<br />Delivery Nationwide</p>
			</div>
			<div className="div-child-features">
				<img src={ImgCustomerService} alt="icon-customer-service" className="icon-features customer-service" />
				<p className='text-div-features head-medium'> 24/7<br />Customer Service</p>
			</div>
			<div className="div-child-features">
					<img src={ImgReturn} alt="icon-delivereturnry" className="icon-features return" />
				<p className='text-div-features head-medium'> Easy Returns<br />4 Days Moneyback Guaranteed</p>
			</div>
					
		</div>
		<hr />
	</div>
  )
}

