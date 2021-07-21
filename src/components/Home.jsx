import React from "react"
import image from "../img/eberhard-grossgasteiger-NvesrDbsrL4-unsplash.jpg"

export default function Home() {
    return (
        <main>
            <img src={image} alt="purple clouds" 
                className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-purple-100 font-bold mono leading-none lg:leading-snug home-name">Hi, I'm Cori</h1>
            </section>
        </main>
    )
}