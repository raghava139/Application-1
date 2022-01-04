import React from 'react'

function Login() {
    return (
      
                <div className='container'>
					<form action="/examples/actions/confirmation.php0" method="post" className='w-25 container mt-4'>
						<p className="hint-text"><h1>Login Form</h1></p>
						<div className="form-group">
							<input type="text" class="form-control" placeholder="Username" required="required"/>
						</div>
						<div className="form-group">
							<input type="password" class="form-control" placeholder="Password" required="required"/>
						</div>
						<div class="form-group">
							<label className="form-check-label"><input type="checkbox" required="required"/> I accept the <a href="#">Terms &amp; Conditions</a></label>
						</div>
						<input type="submit" className="btn btn-primary btn-block" value="Sign up"/>
					</form>
	            </div>
    
    
    )
}

export default Login







