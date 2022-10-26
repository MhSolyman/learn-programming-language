import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const data = useLoaderData()

    return (
        <div>




            <div className="card" style={{ width: "18rem" }} >
                <img src={data.img} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Course Name: {data.name}</h5>
                    <p className="card-text">{data.details}</p>
                    <p>Time: {data.time}h</p>
                </div>
            </div>
        </div>
    );
};

export default Course;