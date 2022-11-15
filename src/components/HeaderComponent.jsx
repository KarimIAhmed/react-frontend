import React, {Component} from 'react';
import './Header.css';
class HeaderComponent extends Component {
    render() {
        return (
            <div className="headerr">
                
               <a href="/signup">
                   <button className="button">Sign up</button>
               </a>
            </div>
        );
    }
}

export default HeaderComponent;