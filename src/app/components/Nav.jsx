"use client";

import { useState } from "react";
import Link from 'next/link'

const tabs = [
    { name: "Home", href: "#top", current: true },
    { name: "Projects", href: "#projects", current: false },
    { name: "Freelance", href: "#freelance", current: false },
    { name: "Experience", href: "#experience", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Nav() {
    const [activeTab, setActiveTab] = useState("Top");

    return ( 
        <div className="sticky top-0 bg-white z-20">
            <div>
                <div className="border-b border-gray-200">
                    <nav
                        className="-mb-px flex space-x-6 justify-center"
                        aria-label="Tabs"
                    >
                        {tabs.map((tab) => (
                            <Link
                                key={tab.name}
                                onClick={() => setActiveTab(tab.name)}
                                href={tab.href}
                                className={classNames(
                                    tab.name === activeTab
                                        ? "border-black text-black"
                                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                                    "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                                )}
                                aria-current={tab.name === activeTab ? "page" : undefined}
                            >
                                {tab.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}
