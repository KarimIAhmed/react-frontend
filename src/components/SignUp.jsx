import React, {Component} from 'react';
import Header from "./Header";
import logo from "./JooleLogo.png";
import './Header.css';
class SignUp extends Component {
    render() {
        return (
            <div className="SignUp">
                <Header/>
                <div className="form">
                <img  className="Logo" src={logo} alt="Logo" />
                <form>
                    <div>
                        <input className="username" type="text" placeholder="Enter your e-mail"/>
                    </div>
                    <div>
                        <input className="password" type="password" placeholder="Enter your password"/>
                    </div>
                    <button className="LoginButton" type="submit">Register</button>
                </form>
                </div>
            </div>
        );
    }
}

export default SignUp;