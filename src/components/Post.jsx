import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

// pull in data from Sanity studio
// use GROQ - Sanity in-house query language similar to GraphQL

export default function Post() {
    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient //GROQ query is within backticks
            .fetch(`*[_type == "post"]{ 
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`) 
            .then((data) => setPost(data)) 
    }, []);

    return 
}