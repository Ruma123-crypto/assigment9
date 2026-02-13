import React from 'react';

import { AuthContext } from '../Provider/AuthContext';
import { NavLink,Navigate } from 'react-router';


const HomeCard = ({pertCard}) => {

//  console.log(user)
    return (
       <div className="hero bg-base-200 p-2 w-11/12 mx-auto my-6 ">
  <div className=" ">
    <div className="max-w-md">
        <img  className='w-11/12 h-[200px] bg-cover' src={pertCard.image} alt="" />
      <h1 className="text-2xl font-bold">{pertCard.serviceName}</h1>
        <h2>{pertCard.rating}</h2>
        <h2>{pertCard.price}</h2>
        
          <NavLink className="btn btn-primary" to={`/services/${pertCard.serviceId}`}>View Details</NavLink>
      

    </div>
  </div>
</div>
    );
};

export default HomeCard;