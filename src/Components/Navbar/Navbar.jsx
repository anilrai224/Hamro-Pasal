import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { BiSolidLeftTopArrowCircle } from "react-icons/bi";
import './Navbar.scss'
import Sidebar from '../sidebar/SideBar'
import { IoSettings } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

const Navbar = () => {
  const gotoTop =() =>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  }
  const showDropdown=()=>{
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active');
  }
  return (
    <header className='header'>
        <div className="container">
          <Sidebar className='sidebar'/>
            <nav>
                <NavLink to ='/' className='link'>Home</NavLink>
                <NavLink to ='/men' className='link'>Men</NavLink>
                <NavLink to ='/women' className='link'>Women</NavLink>
                <NavLink to ='/kid' className='link'>Kids</NavLink>
            </nav>
            <div className="logoContainer">
              LOGO
            </div>
            <div className="actions">
              <div className="account" onClick={showDropdown}>
                <p>Account</p>
                <div className="dropdown">
                  <NavLink to='/login' className='login'>
                    <IoSettings className='icon' />
                    Login
                  </NavLink>
                  <NavLink to='/register' className='register'>
                    <MdLogout className='icon' />
                    Register
                  </NavLink>
                </div>
              </div>
              <div className="cart">
                <FaCartShopping />
                <span>My Cart</span>
                <div className="counter">
                  0
                </div>
              </div>
            </div>
        </div>
        <div className="bottomActions">
          <div className="cart">
            <FaCartShopping />
            <span>My Cart</span>
          </div>
          <div className="home">
            <FaHome />
            <span>Home</span>
          </div>
          <button onClick={gotoTop} className="top">
            <BiSolidLeftTopArrowCircle className='icon'/>
            <span>On Top</span>
          </button>
        </div>
    </header>
  )
}

export default Navbar