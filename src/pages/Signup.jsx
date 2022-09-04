import React , { useRef , useState } from 'react'
import "../styles/auth/auth.sass"
import lottie from '../assets/images/lottie-auth.gif'
import {Card ,Button, Form , Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useAuth } from "../script/context/authContext"
import { AuthProvider } from "../script/context/authContext"


export default function Signup() {
	
	const emailRef = useRef()
	const passwordRef = useRef()
	const {signup} = useAuth()
	const [loading, setLoading] = useState(false)

	function handleSubmit(e) {
		//Preventing the page from refreshing
		e.preventDefault()

		try{
			setLoading(true)
			signup(emailRef.current.value,passwordRef.current.value)
		} catch{
			alert('Wrong Credentials')
		}
		setLoading(false)
	
	}
	return(
		<AuthProvider>

		<div className="div-overall-auth">
			
			<div className="div-auth-lottie">
				<img src={lottie} alt="lottie-auth" className="auth-lottie"></img>
			</div>
			
			<div className="div-auth-form">
			<Container className="d-flex align-items-center " style={{minHeight: "100vh"}}>
				<Card>
				
				<Card.Body className="form-body">
					<h2 className="text-center">Sign Up</h2>
					<Form onSubmit= {handleSubmit}>
						<Form.Group id="email" className="form-comp-email">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" ref={emailRef }required/>
						</Form.Group>

						<Form.Group id="password" className="form-comp-pwd">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" ref={passwordRef }required/>
						</Form.Group>

						<Button type="submit" className="form-comp-submit w-100 button-form"
						disable={loading}
						>Sign Up</Button>
					</Form>
					<div ClassName="w-100 text-center login-text-div">
						Already Have an account? Login	
					</div>
				</Card.Body>
				</Card>

			</Container>
			
			</div>

		</div>
		</AuthProvider>
	)
}
