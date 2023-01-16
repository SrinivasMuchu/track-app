import React,{useState} from 'react'
import {IconButton} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from "@mui/material/Drawer";
import './header.css'

function DrawerIcon() {
    const [open, setOpen] = useState(false);
  return (
    <div>
         <div className="menu-button">
        <IconButton onClick={() => setOpen(true)}>
          <MenuIcon style={{ color: "white" }} />
        </IconButton>
      </div>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div">
          <a href="/">
            <p className="link">Home</p>
          </a>
          <a href="/compare">
            <p className="link">Search</p>
          </a>
          <a href="/about-us">
            <p className="link">About Us</p>
          </a>
          <a href="/dashboard">
            <p className="link">Dashboard</p>
          </a>

        </div>
      </Drawer>
    </div>
  )
}

export default DrawerIcon