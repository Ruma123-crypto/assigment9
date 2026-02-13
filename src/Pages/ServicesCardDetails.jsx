import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router';
import Navbar from '../Components/Navbar';
import ServiceCardDetailsStyle from '../Components/ServiceCardDetailsStyle';


const ServicesCardDetails = () => {
    const {id}=useParams();
    const data=useLoaderData();
    const [singleData, setSingleData] = useState(null);
    

    useEffect( ()=>
    {
      
        const singleDatas=data.find ((data)=>data.serviceId==id)
         setSingleData(singleDatas)
    },
   
    [id,data]
    )
       if (!singleData) {
    return <p>Loading...</p>;
  }
 
    return (
        
            <div>
                <Navbar></Navbar>
                {
                    <ServiceCardDetailsStyle singleData={singleData}></ServiceCardDetailsStyle>
                }
            </div>
    );
};

export default ServicesCardDetails;