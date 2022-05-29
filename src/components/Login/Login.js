import React from 'react';
import { Link } from "react-router-dom";
import Header from '../Header/Header';
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
    const handleSubmit = () => {
        // const user = `http://localhost:8080/blog/all`;
        fetch('http://localhost:8080/blog/all')
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                return Promise.reject(data);
            }

           console.log(data)
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
        return true;
    }
    return (
        <>
            <Header isLoggedIn={false} />
            <div className='login_container'>
                <div className='login_component'>
                    <div className='login_header'>
                        Please login to continue
                    </div>
                    <div className='login_body'>
                        <img src={logo} alt="Logo" width="80" height="80" />
                        <input type="text" placeholder='Enter email' className="input_text" />
                        <input type="password" placeholder='Enter password' className="input_text" />
                        <input type="button" onClick={handleSubmit()} className="input_button" value="LOGIN" />
                    </div>
                    <div className='reg_component'>
                        New to Harmony? <Link to="/register" className='register_link'>Register</Link>
                    </div>

                </div>

            </div>
        </>
    );
}
export default Login