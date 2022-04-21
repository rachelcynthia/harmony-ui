import React from 'react';
import './Login.css'

const Login = () => {
    const handleSubmit = () => {
        return true;
    }
    return (
        <div className='login_container'>
            <div className='login_component'>
                <div className='login_header'>
                    Please login to continue
                </div>
                <div className='login_body'>
                    <input type="text" placeholder='Enter email' className="input_text" />
                    <input type="password" placeholder='Enter password' className="input_text" />
                    <input type="button" onClick={handleSubmit()} className="input_button" value="LOGIN" />
                </div>
                <div className='register_component'>
                    New to Harmony? <a className='register_button' href='#'>Register</a>
                </div>
            </div>

        </div>
    );
}
export default Login