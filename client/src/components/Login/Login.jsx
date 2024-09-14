import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Login.css"

const Login = () => {
    return (
        <div className="main_login">
            <div className="border">
                <div className="content">
                    <h2>Login</h2>
                    <img className='image' src="https://i.pravatar.cc/150" alt="image" />
                </div>
                <div className="username">
                    <div className="class1">
                        <label htmlFor="text">username :</label>
                        <input className='form_control' type="text" placeholder='username' />
                        <label htmlFor="text">password :</label>
                        <input className='form_control' type="text" placeholder='username' />
                        <Link to='/' className='btn1'><Button className='button'>login</Button></Link>
                    </div>
                </div>
            </div>

        </div>
    )
    
}
export default Login
