import React from 'react';

const LogIn = () => {
    const handleSubmitO=(event)=>{
        event.preventDefault();
        const form =event.target;
       
        const email = form.email.value;
        const password = form.password.value;
        console.log(password,email)
        
        
        }
    return (
        <div className='container'>
  <form onSubmit={handleSubmitO}>
                
                <div className="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    <div id="emailHelp"  className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="exampleInputPassword1" required />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    );
};

export default LogIn;