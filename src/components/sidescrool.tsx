import background from "../assets/images/EKn3yBvU8AM_Dd8.jpg"

export const SideScroll = () => {
    return (
        <div className="text-white font-bold py-4 sm:py-6 px-8 sm:px-12 overflow-hidden">
            <span className="text-4xl">
                Trending Now
            </span>
            <div className="flex  w-full h-full overflow-x-scroll  whitespace-nowrap scroll-smooth my-4 overflow-y-hidden">

                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div
                        key={item}
                        className="bg-center bg-no-repeat h-60 w-36 flex-shrink-0 
                 rounded-lg transform transition-transform duration-300 
                 hover:scale-110 mr-4 sm:mr-10 z-10"
                        style={{ backgroundImage: `url(${background})` }}
                    >
                        <span className="text-white text-lg sm:text-3xl font-bold px-2 py-1 ">{item}</span>
                    </div>
                ))}
            </div>
        </div>

    )
}