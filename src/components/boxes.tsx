export const Boxes = () => {
    return (
        <div className="text-white font-bold text-3xl sm:text-4xl px-4 sm:px-8 md:px-12 py-6">
            More Reasons to Join
            <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {[
                    {
                        title: "Enjoy on your TV",
                        description:
                            "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
                    },
                    {
                        title: "Download your shows",
                        description:
                            "Save your favorites easily and always have something to watch.",
                    },
                    {
                        title: "Watch everywhere",
                        description:
                            "Stream on your phone, tablet, laptop, and TV without paying more.",
                    },
                    {
                        title: "Create profiles for kids",
                        description:
                            "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
                    },
                ].map((box, index) => (
                    <div
                        key={index}
                        className="bg-black/50 w-full p-6 rounded-lg shadow-lg hover:bg-black/60 transition duration-300"
                    >
                        <h1 className="text-xl md:text-2xl font-bold mb-2">{box.title}</h1>
                        <p className="text-sm md:text-base text-white/70">{box.description}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}