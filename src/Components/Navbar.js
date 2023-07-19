import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navbar_color">
        <Link to={'/'} className="navbar-brand">My Todo APP</Link>

        </nav>
    )
}

export default Navbar
