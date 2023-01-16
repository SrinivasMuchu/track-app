import React from 'react'
import './header.css'
import DrawerIcon from './drawer'

function Heading() {
    return (
        <div className='heading'>
            <h1 >CryptoTracker<span style={{color:"#03C988"}}>.</span></h1>
            <div className='links'>
            <a href="/">
          <p className="link">Home</p>
        </a>
        <a href="/search">
          <p className="link">Search</p>
        </a>
        <a href="/about-us">
          <p className="link">About Us</p>
        </a> 
        <a href="/dashboard">
          <p className="link">
            {/* <Button text="Dashboard" /> */}
            Dashboard
          </p>
        </a>

            </div>
            <div className="menu-div">
        <DrawerIcon />
      </div>

        </div>
    )
}

export default Heading