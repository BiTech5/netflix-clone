export const Boxes =()=>{
    return(
        <div className="text-white font-bold text-4xl px-12 py-6">
            More Reasons to Join
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
            {[
                {
                title: "Enjoy on your TV",
                description: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
                },
                {
                title: "Download your shows",
                description: "Save your favorites easily and always have something to watch.",
                },
                {
                title: "Watch everywhere",
                description: "Stream on your phone, tablet, laptop, and TV without paying more.",
                },
                {
                title: "Create profiles for kids",
                description: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
                }
            ].map((box, index) => (
                <div key={index} className="bg-black/50 w-full max-w-xs p-6 rounded-lg mr-10">
                <h1 className="text-2xl font-bold mb-2">{box.title}</h1>
                <p className="text-sm text-white/70">{box.description}</p>
                </div>
            ))}
            </div>
        </div>
    )
}