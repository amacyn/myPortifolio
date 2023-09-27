
import React, { useState } from 'react';
import '../../../index.css';
import { Link } from 'react-router-dom';
import '../../../App.css'

const Dropdown = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="dropdown">
      <section className="dropdown-header" onClick={toggleDropdown}>
        <span className="dropdown-title">{title}</span>
        <span className="dropdown-icon">
          {isOpen ? (
            <span className="close-icon">×</span>
          ) : (
            <span className="menu-icon">&#9776;</span>
          )}
        </span>
      </section>
      {isOpen && (
        <div className="dropdown-content">
         <ul>
            <li><Link className='li' to='/'>Home</Link></li>
            <li><Link className='li' to='/About'>About</Link></li>
            <li><Link className='li' to='/Services'>Services</Link></li>
            <li><Link className='li' to='/Experiences'>Experiences</Link></li>
            <li><Link className='li' to='/Works'>Works</Link></li>
            <li><Link className='li' to='/Contacts'>Contacts</Link></li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Dropdown;