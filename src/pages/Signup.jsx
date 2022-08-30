import React , { useRef } from 'react'
import "../styles/auth/auth.sass"
import lottie from '../assets/images/lottie-auth.gif'
import {Card ,Button, Form , Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Signup() {

	const emailRef = useRef()
	const passwordRef = useRef()
	return(
		<div className="div-overall-auth">
			
			<div>
				<img src={lottie} alt="lottie-auth"></img>
			</div>

			
			<Container className="d-flex align-items-center " style={{minHeight: "100vh"}}>
				<Card>
				
				<Card.Body>
					<h2 className="">Sign Up</h2>
					<Form>
						<Form.Group id="email">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" ref={emailRef }required/>
						</Form.Group>

						<Form.Group id="password">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" ref={passwordRef }required/>
						</Form.Group>

						<Button type="submit" className="w-100 button-form">Sign Up</Button>
					</Form>
					<div ClassName="w-100 text-center login-text-div">
						Already Have an account? Login	
					</div>
				</Card.Body>
				</Card>

			</Container>

			
  


			

		</div>
	)
}
