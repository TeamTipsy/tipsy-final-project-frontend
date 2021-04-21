import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {const [click, setClick] = useState(false);
const handleClick = () => setClick(click);
return (
<>
<nav className='bg-navbar-gray'>
    <div className='nav-container'>
        <NavLink exact to="/" 
        className="nav-item"
        onClick={handleClick}
        >
           Home 
        </NavLink>
        {/* <NavLink
        className="nav-item"
        onClick={handleClick}
        >
           Search 
        </NavLink> */}
        <NavLink exact to="/userprofile"
        className="nav-item"
        onClick={handleClick}
        >
            Me
        </NavLink>
    </div>
</nav>
</>
)
}
