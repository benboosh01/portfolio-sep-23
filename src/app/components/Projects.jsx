"use client";

const projects = [
    {
        id: 1,
        name: "Script 4 Thai",
        imageUrl: "/script4thai.png",
        description:
            "An app for learning the thai script, includes a flashcard game to improve memory rentention.",
        tech: ["NextJS", "Firebase", "Tailwind"],
        link: 'https://www.script4thai.com'
    },
    {
        id: 2,
        name: "FlashLingual",
        imageUrl: "/globe.png",
        description:
            "A language learning app that alllows you to create your own flashcards, includes the ability to add audio to your flashcards from the google text to speech API.",
        tech: ["NextJS", "Firebase", "Tailwind"],
        link: 'https://www.flashlingual.com'
    },
];

export default function Projects() {
    return (
        <section className="max-w-7xl mx-auto py-24" id="projects">
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Projects
            </h2>
            <ul
                role="list"
                className="flex flex-wrap gap-x-6 gap-y-8 xl:gap-x-8 p-5 justify-center mt-6"
            >
                {projects.map((project) => (
                    <li
                        key={project.id}
                        className="rounded-xl border border-gray-200 sm:w-96 h-full"
                    >
                        <div className="flex justify-between w-full bg-gray-50 border-b border-gray-900/5">
                            <div className="flex items-center gap-x-4 p-6">
                                <img
                                    src={project.imageUrl}
                                    alt={project.name}
                                    className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
                                />
                                <div className="text-sm font-medium leading-6 text-gray-900">
                                    {project.name}
                                </div>
                            </div>
                            <a
                                    className="text-gray-500 hover:text-red-400 relative top-8 right-8 p-2"
                                    aria-hidden="true"
                                    href={project.link}
                                    target="_blank"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                                    </svg>
                                </a>
                        </div>

                        <dl className="divide-y divide-gray-100 px-6 py-4 text-sm leading-6 flex flex-col justify-between h-52 overflow-y-auto">
                            <div className="py-3">
                                <p>{project.description}</p>
                            </div>
                            <div className="flex justify-between gap-x-4 py-3">
                                <dt className="text-gray-500">Tech Used:</dt>
                                <dd className="flex items-start gap-x-2">
                                    <div className="font-medium text-gray-900">
                                        {project.tech.map((tech) => {
                                            return tech + ", ";
                                        })}
                                    </div>
                                </dd>
                            </div>
                        </dl>
                    </li>
                ))}
            </ul>
        </section>
    );
}
