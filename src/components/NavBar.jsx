import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <header className="bg-purple-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact className="inflex-flex items-center py-6 px-3 mr-4 text-purple-100 hover:text-white text-4xl font-bold mono tracking-widest">
                        Home
                    </NavLink>
                    <NavLink to="/post">
                        Blog
                    </NavLink>
                    <NavLink to="/project">
                        Projects
                    </NavLink>
                    <NavLink to="/about">
                        About
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}