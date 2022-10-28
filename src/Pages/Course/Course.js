import React from 'react';
import { useRef } from 'react';

import { useLoaderData ,Link } from 'react-router-dom';
import ReactToPrint from 'react-to-print';


const Course = () => {
    const data = useLoaderData();
    console.log(data)
    const ref =useRef();

    return (
        
        <div>
            <ReactToPrint trigger={()=> <button>Print</button>}content={()=>ref.current}></ReactToPrint>
            
            <div ref={ref} className="card" style={{ width: "18rem" }} >
                <img src={data.img} class="card-img-top" style={{ height: "12rem" }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> <h3><b>Course Name: {data.name}</b> </h3> </h5>
                    <p className="card-text">{data.details}</p>
                    <p> <b>Time: {data.time}h</b> <span className='gx-5'><b>Prize:{data.tk} Tk</b></span> </p>
                    <Link className='btn btn-primary' to={`/checkout/${data.id}`}>Get premium access</Link>         
                </div>
                
                 
            </div>


      
        </div>
    );
};

export default Course;