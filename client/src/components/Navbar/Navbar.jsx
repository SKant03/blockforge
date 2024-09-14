import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
const MyNavbar = () => {

    const [state, setState] = useState({
        provider: null,
        signer: null,
        contract: null
    })
    const [account, settAccounnt] = useState('Not connected');
    const [connect, setConnect] = useState('connect')

    const connectMM = async () => {
        const contractAddress="";
        const contractAbI="";
        try {
            const { ethereum } = window;
            const account = await ethereum.request({
                method: "eth_requestAccounts"
            })

            window.ethereum.on("accountsChanged", () => {
                window.location.reload()
            })
            settAccounnt(account);
            console.log(`${account}`)
            setConnect(account)
            const provider = new ethers.BrowserProvider(window.ethereum)
            const signer = provider.getSigner();

            const contract = new ethers.Contract(
                contractAddress,
                contractAbI,
                signer
            )

            setState({ provider, signer,contract });
            console.log(`${provider}`)
            console.log(`${signer}`)
        }
        catch (error) {
            console.log(error)
        }
    }
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
                            <li className='nav-item'>
                                <a className='nav-link' href="#"><Button onClick={connectMM}>{connect}</Button></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default MyNavbar