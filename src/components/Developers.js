import React, { useState } from 'react';
import {fakedata} from './data/fakedata'

const Developers = () => {
    const [developers, setDevelopers] = useState(fakedata);
    console.log(developers)
    return (
        <div className='services-grid '>
            {
                developers.map((service) => {
                    const {picture, name, sallary} = service;
                    return <article className='p-4'>
                        <div className="card p-4" style={{ width: "22rem", height: "35rem" }}>
                            <img src={picture} className="card-img-top" style={{ width: "19rem", height: "17rem" }} alt="..." />
                            <div className="card-body">
                                <h2>{name}</h2>
                                <h3>Sallary: ${sallary}</h3>
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

export default Developers;