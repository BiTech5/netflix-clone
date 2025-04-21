import background from "../assets/images/EKn3yBvU8AM_Dd8.jpg"
import { Started } from "../components/started"
import { SideScroll } from "../components/sidescrool"
import { Question } from "../components/questions"
import { Boxes } from "../components/boxes"
export const Main = () => {
    return (
        <main className="px-12">
            <div className="relative bg-cover bg-center bg-no-repeat rounded-3xl h-[30rem] flex flex-col items-center justify-center text-wrap"
                style={{ backgroundImage: `url(${background})` }}>

                <div className="absolute inset-0 bg-black/60 rounded-3xl h-[30rem]"></div>

                <div className="relative z-10 text-white flex flex-col gap-6 items-center">
                    <span className="font-bold text-6xl">
                        Unlimited movies, TV
                    </span>
                    <span className="font-bold text-5xl">
                        shows, and more
                    </span>
                    <span className="text-2xl">
                        Starts at USD 2.99. Cancel anytime.
                    </span>
                    <span>
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