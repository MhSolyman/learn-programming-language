import React from 'react';

const Header = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <p className="navbar-brand">Navbar</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <p className="nav-link active" aria-current="page" >Courses</p>
                            </li>


                            <li className="nav-item">
                                <p className="nav-link active">FAQ</p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link active">Blog</p>
                            </li>
                        </ul>
                        <p className="nav-item">
                                <p className="nav-link active">Blog</p>
                            </p>
                   
     

                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;