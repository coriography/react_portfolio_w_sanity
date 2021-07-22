import React, { useEffect, useState } from "react";
import SanityClient from "../client.js";

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        SanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            project,
            link,
            tags,
        }`
        )
        .then((data) => setProjectData(data))
        .catch(console.error);
    }, []);
    return 
}