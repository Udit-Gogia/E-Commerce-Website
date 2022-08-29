import React from 'react'
import "../styles/auth.sass"
import lottie from '../images/lottie-auth.gif'

export default function auth() {
	return(
		<div className="div-overall-auth">
			
			<div>
				<img src={lottie} alt="lottie-auth"></img>
			</div>

			<div classname="div-auth-form">
				<h1 classname="greet">Welcome back</h1>

				<div>
				<form action="/login" method="POST">
            		<div class="form-group">
              			<label for="email">Email</label>
              			<input type="email" class="form-control" name="username" />
            		</div>
            		
					<div class="form-group">
              			<label for="password">Password</label>
              			<input type="password" class="form-control" name="password" />
            		</div>
            		
					<button type="submit" class="btn btn-dark">Login</button>
          		</form>
				</div>


			</div>

			

		</div>
	)
}
