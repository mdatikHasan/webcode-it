import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { servicedata2 } from './data/servicedata2'

const HomeServiceData = () => {
    const [services, setServices] = useState(servicedata2);
    // console.log(services)


    return (
        <div>
            <h1 className='mb-5 bg-dark text-light p-2'><b>Service <hr /> </b></h1>
            <div className='container  d-flex justify-content-center'>
                <div className='service-grid '>
                    {
                        services.map((service) => {
                            const { name, price, picture } = service
                            return <article className='m-4' key={name}>
                                <div>
                                    <div className="card" style={{ width: "30rem", textAlign: 'center' }}>
                                        <div>
                                            <img src={picture} className="card-img-top" style={{ width: '18rem', height: '12rem', marginTop: '15px' }} alt="..." />
                                        </div>
                                        <div className="card-body">
                                            <h3 className="card-text">{name}</h3>
                                            <h4 className="card-text mb-4">Price: ${price}</h4>
                                            <Link className='seeDatails px-3 py-2  rounded' to={`/services/${name}`}>See Datails</Link>
                                        </div>
                                    </div>
                                </div>

                            </article>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeServiceData;