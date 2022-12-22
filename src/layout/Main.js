import React from 'react';
import { Outlet } from 'react-router-dom';
import Course from '../Pages/Course/Course';
import Home from '../Pages/Home/Home';
import Header from '../Pages/Shared/Header/Header';
import Right from '../Pages/Shared/Right/Right';
import './mar.css'


const Main = () => {
    return (
        <div>
            <Header></Header>

            <div className="container text-center">
                <div className="row">
                    <div className="col-sm-8">
                        <Outlet>
                            <Home></Home>
                            <Course></Course>

                        </Outlet>
                       

                    </div>

                    <div className="col-sm-4  ">
                        <Right>

                        </Right>
                    </div>
                </div>


            </div>
            <div className='ma'><div className='bg'>Phone: 01324129983 <br />
            <div> Email: solymanbijoy@gmail.com</div>
            <div>Facebook: https://www.facebook.com/Mhsolyman1/</div>
            </div></div>
        </div>
    );
};

export default Main;