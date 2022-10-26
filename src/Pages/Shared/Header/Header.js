import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <p className="navbar-brand">Navbar</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/courses'} className="nav-link active" aria-current="page" >Courses</Link>
                            </li>


                            <li className="nav-item">
                                <p className="nav-link active">FAQ</p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link active">Blog</p>
                            </li>
                        </ul>

                        <p className="nav-item ">
                            {
                                user?.uid ? <>
                                    <span>{user?.displayName
                                    }</span>
                                    < img style={{ height: '40px' }} src={user?.photoURL} alt="" /> <button type="button" className="btn btn-primary" onClick={handleLogout}>Log Out</button></> : <> <div className='d-flex'><Link to={'/signUp'} className="nav-link active">Sign Up</Link><span> </span> <Link to={'/Login'} className="nav-link active">Log in</Link> </div>
                                </>
                            }


                        </p>






                        <div>

                        </div>






                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;