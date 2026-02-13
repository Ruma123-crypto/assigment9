import React from 'react';
import { useLoaderData } from 'react-router';
import ServiceCard from './ServiceCard';

const Services = () => {
    const data=useLoaderData();
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6'>
            {
                data.map((serviceCard)=>
                <ServiceCard serviceCard={serviceCard}></ServiceCard>
                )
            }
        </div>
    );
};

export default Services;