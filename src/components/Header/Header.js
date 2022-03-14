import React from 'react';
import './Header.scss'
import profile from '../../assets/person-fill.svg'
import logo from '../../assets/logo.png'

class Header extends React.Component {
    render() {
        return (
            <nav>
                <div class="left-links">
                    <img src={logo} alt="Logo" width="50" height="50" />
                </div>
                <div class="centered-links">
                    <a class="links">Harmony</a>
                </div>
                <div class="right-links">
                    <button className="circle"><img src={profile} alt="Profile" width="25" height="25" /></button>
                </div>
            </nav>
        );
    }
}

export default Header