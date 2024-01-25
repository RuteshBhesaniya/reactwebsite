import React from 'react';
import ServiceCard from './ServiceCard';
import Data from './Data';

const Service = () => {
    return (
        <div className='container' style={{width:"100vw", height:"100vh"}}>
            <div className="row d-flex gap-5">
                    {Data.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
            </div>
        </div>
    );
};

export default Service;
