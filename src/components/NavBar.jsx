import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <header className="bg-purple-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                        to="/" exact 
                        activeClassName="text-white"
                        className="inline-flex items-center py-6 px-3 mr-4 text-purple-100 hover:text-green-800 text-4xl font-bold mono tracking-widest"
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/post"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-200 hover:text-green-800"
                        activeClassName="text-purple-100 bg-purple-700"
                    >
                        Blog
                    </NavLink>
                    <NavLink 
                        to="/project"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-200 hover:text-green-800"
                        activeClassName="text-purple-100 bg-purple-700"
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                        to="/about"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-200 hover:text-green-800"
                        activeClassName="text-purple-100 bg-purple-700"
                    >
                        About
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}