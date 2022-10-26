import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Courses.css'

const Courses = () => {
    const data = useLoaderData()
    console.log(data)

    return (
        <div>
            <div className='flx'>
                {data.map(p =>
                    <div className="card  " style={{ width: "18rem" }} >
                        <img src={p.img} className="card-img-top img-fluid" alt="..." style={{ height: "12rem" }} />
                        <div className="card-body">
                            <h5 className="card-title"><b>{p.name}</b></h5>
                            <p className="card-text">{p.details}</p>
                            <Link to={`/course/${p.id}`} className="btn btn-primary">See details</Link>
                        </div>
                    </div>

                )}

            </div>





        </div>
    );
};

export default Courses;