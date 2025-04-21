import background from "../assets/images/EKn3yBvU8AM_Dd8.jpg"
import { Started } from "../components/started"
import { SideScroll } from "../components/sidescrool"
import { Question } from "../components/questions"
import { Boxes } from "../components/boxes"
export const Main = () => {
    return (
        <main className="px-12">
            <div
                className="relative bg-cover bg-center bg-no-repeat rounded-3xl h-[30rem] md:h-[32rem] lg:h-[36rem] xl:h-[40rem] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="absolute inset-0 bg-black/60 rounded-3xl"></div>

                <div className="relative z-10 text-white flex flex-col gap-4 sm:gap-5 md:gap-6 items-center max-w-3xl w-full">
                    <span className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight">
                        Unlimited movies, TV
                    </span>
                    <span className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
                        shows, and more
                    </span>
                    <span className="text-lg sm:text-xl md:text-2xl">
                        Starts at USD 2.99. Cancel anytime.
                    </span>
                    <span className="text-base sm:text-lg md:text-xl text-center">
                        Ready to watch? Enter your email to create or restart your membership.
                    </span>
                    <Started />
                </div>
            </div>


            <SideScroll />
            <Boxes />
            <Question />
        </main>
    )
}