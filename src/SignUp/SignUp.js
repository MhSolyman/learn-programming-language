import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const {providerLogin}=useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn=()=>{
providerLogin(googleProvider)
.then(result=>{
    const user =result.user;
    console.log(user);
})
.catch(error=>console.error(error))
    }
    return (
        <div>
           <button type="button" className="btn btn-primary" onClick={handleGoogleSignIn}>
            sigen Up with google
           </button>
        </div>
    );
};

export default SignUp;