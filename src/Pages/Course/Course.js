import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const data= useLoaderData()
    console.log(data)
    return (
        <div>
            <h1>course{data.length}</h1>
            <img src={data.img} alt="" />
        </div>
    );
};

export default Course;