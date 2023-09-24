import  React, { useState } from 'react';
import { IconMenu2, IconX } from "@tabler/icons-react";
import './Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const pageUp = () => {
    window.scrollTo({
      top: (0,0), behavior: "smooth"
    })
  }
  const navLinks = [
    {
      name:'Home',
      link:'#home'
    },
    {
      name:'About',
      link:'#about'
    },
    {
      name:'Projects',
      link:'#projects'
    },
    {
      name:'Contact',
      link:'#contact'
    },
  ]

  return (
    <React.Fragment>
      <nav>
      <h3 className="logo" onClick={pageUp}>RT.</h3>
      <ul>
      {navLinks.map((item) => (
            <li key={item.name}>
              <a href={item.link}>{item.name}</a>
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
              <a href={item.link}>{item.name}</a>
            </li> 
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
