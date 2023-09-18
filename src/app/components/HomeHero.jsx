"use client";

import { useState, useEffect } from "react";
import { EnvelopeIcon, TwitterIcon, GitHubIcon, LinkedInIcon } from "./Icons";

export default function Home() {
    const [currentTitle, setCurrentTitle] = useState("");
    const [fullTitle, setFullTitle] = useState("Full Stack Web Developer");
    const titles = [
        "Full Stack Web Developer",
        "Sales Executive",
        "Web Designer",
        "Sales Leader",
        "Coffee Addict",
    ];
    let index = 0;

    useEffect(() => {
        const typeTitle = (title, i = 0) => {
            if (i < title.length) {
                setCurrentTitle((prev) => prev + title[i]);
                setTimeout(() => typeTitle(title, i + 1), 100); // Type each character every 100ms
            } else {
                setTimeout(() => rotateTitle(), 2000); // Wait 2 seconds before switching to next title
            }
        };

        const rotateTitle = () => {
            index = (index + 1) % titles.length;
            setCurrentTitle(""); // Clear the current title
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
                            I'm Ben, a {currentTitle}
                            <br />
                            from the U.K
                        </h2>
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
                        <div className="mt-6 flex items-center justify-center">
                            <a
                                href="#"
                                className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Download CV
                            </a>
                        </div>
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
