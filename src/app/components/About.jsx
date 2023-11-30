const people = [
    {
        name: "Ben Bushell",
        role: "Business Development | Full Stack Web Development | Sales Management",
        imageUrl: "/profile_pic.jpg",
        bio: (
            <>
                <p>
                    With over 11 years of experience in sales for a major telecommunications company, I have always been driven by a passion for connecting with people and delivering exceptional results. In pursuit of evolving my skill set, I recently took a strategic break from sales to enhance my abilities as a Full Stack Web Developer.
                </p>
                <p className="pt-4">
                    Since then I've dedicated my time to work part-time for a charity, 'A Good Thing', and have also been engaged in various freelance projects. These experiences have allowed me to practically apply and continuously expand my diverse skill set, utilising a variety of languages, frameworks, and tools such as JavaScript, NodeJS, React, NextJS, PostgreSQL, Firebase, Svelte, WordPress, CSS, Tailwind, Bootstrap, and VueJS.
                </p>
                <p className="pt-4">
                    My sales background provides a perspective that bridges client
                    needs with technical solutions. My commitment goes beyond just
                    delivering on tasks; I aim to provide work that not only meets
                    but exceeds your expectations.
                </p>
                <p className="pt-4">
                    I am actively exploring new opportunities that allow me to leverage either or both of my skill sets. Whether it's building a web application or spearheading a sales campaign, I bring dedication, a proven track record, and a results-driven approach to every project.
                </p>
            </>
        ),
        twitterUrl: "#",
        linkedinUrl: "#",
    },
];

export default function About() {
    return (
        <div className="bg-white py-24" id="about">
            <div className="mx-auto flex flex-col sm:max-w-7xl gap-8 justify-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                        About
                    </h2>
                </div>
                <ul
                    role="list"
                    className="mt-6 space-y-12 divide-y divide-gray-200 flex justify-center"
                >
                    {people.map((person) => (
                        <li
                            key={person.name}
                            className="flex flex-col gap-10 sm:flex-row items-center justify-center px-4"
                        >
                            <img
                                className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
                                src={person.imageUrl}
                                alt=""
                            />
                            <div className="max-w-xl flex-auto">
                                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                                    {person.name}
                                </h3>
                                <div className="text-base leading-7 text-gray-600">
                                    {person.role}
                                </div>
                                <div className="mt-6 text-sm leading-7 text-gray-600">
                                    {person.bio}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
