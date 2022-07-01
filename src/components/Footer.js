import React from 'react';

const Footer = () => {
    return (
        <div className='footer p-5 text-white'>
            <footer>
                <div className=' d-flex justify-content-between container'>
                    <div className='footer1'>
                        <h2>Webcoder<span>IT</span></h2>
                        <h2>100% satisfied students</h2>
                        <p>The staff here is really supportive, <br /> teachers are great, the school has a good structure. Thank you!</p>
                    </div>
                    <div>
                        <h2>Our dedicated courses</h2>
                        <p><a href="#">Web Design $1000</a></p>
                        <p><a href="#">Web Development $2200</a></p>
                        <p><a href="#">Web Design & Development $3700</a></p>
                        <p><a href="#">Cyber Sequirity $2780</a></p>
                    </div>
                    <div className='icon'>
                        <h2>Connect with us</h2>
                        <p>Phone: +8801725-1467469</p>
                        <a href=""><i className="fa-brands fa-facebook fs-1"></i></a>
                        <a href=""><i className="fa-brands fa-youtube fs-1 ms-4 "></i></a>
                        <a href=""><i className="fa-brands fa-twitter fs-1 ms-4 "></i></a>
                        <a href=""><i className="fa-solid fa-envelope fs-1 ms-4 "></i></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;