export default () => {

    const team = [
        {
            avatar: "https://randomuser.me/api/portraits/women/26.jpg",
            name: "Ani kingsetha",
            title: "Product designer",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/10.jpg",
            name: "Mathan",
            title: "Software engineer",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Keerthana",
            title: "Full stack engineer",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/9.jpg",
            name: "Ponraj",
            title: "Head of designers",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/47.jpg",
            name: "Srinath",
            title: "Product designer",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/51.jpg",
            name: "Nagarjun",
            title: "Product manager",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/44.jpg",
            name: "Nandha Kumaran",
            title: "DevOp engineer",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            name: "Shalini",
            title: "Brand designer",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/26.jpg",
            name: "Velan",
            title: "Product designer",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/10.jpg",
            name: "Ganapathy",
            title: "Software engineer",
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Supraja",
            title: "Full stack engineer",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/9.jpg",
            name: "Gokul",
            title: "Head of designers",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Shakeel",
            title: "Product designer",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/51.jpg",
            name: "Aravind",
            title: "Product manager",
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/44.jpg",
            name: "Prabhakaran",
            title: "DevOp engineer",
        },
    ]

    return (
        <section className="py-14" id="team">
            <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                <div className="max-w-xl mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Meet our team
                    </h3>
                    <p className="text-gray-600 mt-3">
                        Our product development team is a dynamic group of innovators 
                        dedicated to transforming visionary ideas into cutting-edge solutions.
                         With a blend of expertise and creativity, we drive progress and deliver
                          exceptional results.                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {team.map((item, idx) => (
                            <li key={idx}>
                                <div className="w-20 h-20 mx-auto">
                                    <img
                                        src={item.avatar}
                                        className="w-full h-full rounded-full"
                                        alt=""
                                    />
                                </div>
                                <div className="mt-2">
                                    <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                                    <p className="text-indigo-600">{item.title}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
