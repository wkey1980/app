import React from 'react'
import { Link } from 'react-router-dom'

// Imported Pages
import About from '../pages/About'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Portfolio from '../pages/Portfolio'

import './test.css'

const Navbar = () => {
    return (
        <div className="menuStyles">
            <div className="links">
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
            </div>

        </div>
    )
}

export default Navbar
