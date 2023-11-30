"use client";

import { useState, useEffect } from "react";
import { EnvelopeIcon, TwitterIcon, GitHubIcon, LinkedInIcon } from "./Icons";

export default function Home() {
    const titles = [
        "Full Stack Web Development",
        "Business Development",
        "Web Design",
        "Sales Management",
    ];
    const [currentTitle, setCurrentTitle] = useState("");
    const [fullTitle, setFullTitle] = useState(titles[0]);
    let index = 0;

    useEffect(() => {
        const typeTitle = (title, i = 0) => {
            if (i < title.length) {
                setCurrentTitle((prev) => prev + title[i]);
                setTimeout(() => typeTitle(title, i + 1), 100);
            } else {
                setTimeout(() => rotateTitle(), 2000);
            }
        };

        const rotateTitle = () => {
            index = (index + 1) % titles.length;
            setCurrentTitle("");
            setFullTitle(titles[index]);
            typeTitle(titles[index]);
        };

        typeTitle(fullTitle);
    }, []);

    return (
        <section>
            <div className="bg-white min-h-screen flex items-center justify-center">
                <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Hello, I'm Ben
                        </h2>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pt-2">
                            A freelance professional from the U.K
                        </h2>
                        <h3 className="text-2xl text-gray-700 pt-4 sm:text-3xl">{currentTitle}</h3>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                            Blending technical expertise with an understanding
                            for business needs. Passionate about creating
                            solutions that drive results.
                        </p>
                        <div className="flex gap-3 justify-center mt-6">
                            <EnvelopeIcon />
                            <TwitterIcon />
                            <GitHubIcon />
                            <LinkedInIcon />
                        </div>
                        {/* <div className="mt-6 flex items-center justify-center">
                            <a
                                href="#"
                                className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-300 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Download CV
                            </a>
                        </div> */}
                        <div className="flex justify-center mt-6 font-bold">
                            <a href="#about">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-10 h-10"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
