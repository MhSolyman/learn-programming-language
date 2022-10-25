import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Right = () => {
    const [data,setData]=useState([]);
useEffect(()=>{
    fetch('http://localhost:5000/data')
    .then(res=>res.json())
    .then(course=>setData(course));
},[])
    return (
        <div >
            {
                data.map(dataAll=><h4><Link to={`/course/${dataAll.id}`} key={dataAll.id}>{dataAll.name}</Link></h4>)
            }
            
        </div>
    );
};

export default Right;