const posts = [
    {
        id: 2,
        title: "Freelance Web Developer",
        description: [
            "Engaged in personal projects and built apps that are publicly available.",
            "Developed websites for clients on a freelance basis, contributing to professional and personal growth",
        ],
        skills: ["WordPress", "Tailwind CSS ", "Firebase", "PostgreSQL", 'HTML5', 'React JS', 'JavaScript'],
        date: "Jan 2023 - Present",
        category: { title: "Full Stack Web Developer", href: "#" },
    },
    {
        id: 1,
        title: "A Good Thing (UK)",
        description: [
            "Deliver high quality, robust production code for the app ensuring smooth operation at all times.",
            " Implement new features required to improve the functionality of the app.",
            "Collaborate with peers sharing knowledge and expertise.",
        ],
        skills: ["Svelte", "Firebase", "PostgresSQL", "Bulma CSS"],
        date: "Feb 2023 - Present",
        category: { title: "Full Stack Web Developer", href: "#" },
    },
    {
        id: 3,
        title: "Career Transition",
        description: [
            "After completing the Northcoders bootcamp, I embarked on a journey to South East Asia. While travelling, I dedicated myself to deepening my technical knowledge, including areas such as Vue JS, Next JS, Python, Firebase, and Wordpress, while also continuing to strengthen my expertise in the technologies introduced during the bootcamp. This hands-on experience allowed me to solidify and expand upon what I learned. Furthermore, driven by a long-held dream to master a second language, I embraced the challenge by taking lessons in Thai. This experience not only honed my language skills but also fostered a greater sense of adaptability and deepened my immersion into the country's culture.",
        ],
        skills: ["Language Learning", "Adapting to a new culture", "Self Discipline", "Passion for Learning"],
        date: "Nov 2022 - Dec 2022",
        category: { title: "Education", href: "#" },
    },
        {
        id: 4,
        title: "Full Stack Web Developer in Training",
        description: [
           'My time as a Northcoders software development student has prepared me for my first junior software development role, during the 3 month bootcamp we followed a practical on the job style curriculum learning common industry best practices such as:', 'Git version control', 'Test driven development', 'Pair programming'
        ],
        skills: ["GitHub", "Jest", "Express.js", "PostgreSQL", 'SQL', 'Node.js', 'Bootstrap', 'CSS', 'HTML5', 'React JS', 'JavaScript'],
        date: "Aug 2022 - Oct 2022",
        category: { title: "Education", href: "#" },
    },
    {
        id: 5,
        title: "Outbound Acquisition Telesales Manager / Executive",
        description: [
           'My time as a sales advisor/manager has equipped me with various skills that will aid me my future career:', 'Ability to communicate ideas at all levels from senior leadership to front line employees. ', 'Able to deal effectively with customers/clients and understand their needs as well as provide suitable solutions to their problems. ', ' Resilience, drive and determination to succeed and perform at a high level, providing excellent value to clients, employer and colleagues.', 'Achievements:', 'Consistently exceeded all performance targets', 'Edge Winner 2020; Companywide performance incentive', 'Introduced improved performance reporting for front line advisors as well as senior leaders', 'Introduced and managed a new performance metric (call conversion) to outbound sales which contributed to an extra 1000+ sales versus the previous year.'
        ],
        skills: ["Rapport Building", "Time Management", "Organisation", 'Resilience', 'Communication', 'Empathy', 'Persuasion', 'Adaptability', 'Negotiation', 'Self-Motivation'],
        date: "Apr 2011 - Aug 2022",
        category: { title: "Sales", href: "#" },
    },
];

export default function Experience() {
    return (
        <div className="bg-white py-24 sm:py-32" id="experience">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                        Experience
                    </h2>
                    <ul className="mt-10 flex flex-col gap-6">
                        {posts.map((post) => (
                            <article
                                key={post.id}
                                className="flex max-w-xl flex-col items-start justify-between border-b py-6"
                            >
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time
                                        className="text-gray-500 bg-gray-200 font-medium rounded-full px-3 py-1.5"
                                    >
                                        {post.date}
                                    </time>
                                    <p
                                        className="relative z-10 rounded-full px-3 py-1.5 font-medium text-gray-500 bg-gray-200"
                                    >
                                        {post.category.title}
                                    </p>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-6 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 pl-1">
                                        <a href={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    <ul>
                                        {post.description.map((line) => {
                                            return (
                                                <li className="mt-3 text-sm leading-6 text-gray-600 pl-1">
                                                    {line}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <ul className="flex gap-3 flex-wrap mt-6">
                                        {post.skills.map((skill) => {
                                            return <li className="text-xs rounded-full px-3 py-1.5 text-gray-500 bg-gray-200">{skill}</li>
                                        })}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
