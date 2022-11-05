import React, {Component} from 'react';
import './Header.css';
class Header extends Component {
    render() {
        return (
            <div className="header">
               <a href="https://www.google.com">
                   <button className="button">Sign up</button>
               </a>
            </div>
        );
    }
}

export default Header;