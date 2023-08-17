import React from 'react'
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import './navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />
        <div className="desktopMenu">
            <Link className='desktopMenuLink active'>Home</Link>
            <Link className='desktopMenuLink'>About</Link>
            <Link className='desktopMenuLink'>About</Link>
            <Link className='desktopMenuLink'>Portfolio</Link>
            <Link className='desktopMenuLink'>Clients</Link>
        </div>
        <button className="desktopMenuBtn">
            <img src={contactImg} alt="" className="desktopMenuImg" /> Contact Me
        </button>
    </nav>
  )
}

export default Navbar