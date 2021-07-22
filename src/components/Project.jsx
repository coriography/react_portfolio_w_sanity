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
    return (
        <main className="bg-purple-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center mono">My Projects</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my project page</h2>
                <section className="grid grid-cols-2 gap-8">
                    {projectData && projectData.map((project, index) => (
                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                            <a 
                            href={project.deployedLink}
                            alt={project.title}
                            target="_blank"
                            rel="noopener noreferrer">
                                {project.title}
                            </a>
                        </h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Date</strong>
                                :{" "}{new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold">Location</strong>
                                :{" "}{project.place}
                            </span>
                            <span>
                                <strong className="font-bold">Type</strong>
                                :{" "}{project.projectType}
                            </span>
                            <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                {project.description}
                            </p>
                            <a 
                            href={project.deployedLink}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl">
                                View Project{" "}
                                <span role="img" aria-label="right pointer">👉</span>
                            </a>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}