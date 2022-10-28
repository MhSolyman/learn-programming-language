import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Right = () => {
    const [data,setData]=useState([]);
useEffect(()=>{
    fetch('https://learn-programming-language-server.vercel.app/data')
    .then(res=>res.json())
    .then(course=>setData(course));
},[])
    return (
        <div className='' >
            {
                data.map(dataAll=><h4 className='border border-primary rounded ' key={dataAll.id}>
                    
                <Link  to={`/course/${dataAll.id}`} className='text-decoration-none text-dark ' >{dataAll.name}</Link></h4>)
            }
            
        </div>
    );
};

export default Right;