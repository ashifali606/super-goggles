import React from 'react'
import { BiSolidDonateBlood } from 'react-icons/bi';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

function Navbar() {
  const[isMenuOpen,SetMenuOpen]=useState(false)
  return (
   <nav className='navbar navbar-expand-lg navbar-dark  sticky-top custom-navbar'>

    <div className='container-fluid'>
           
          <Link className='navbar-brand d-flex align-items-center' to='/'>
           <BiSolidDonateBlood className="text-danger fs-2 me-1 " />
             <span className='fw-bold text-danger'>Blood</span>
             <span className='fw-bold text-white'>Link</span>
          </Link>

          <button className='navbar-toggler' onClick={()=>SetMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FiX className="text-white fs-2" /> : <FiMenu className="text-white fs-2" />}
          </button>

          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show':'hide'}`}>
            <ul className='navbar-nav gap-3 align-items-center mb-2 mb-lg-0  ms-auto'>
            <li className='nav-item'><NavLink to='/' className='nav-link' onClick={()=>SetMenuOpen(false)}>Home</NavLink></li>
            <li className='nav-item'><NavLink to='/find-blood' className='nav-link' onClick={()=>SetMenuOpen(false)}>Find Blood</NavLink></li>
            <li className='nav-item'><NavLink to='/become-donor' className='nav-link'onClick={()=>SetMenuOpen(false)}>Become Donor</NavLink></li>
            <li className='nav-item'><NavLink to='/blood-request' className='nav-link' onClick={()=>SetMenuOpen(false)}>Blood Request</NavLink></li>
            <li className='nav-item'><NavLink to='/contact' className='nav-link' onClick={()=>SetMenuOpen(false)}>Contact</NavLink></li>
            <li className='nav-item'><Link to='/login' className=' btn btn-danger px-4 fw-bold login-btn-custom' onClick={()=>SetMenuOpen(false)}>Login</Link></li>
          </ul>
          </div>

    </div>

   </nav>
  )
}

export default Navbar