import React from 'react';
import { Outlet } from 'react-router-dom';
import Course from '../Pages/Course/Course';
import Home from '../Pages/Home/Home';
import Header from '../Pages/Shared/Header/Header';
import Right from '../Pages/Shared/Right/Right';



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

                    <div className="col-sm-4">
                        <Right>

                        </Right>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Main;