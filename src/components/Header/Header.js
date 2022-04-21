import React from 'react';
import './Header.css'
import profile from '../../assets/person-fill.svg'
import logo from '../../assets/logo.png'

const Header = ({ isLoggedIn }) => {
    // render() {
    return (
        <nav>
            <div className="left-links">
                <img src={logo} alt="Logo" width="50" height="50" />
            </div>
            <div className="centered-links">
                <a className="links">Harmony</a>
            </div>
            {isLoggedIn === true ?
                <div className="right-links" data-testid="profile">
                    <button className="circle"><img src={profile} alt="Profile" width="25" height="25" /></button>
                </div> : <div className="right-links" style={{ width: "50px" }}></div>}
        </nav>
    );
    // }
}

export default Header