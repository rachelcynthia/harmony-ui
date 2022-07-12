import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import './Register.css'
import arrowLeft from "../../assets/arrow-left.svg"

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, username: username, email: email, password: password, "confirm-password": confirmPassword })
        };
        fetch('http://localhost:8080/register', requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
                console.log("registered", data)
                if (response.ok) {
                    window.location.href = "/login"
                }
            });

    };

    return (
        <>
            <Header isLoggedIn={false} />
            <div className="register_container">
                <div className="register_component">
                    <div className="register_header">
                        REGISTER
                    </div>
                    <div className="register_body">
                        <input type="text" placeholder='Enter name' className="input_text" onChange={(e) => setName(e.target.value)} />
                        <input type="email" placeholder='Enter email' className="input_text" onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" placeholder='Enter username/display name' className="input_text" onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" placeholder='Enter password' className="input_text" onChange={(e) => setPassword(e.target.value)} />
                        <input type="password" placeholder='Re enter your password' className="input_text" onChange={(e) => setConfirmPassword(e.target.value)} />
                        {/* <label for="profile">Upload your photo</label>
                        <input type="file" id="profile" accept="image/png, image/jpeg"></input> */}
                        <input type="button" onClick={handleSubmit} className="input_button" value="REGISTER" />
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