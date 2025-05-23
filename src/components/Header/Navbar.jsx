
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = (
        <>
            <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "m-2 text-blue-500 font-bold" : "m-2"}>
                <li>Home</li>
            </NavLink>
            <NavLink 
                to="/readList" 
                className={({ isActive }) => isActive ? "m-2 text-blue-500 font-bold" : "m-2"}>
                <li>Read List</li>
            </NavLink>
            <NavLink 
                to="/listedBook" 
                className={({ isActive }) => isActive ? "m-2 text-blue-500 font-bold" : "m-2"}>
                <li>Listed Books</li>
            </NavLink>
            <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? "m-2 text-blue-500 font-bold" : "m-2"}>
                <li>About</li>
            </NavLink>
        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100 w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn mr-3 bg-green-500 text-white font-bold">Sign In</a>
                    <a className="btn bg-blue-400 text-white font-bold">Sign Up</a>
                </div>
            </div>
            <div className='border border-t-2 border-gray-100'></div>
        </div>
    );
};

export default Navbar;
