import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">AdminAuth</span>
            <ul className="list">
                <li className="listItem">
                    <img src="https://avatars.dicebear.com/api/human/2696.svghttps://avatars.dicebear.com/api/human/2696.svg" alt="avatar" className="avatar" />
                </li>
                <li className="listItem">JohnDoe</li>
                <li className="listItem">Logout</li>
            </ul>
        </div>
    )
}

export default Navbar
