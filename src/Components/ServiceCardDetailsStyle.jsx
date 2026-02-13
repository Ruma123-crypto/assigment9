import React from 'react';
import { NavLink } from 'react-router';
import ServiceForm from './ServiceForm';

const ServiceCardDetailsStyle = ({singleData}) => {
    return (
     <div className="hero h-full flex   bg-base-200 p-2 w-11/12 mx-auto ">
                 
    <div className=" bg-base-300 w-8/12 mx-auto p-5 rounded-3xl">
        <img  className='w-8/12 h-96 bg-cover mx-auto' src={singleData.image} alt="" />
        <div className='py-4'>
         <h1 className="text-2xl font-bold">{singleData.serviceName}</h1>
        <p>{singleData.description}</p>
        <h2>{singleData.rating}</h2>
        <h2>{singleData.price}</h2>
        <NavLink to={'/'} className='btn btn-secondary mt-3'>Back To Home</NavLink>
        </div>

        
    </div>
  
  <div>
    <ServiceForm></ServiceForm>
  </div>
</div>
    );
};

export default ServiceCardDetailsStyle;