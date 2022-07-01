import React, { useState } from 'react';
import { servicedata } from './data/servicedata';

const Services = () => {
    const [services, setServices] = useState(servicedata);
    // console.log(services)

    return (
        <div className='services-grid '>
            {
                services.map((service) => {
                    const {picture, name, price} = service;
                    return <article className='p-4'>
                        <div className="card p-4" style={{ width: "22rem", height: "35rem" }}>
                            <img src={picture} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h2>{name}</h2>
                                <h3>Price: ${price}</h3>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className='border-0 px-4 py-1 text-light bg-color rounded'>See Datails</button>
                            </div>
                        </div>
                    </article>
                })
            }
        </div>
    );
};

export default Services;