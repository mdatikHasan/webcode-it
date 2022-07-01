import React from 'react';
import HomeServiceData from './HomeServiceData';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <section className='banner'>
                <div className="card mb-3">
                    <div className="row g-0 p-4">
                        <div className="col-md-6">
                            <img src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-6 mt-5">
                            <div className="card-body">
                                <h1 className="card-title">One Time <span>Learning</span> & Lifetime <span>Earning</span> !</h1>
                                <p className="card-text mt-5">Webcoder-IT One Of The Best Freelancing Institute In Bangladesh, We Provide Quality Education According to International Syllabus</p>
                                <button onClick={()=>{navigate('/about')}} className='know-us border-0 px-4 py-2 mt-5 rounded fs-5'>Know us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <HomeServiceData></HomeServiceData>
            </section>
        </div>
    );
};

export default Home;