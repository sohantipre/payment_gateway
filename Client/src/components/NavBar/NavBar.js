import React, { useState } from 'react'
import './NavBar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <nav>
                <div className="logo">
                    Donation
                </div>
                <ul
                    className="nav-links"
                    style={
                        {
                            transform: open ? "translateX(0px)" : ""
                        }
                    }>
                    <li><Link style={{color:"black", textDecoration:"none"}} to="/Home">Home</Link></li>
                    <li><Link style={{color:"black", textDecoration:"none"}} to="/About">About</Link></li>
                    <li><Link style={{color:"black", textDecoration:"none"}} to="/Contact">Contact</Link></li>
                </ul>
                <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
            </nav>
        </div>
    )
}

export default Navbar