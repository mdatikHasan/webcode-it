import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { servicedata2 } from './data/servicedata2'
const Service = () => {
    const navigate = useNavigate()
    const { name } = useParams();
    const [serviceDetails, setServiceDetails] = useState("");
    const { picture, category, details, duration, instructor, price } = serviceDetails;

    useEffect(() => {
        const service = servicedata2.filter((data) => data.name === name);
        setServiceDetails(service[0])
    }, [])
    return (
        <div className=' bg-dark text-white py-1'>
            <marquee><h5>{name} || Price: ${price} || {category} || Duration: {duration} hours || Instructor: {instructor}</h5></marquee>
            <div className=" p-5 card text-dark  service-datails">
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">{name}</h1>
                            <h4>Price: ${price}</h4>
                            <h4>{category}</h4>
                            <h4>Duration: {duration} hours</h4>
                            <h4>Instructor: {instructor}</h4>
                            <p className="card-text">{details}</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={picture} className="img-fluid rounded-start" alt="..." />
                        <h1 className="card-title">{name}</h1>
                    </div>
                </div>
                <div>
                    <button className=' border-0 px-4 py-1 rounded btn-primary me-3' onClick={()=>{navigate('/')}}>Go Home</button>
                    <button className='border-0 px-4 py-1 rounded btn-primary me-3' onClick={()=>{navigate('/services')}}>Go Services</button>
                    <button className='border-0 px-4 py-1 rounded btn-primary' onClick={()=>{navigate('/developers')}}>Go Developers</button>
                </div>
            </div>
        </div>
    );
};

export default Service;