import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate()
    return (
        <div className='about'>
            <div className='about-top p-5'>
                <h1>ABOUT US</h1>
                <p className='mt-5'>We try our best so that every learners can reach their destination. They will work hard and we will go with their motivation so that a level is created between then. For that you always have to have a positive attitude. Trying takes people a long way.</p>
                <p className='mt-5'>Webcoder-IT One Of The Best Freelancing Institute In Bangladesh, We Provide Quality Education According to International Syllabus</p>
                <button onClick={()=>{navigate('/')}} className='px-4 py-1 rounded mt-5'>Go Home</button>
            </div>
            <div className='about-botton p-5'>
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">The Best Way to Learn  <b>Programming Languages</b></h1>
                            <p className="card-text mt-5">We try our best so that every learners can reach their destination. They will work hard and we will go with their motivation so that a level is created between then. For that you always have to have a positive attitude. Trying takes people a long way.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src='https://static.wixstatic.com/media/ea6ac8_247ebd0a86cb4cb5a447048039dc0b3a~mv2.png/v1/fill/w_1000,h_571,al_c,usm_0.66_1.00_0.01/ea6ac8_247ebd0a86cb4cb5a447048039dc0b3a~mv2.png' className="img-fluid rounded-start" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;