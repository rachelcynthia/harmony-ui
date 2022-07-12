import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../Header/Header';
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = () => {
        // const user = `http://localhost:8080/blog/all`;
        // fetch('http://localhost:8080/blog/all')
        // .then(async response => {
        //     const data = await response.json();

        //     // check for error response
        //     if (!response.ok) {
        //         // get error message from body or default to response statusText
        //         return Promise.reject(data);
        //     }

        //    console.log(data)
        // })
        // .catch(error => {
        //     console.error('There was an error!', error);
        // });
        // return true;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, password: password })
        };
        fetch('http://localhost:8080/login', requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
                console.log("registered", data)
                if (response.ok) {
                    window.location.href = "/home"
                }
            });

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
                        <input type="text" placeholder='Enter email' className="input_text" onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" placeholder='Enter password' className="input_text" onChange={(e) => setPassword(e.target.value)}/>
                        <input type="button" onClick={handleSubmit} className="input_button" value="LOGIN" />
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