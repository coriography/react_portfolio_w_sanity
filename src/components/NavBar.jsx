import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons"

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
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://github.com/coriography" className="mr-4" target="_blank" fgColor="#ffffff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://www.linkedin.com/in/cori-lint/" className="mr-4" target="_blank" fgColor="#ffffff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://twitter.com/CoriLint" className="mr-4" target="_blank" fgColor="#ffffff" style={{ height: 35, width: 35 }} />
                </div>
            </div>
        </header>
    )
}