import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Right from '../Pages/Shared/Right/Right';



const Main = () => {
    return (
        <div>
            <Header></Header>

            <div class="container text-center">
                <div class="row">
                    <div class="col-sm-8">
                        <Outlet>

                        </Outlet>

                    </div>

                    <div class="col-sm-4">
                        <Right>

                        </Right>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Main;