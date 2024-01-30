import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <div id='main'>
        <Navbar/>
        <div className='name'>
            <h1><span>Launch Your App</span> With Confidence and Creativity</h1>
            <p className='details'> Let innovation be your compass, guiding your launch to unprecedented success! </p>
            <a href="#" className='cv-btn'><b>DOWNLOAD</b></a>
        </div>
    </div>
  )
}

export default Header;