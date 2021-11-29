import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({user}) => {
    return (
        <div className="navbar">
            <span className="logo"><Link to="/" className="link">AdminAuth</Link></span>
            {user ? (

                <ul className="list">
                <li className="listItem">
                    <img src="https://avatars.dicebear.com/api/human/2696.svghttps://avatars.dicebear.com/api/human/2696.svg" alt="avatar" className="avatar" />
                </li>
                <li className="listItem">JohnDoe</li>
                <li className="listItem">Logout</li>
            </ul>
                ) : (
                    <Link to="login" className="link">Login</Link>
                )}
        </div>
    )
}

export default Navbar
