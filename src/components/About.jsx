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
        null
    )
}