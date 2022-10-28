import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const Header = () => {
    const [show, setShow] = useState(true);
    const change = () => {
        setShow(!show);
    }
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
                    <p className="navbar-brand "> <FontAwesomeIcon icon={faCoffee} /><b>Learn programming language</b></p>



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
                                <p className="nav-link active"> <Link to={'/blog'}>Blog</Link> </p>
                            </li>
                        </ul>

                        <p className="nav-item d-flex ">
                            {
                                 user?.uid ? <>{user.photoURL?
                                    < img style={{ height: '40px',marginRight:'10px' }} src={user?.photoURL} alt="" data-bs-toggle='tooltip ' title={user?.displayName} />
                                    :<i class="fa-regular fa-user" style={{ height: '40px',marginRight:'10px' }}  data-bs-toggle='tooltip ' title={user?.displayName}></i>}
                                    <button type="button" className="btn btn-primary" onClick={handleLogout}>Log Out</button></> 
                                    :
                                     <> <div className='d-flex'> <button type="button" className="btn btn-primary" style={{marginRight:'10px'}}><Link to={'/signUp'} className="nav-link active" >Register</Link></button>
                                    <span> </span> <button type="button" style={{marginRight:'10px'}} className="btn btn-primary"><Link to={'/Login'} className="nav-link active">Log in</Link></button>  </div>
                                    
                                </>
                            }


                            <button onClick={change}>{show ?<i class="fa-regular fa-moon"></i>: <i class="fa-solid fa-moon"></i>}</button>


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