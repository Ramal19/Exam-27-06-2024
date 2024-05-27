import React from 'react'
import './Navbar.scss'
import { BsTelephoneInboundFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { IoMenuSharp } from "react-icons/io5";

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="img">
                <img src="https://preview.colorlib.com/theme/course/images/logo.png" />
                <h1>course</h1>
            </div>

            <ul>
                <li>
                    <Link style={{color: '#3a3a3a', textDecoration: 'none'}} to={'/'}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link style={{color: '#3a3a3a', textDecoration: 'none'}} to={'/add'}>
                        Add
                    </Link>
                </li>
                <li>
                    <Link style={{color: '#3a3a3a', textDecoration: 'none'}} to={'/favorites'}>
                        Wishlist
                    </Link>
                </li>
                <li>
                    <Link style={{color: '#3a3a3a', textDecoration: 'none'}} to={'/admin'}>
                        Admin
                    </Link>
                </li>
                <li>
                    NEWS
                </li>
                <li>
                    CONTACT
                </li>
            </ul>
            <ul className='menu'>
                <li>
                    <IoMenuSharp />
                </li>
            </ul>

            <div className="number">
                <BsTelephoneInboundFill />
                <span>+43 4566 7788 2457</span>
            </div>
        </nav>
    )
}
