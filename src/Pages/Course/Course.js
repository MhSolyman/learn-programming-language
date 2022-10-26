import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const data = useLoaderData()

    return (
        <div>




            <div className="card" style={{ width: "18rem" }} >
                <img src={data.img} class="card-img-top" style={{ height: "12rem" }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> <h3><b>Course Name: {data.name}</b> </h3> </h5>
                    <p className="card-text">{data.details}</p>
                    <p> <b>Time: {data.time}h</b> <span className='gx-5'><b>Prize:{data.tk} Tk</b></span> </p>
                </div>
            </div>
        </div>
    );
};

export default Course;