import React from 'react';
import '../App.css'
import {Link} from 'react-router-dom'

function Navbar(){

    const navStyle = { 
        color: 'white',
        
    }

    return(
        <nav>
            <Link to='/' style={navStyle}><img src="ReaddersText_White.svg" alt="" height="25px"/></Link>
                <ul className="nav-links">
                    <Link to='/postlist' style={navStyle}><li>Posts</li></Link>
                    {/* <Link to='/user' style={navStyle}><li>User</li></Link> */}
                </ul>
        </nav>
    )
}

export default Navbar;