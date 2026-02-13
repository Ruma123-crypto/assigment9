import React from 'react';

import { NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';

const ServiceCard = ({serviceCard}) => {

  const {serviceId}=serviceCard
  
    return (
            <div className="hero bg-base-200 p-2 w-11/12 mx-auto ">
  <div className=" ">
    <div className="max-w-md">
        <img  className='w-11/12 h-[200px] bg-cover' src={serviceCard.image} alt="" />
      <h1 className="text-2xl font-bold">{serviceCard.serviceName}</h1>
        <h2>{serviceCard.rating}</h2>
        <h2>{serviceCard.price}</h2>
       <NavLink className="btn btn-primary" to={`/services/${serviceId}`}>View Details</NavLink>
        
     
    </div>
  </div>
</div>
    );
};

export default ServiceCard;