import React from "react";
import Header from "../Header/Header";
import './Register.css'

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
                        <label for="profile">Upload your photo</label>
                        <input type="file" id="profile" accept="image/png, image/jpeg"></input>
                        <input type="button" onClick={handleSubmit()} className="input_button" value="REGISTER" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;