import React, { Component } from 'react';



class Header extends Component {
    
    
    
    
    
    render() {
        return (
            <div className='Header'>
                <ul>
                    <li><a href='#Home'>Home</a></li>
                    <li><a href='#Auto'>Auto</a></li>
                    <li><a href='#Home'>Home</a></li>
                    <li><a href='#Commercial'>Commercial</a></li>
                    <li><a className='active' href='#Defensive Driving'>Defensive Driving</a></li>
                </ul>
            </div>
        )
    }
}



export default Header;