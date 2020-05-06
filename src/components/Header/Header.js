import React, { Component } from 'react';
import {Link} from "react-router-dom"
import './Header.scss';



class Header extends Component {
    
    
    
    
    
    render() {
        return (
            <div className='header'>
                <ul className="header-links">
                    <li><Link to="dash">Dashboard</Link></li>
                    <li><Link to="/auto">Auto Quotes</Link></li>
                    <li><Link to="/commercial">Commercial Quotes</Link></li>
                    <li><Link to ="/Home">Home Quotes</Link></li>
                </ul>
            </div>
        )
    }
}



export default Header;