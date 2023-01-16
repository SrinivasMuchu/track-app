import React from 'react'
import './landingPage.css'
import Button from './../common/Button/Buttons'
import OutlinedButton from '../common/OutlineButton/Outlinebtn'
import {motion} from 'framer-motion'
import { RWebShare } from "react-web-share";
import iphone from './../assets/iphone 1.svg'
import gradientimg from './../assets/gradient 1.svg'


function LandingPage() {
  return (
    <div className='flex-wrapper'>
      <div className='headings'>
      <motion.h1
          className="big-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <span className="stroke">Track Crypto</span>
          <br />
          <span className="big-heading-blue" style={{color:"#03C988"}}>Real Time.</span>
        </motion.h1>
      <p className='para'>
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </p>
        {/* <div className="button-div">
          <a href="/dashboard">
            <Button text={"Dashboard"} />
          </a>
          <RWebShare
            data={{
              text: "Checkout my crypto tracker made using React!",
              title: "Crypto Tracker",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <OutlinedButton text={"Share"} />
          </RWebShare>
        </div> */}
        <div className='btns'>
        <a href="/dashboard">
        <button className='btn-dash'>Dashboard</button>
        </a>
        <RWebShare
            data={{
              text: "Checkout my crypto tracker made using React!",
              title: "Crypto Tracker",
            }}
            onClick={() => console.log("shared successfully!")}
          >
        <button className='btn-share'>share</button>
        </RWebShare>
        </div>
        </div>
        <div className='img-box'>
        <img className="gradient" src={gradientimg} alt="backimg" />
        <motion.img
          src={iphone}
          className="phone"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
        </div>
      </div>
  )
}

export default LandingPage