import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import './Register.css'
import arrowLeft from "../../assets/arrow-left.svg"

const Register = () => {
    const handleSubmit = () => {

    }
    return (
        <>
            <Header isLoggedIn={false} />
            <div className="register_container">
                <div className="register_component">
                    <div className="register_header">
                        REGISTER
                    </div>
                    <div className="register_body">
                        <input type="text" placeholder='Enter name' className="input_text" />
                        <input type="email" placeholder='Enter email' className="input_text" />
                        <input type="email" placeholder='Enter username/display name' className="input_text" />
                        <input type="password" placeholder='Enter password' className="input_text" />
                        <input type="password" placeholder='Re enter your password' className="input_text" />
                        {/* <label for="profile">Upload your photo</label>
                        <input type="file" id="profile" accept="image/png, image/jpeg"></input> */}
                        <input type="button" onClick={handleSubmit()} className="input_button" value="REGISTER" />
                        <div className="log_component">
                        <img src={arrowLeft} alt="" height="25" width="25" color="red" className="login-left-arrow"></img>
                            <Link to="/login" className='login_link'>
                                Back to Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;