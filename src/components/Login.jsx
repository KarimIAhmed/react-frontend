import React, {Component} from 'react';
import logo from './JooleLogo.png'
class Login extends Component {
    render() {
        return (
            <div className="Login">
                <img  className="Logo" src={logo} alt="Logo" />
                <form>
                <div>
                    <input className="username" type="text" size="25" placeholder="Username or Email"/>
                </div>

                <div>
                <input className="password" type="password" size="25" placeholder="Password"/>
                </div>
                <button className="LoginButton" type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;