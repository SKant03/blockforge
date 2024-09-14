import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const MyNavbar = () => {
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
                                <Link to='/Login' className='nav-link'><Button>Login</Button></Link>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href="#"><Button>Register</Button></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default MyNavbar