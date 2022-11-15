import React, {Component} from 'react';
import './Header.css';
import profilePicture from './images/img.png'
import { useNavigate } from "react-router-dom";
class HeaderComponent extends Component {
    render() {
        return (
            <div className="header">
                <img className="profilePicture" onClick={toggle} src={profilePicture} />
                <div className="menu">
                    <a href="/">
                    <button onClick={logout}>Log out</button>
                    </a>
                </div>
            </div>

        );
    }
}
function toggle(){
    const toggle = document.querySelector('.menu');
    toggle.classList.toggle('active')
}
function logout(){
    localStorage.removeItem("token");

}
export default HeaderComponent;