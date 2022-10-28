import  React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const ChakOut = () => {
    const data = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(data)

    return (
        <div ><div>
<h3>
               Corse name: {data.name}
                
            </h3>
            <p>Total Prize: {data.tk}</p>
            <p><b>Student name:</b> {user?.displayName} </p>
            <p><b>User id:</b> {user?.uid}</p>
        </div>
            
          
            
        </div>
    );
};

export default ChakOut;