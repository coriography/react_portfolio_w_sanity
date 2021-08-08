import React, { useEffect, useState } from "react";
import { MappingsContext } from "source-list-map";
import sanityClient from "../client.js";
import image from "../img/eberhard-grossgasteiger-NvesrDbsrL4-unsplash.jpg";

export default function About() {
    const [author, setAuthor] = useState(null);
    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, [])

    if (!author) return <div>Loading...</div>

    return (
        <main className="relative">
            <img src={image} alt="purple clouds" className="absolute w-full" />
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-purple-800 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={urlFor(author.authorImage).url()} alt="" />
                    <div>
                        <h1></h1>
                        <div>
                            BLOCK CONTENT
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}