import React from 'react';
import './Header.css';

const Header = (props) => (
    <div className="Header">
       <ul>
           <li><a href="/">MaturDev</a></li>
           <li><a href="/about">About</a></li>
           <li><a href="/portfolio">Projects</a></li>
       </ul>
       <p className='Sign'>
           Sign IN
       </p>
    </div>
)

export default Header;