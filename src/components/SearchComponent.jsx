import React, {Component} from 'react';
import logo from "./JooleLogo.png";
import './Header.css';

class SearchComponent extends Component {
    render() {
        return (
            <div className="Search">
                <img  className="Logo" src={logo} alt="Logo" />

            </div>
        );
    }
}

export default SearchComponent;