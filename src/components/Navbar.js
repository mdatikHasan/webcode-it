import React from 'react';
import { NavLink } from 'react-router-dom';
import {useNavigate } from 'react-router-dom';
import logo from './img/logo.png'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='nav-bar d-flex justify-content-between'>
                <div>
                    <a href="" className='ms-md-5 ps-5' onClick={()=>{navigate('/')}}><img src={logo} className='img-fluid ' style={{width: "100px"}} alt="LOGO" /></a>
                </div>
                <div className='me-md-5 pe-5'>
                    <NavLink to='/' className='navlink ms-4'>Home</NavLink>
                    <NavLink to='/about' className='navlink ms-4'>About</NavLink>
                    <NavLink to='/services' className='navlink ms-4'>Services</NavLink>
                    <NavLink to='/developers' className='navlink ms-4'>Developers</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;