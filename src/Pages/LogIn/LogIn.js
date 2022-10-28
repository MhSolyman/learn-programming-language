import React from 'react';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { useState } from 'react';

const LogIn = () => {
    const navigate = useNavigate()

    const [error, setError] = useState('')



    const { signIn, providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();




    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(password, email);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                form.reset();
                navigate(from, { replace: true });
            }).catch(error => {

                setError(error.message)

            })


    }






    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

            })
            .catch(error => console.error(error))
    }

    const handleGitHubSignIn = () => {
        providerLogin(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

            })
            .catch(error => console.error(error))
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="exampleInputPassword1" required />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Log In</button>
                <p className='text-danger'>{error}</p>
            </form>





            <div>
                <button type="button" className="btn btn-primary mt-3" onClick={handleGoogleSignIn}>
                    <i className="fa-brands fa-google"></i> Log In with Google
                </button>
            </div>
            <button type="button" className="btn btn-primary mt-3" onClick={handleGitHubSignIn}>
                <i className="fa-brands fa-github"></i>  Log In with  GitHub
            </button>

            <div className='d-flex'>
                <p className='mx-2'>If you don't have an account, open one account </p><Link to={'/signUp'} className="nav-link active text-primary" >Register</Link>
            </div>


        </div>
    );
};

export default LogIn;