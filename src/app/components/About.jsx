const people = [
    {
        name: "Ben Bushell",
        role: "Full Stack Web Developer / Sales Executive & Leader",
        imageUrl: "/profile_pic.jpeg",
        bio: (
            <>
                I'm an experienced sales professional, turned web developer. With
                over a decade in sales, I've consistently exceeded targets and
                developed lasting relationships with clients and colleagues
                alike.This background has shaped my ability to understand
                customer needs and deliver solutions that surpass expectations.
                <br />
                I recently took on the challenge of learning web development,
                completing an intensive 3-month bootcamp. Since then, I've been
                working part-time for a charity, 'A Good Thing', and engaging in
                freelance projects that have enabled me to apply my diverse
                skill set. I'm comfortable using a variety of languages,
                frameworks and tools such as JavaScript, NodeJS, React, NextJS,
                PostgreSQL, Firebase, Svelte, WordPress, CSS, Tailwind,
                Bootstrap, and VueJS, and am quick to learn with any task.
                <br />
                My sales background provides a perspective that bridges client
                needs with technical solutions. My commitment goes beyond just
                delivering on tasks; I aim to provide work that not only meets
                but exceeds your expectations.
                <br />
                Currently, I'm keen on delving deeper into dynamic roles in this
                sector, with the dual goal of enhancing my expertise and
                contributing positively to the missions of my clients, employers
                and colleagues.
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
                                <p className="text-base leading-7 text-gray-600">
                                    {person.role}
                                </p>
                                <p className="mt-6 text-sm leading-7 text-gray-600">
                                    {person.bio}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
