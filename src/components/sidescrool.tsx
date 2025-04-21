import background from "../assets/images/EKn3yBvU8AM_Dd8.jpg"
import "../styles/global.css"
export const SideScroll = () => {
    const right_to_l = () => {
        const container = document.querySelector(
            ".hide-scrollbar"
        ) as HTMLElement;
        container.scrollBy({ left: -300, behavior: "smooth" });
    }
    const left_to_r = () => {
        const container = document.querySelector(
            ".hide-scrollbar"
        ) as HTMLElement;
        container.scrollBy({ left: 300, behavior: "smooth" });
    }
    return (
        <div className="text-white font-bold py-4 sm:py-6 px-8 sm:px-12">
            <span className="text-4xl">Trending Now</span>

            <div className="relative overflow-hidden my-4">
                <div
                    className="
              flex
              w-full
              h-60
              overflow-x-auto
              overflow-y-hidden
              whitespace-nowrap
              scroll-smooth
              hide-scrollbar    items-center cursor-pointer
            "
                >
                    <button
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 text-2xl hover:bg-black/70"
                        onClick={right_to_l}
                    >
                        {"<"}
                    </button>
                    <button
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 text-2xl hover:bg-black/70"
                        onClick={left_to_r}
                    >
                        {">"}
                    </button>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                        <div
                            key={item}
                            className="
                  bg-center bg-no-repeat
                  h-60 w-36
                  flex-shrink-0
                  rounded-lg
                  transform transition-transform duration-300
                  hover:scale-110
                  mr-4 sm:mr-10
                "
                            style={{ backgroundImage: `url(${background})` }}
                        >
                            <span className="text-white text-lg sm:text-3xl font-bold px-2 py-1">
                                {item}
                            </span>
                        </div>
                    ))}

                </div>
            </div>
        </div>

    )
}