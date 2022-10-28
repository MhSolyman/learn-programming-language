import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { providerLogin, createUser, updateUserProfile } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const [error,setError]= useState('')




    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => console.error(error))
    }

    const handleGitHubSignIn = () => {
        providerLogin(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => console.error(error))
    }







    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, password, email)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')

                form.reset();
                handleUpdateUserProfile(name, photoURL);

            }).catch(error => setError(error.message))

    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.log(error))

    }





    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Full Name</label>
                    <input type="text" name='name' className="form-control" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" class="form-label">PhotoURL</label>
                    <input type="text" name='photoURL' className="form-control" aria-describedby="emailHelp" />

                </div>
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
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <p className='text-danger'>{error}</p>





            <div>
                <button type="button" className="btn btn-primary mt-5" onClick={handleGoogleSignIn}>
                <i className="fa-brands fa-google"></i> Register with Google
                </button>
            </div>
            <button type="button" className="btn btn-primary mt-5" onClick={handleGitHubSignIn}>
            <i className="fa-brands fa-github"></i>  Register with GiHub 
            </button>
            



            
        </div>
        
    );
};

export default SignUp;