"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";

const statuses = {
    Paid: "text-green-700 bg-green-50 ring-green-600/20",
    Withdraw: "text-gray-600 bg-gray-50 ring-gray-500/10",
    Overdue: "text-red-700 bg-red-50 ring-red-600/10",
};
const clients = [
    {
        id: 1,
        name: "Script 4 Thai",
        imageUrl: "/script4thai.png",
        lastInvoice: {
            date: "December 13, 2022",
            dateTime: "2022-12-13",
            amount: "$2,000.00",
            status: "Overdue",
        },
    },
    {
        id: 2,
        name: "SavvyCal",
        imageUrl: "https://tailwindui.com/img/logos/48x48/savvycal.svg",
        lastInvoice: {
            date: "January 22, 2023",
            dateTime: "2023-01-22",
            amount: "$14,000.00",
            status: "Paid",
        },
    },
    {
        id: 3,
        name: "Reform",
        imageUrl: "https://tailwindui.com/img/logos/48x48/reform.svg",
        lastInvoice: {
            date: "January 23, 2023",
            dateTime: "2023-01-23",
            amount: "$7,600.00",
            status: "Paid",
        },
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Projects() {
    return (
        <section className="max-w-7xl">
            <h2 className="text-center mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Projects
            </h2>
            <ul
                role="list"
                className="flex flex-wrap gap-x-6 gap-y-8 xl:gap-x-8 p-5 justify-center"
            >
                {clients.map((client) => (
                    <li
                        key={client.id}
                        className="overflow-hidden rounded-xl border border-gray-200 sm:w-96"
                    >
                        <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                            <img
                                src={client.imageUrl}
                                alt={client.name}
                                className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
                            />
                            <div className="text-sm font-medium leading-6 text-gray-900">
                                {client.name}
                            </div>
                            <span
                                className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
                                aria-hidden="true"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                                </svg>
                            </span>
                        </div>
                        <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                            <div className="flex justify-between gap-x-4 py-3">
                                <dt className="text-gray-500">Last invoice</dt>
                                <dd className="text-gray-700">
                                    <time
                                        dateTime={client.lastInvoice.dateTime}
                                    >
                                        {client.lastInvoice.date}
                                    </time>
                                </dd>
                            </div>
                            <div className="flex justify-between gap-x-4 py-3">
                                <dt className="text-gray-500">Amount</dt>
                                <dd className="flex items-start gap-x-2">
                                    <div className="font-medium text-gray-900">
                                        {client.lastInvoice.amount}
                                    </div>
                                    <div
                                        className={classNames(
                                            statuses[client.lastInvoice.status],
                                            "rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset"
                                        )}
                                    >
                                        {client.lastInvoice.status}
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
