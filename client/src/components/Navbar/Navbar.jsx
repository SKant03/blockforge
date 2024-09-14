import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const MyNavbar = ({ connectMM }) => {
  // State to manage the connection label
  const [connect, setConnect] = useState('Connect');

  // Handler to call connectMM and update button text
  const handleConnect = async () => {
    try {
      await connectMM(); // Call the MetaMask connection function
      setConnect('Connected'); // Update the button to reflect connected status
    } catch (error) {
      console.error('Connection failed:', error);
    }
  };

  return (
    <div>
      <header>
        <nav className="navbar navbar-light bg-warning">
          <h3 className='head'>
            <Link to='/' className='m_link'>SUBsecure</Link>
          </h3>
          <div className="nav-items">
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to='/Login' className='nav-link'>
                  <Button>Login</Button>
                </Link>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href="#"><Button>Register</Button></a>
              </li>
              <li className='nav-item'>
              <a className='nav-link' href="#"><Button onClick={handleConnect}>{connect}</Button></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default MyNavbar;
