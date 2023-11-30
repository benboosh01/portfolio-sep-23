const posts = [
    {
        id: 1,
        title: "Niche Skin Beauty Clinic",
        href: "https://www.nicheskin.co.uk",
        imageUrl: "/nicheskin_full_image.png",
        tech: ['Wordpress']
    },
];

const techList = []

for (let i = 0; i < posts[0].tech.length; i++) {
    if (i === posts[0].tech.length - 1) {
        techList.push(<li key={i}>{posts[0].tech[i]}</li>);
    } else {
        techList.push(<li key={i}>{posts[0].tech[i]},</li>);
    }
}

console.log(techList.length)

export default function Freelance() {
    if (techList.length === 0) {
        return <div><p>Loading....</p></div>
    } else {
        return (
            <div className="bg-white py-16" id="freelance">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Freelance
                        </h2>
                    </div>
                    <div className="mt-10 flex gap-8 justify-center">
                        {posts.map((post) => (
                            <article
                                key={post.id}
                                className="relative isolate flex flex-col justify-end bg-gray-900 px-8 pb-8 pt-80 w-96 h-full"
                            >
                                <img
                                    src={post.imageUrl}
                                    alt=""
                                    className="absolute inset-0 h-full w-full object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                                <h3 className="mt-3 text-lg z-10 font-semibold leading-6 text-white">
                                    <a href={post.href} target="_blank">
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </a>
                                </h3>
                                <div className="flex gap-2 mt-4 text-sm z-10">
                                    <p className="text-white">Tech Used: </p>
                                    <ul className="text-white flex gap-1">
                                        {techList}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
