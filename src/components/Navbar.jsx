import  React, { useState } from 'react';
import { IconMenu2, IconX } from "@tabler/icons-react";
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };


  const navLinks = [
    {
      name: 'Home',
      to: '/', // Use 'to' prop for React Router links
    },
    {
      name: 'About',
      to: '/about',
    },
    {
      name: 'Projects',
      to: '/addprojects',
    },
  ];

  return (
    <React.Fragment>
      <nav>
      <Link to="/" onClick={toggleMobileMenu} className='home-link'>
          Rohit <span className="alternate-text">Tiwari</span>
        </Link>
      <ul>
      {navLinks.map((item) => (
            <li key={item.name}>
               <NavLink
              to={item.to}
              activeClassName="active" // Style active link
            >
              {item.name}
            </NavLink>
            </li>
          ))}
        <li>
        <IconMenu2 onClick={toggleMobileMenu} className='mobile-menu' width={30} height={30}/>
        </li>
      </ul>
      </nav>

      {/* mobile Nav */}


      <div className={`mobile-nav ${isMobileMenuOpen ? 'open-menu' : 'closed-menu'}`}>
        <span onClick={toggleMobileMenu}>
        <IconX width={30} height={30}/>
        </span>
        <ul>
          {navLinks.map((item) => (
            <li key={item.name} onClick={toggleMobileMenu} >
               <Link to={item.to}>{item.name}</Link>
            </li> 
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
