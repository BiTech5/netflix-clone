import background from "../assets/images/EKn3yBvU8AM_Dd8.jpg"
import { Started } from "../components/started"
export const Main=()=>{
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
               <Started/>
            </div>

        </div>

        <div className="text-white font-bold text-4xl px-12 py-6">
            Trending Now
            <div className="flex py-5 px-8">

                <div className="bg-center bg-no-repeat h-64 w-40 rounded-lg transform transition-transform duration-300 hover:scale-110 mr-10"
                    style={{ backgroundImage:  `url(${background})` }}>
                    <span className="text-white  text-3xl font-bold px-2 py-1">1</span>
                </div>
                <div className="bg-center bg-no-repeat h-64 w-40 rounded-lg transform transition-transform duration-300 hover:scale-110 mr-10"
                    style={{ backgroundImage:  `url(${background})` }}>
                    <span className="text-white  text-3xl font-bold px-2 py-1">2</span>
                </div>
                <div className="bg-center bg-no-repeat h-64 w-40 rounded-lg transform transition-transform duration-300 hover:scale-110 mr-10"
                    style={{ backgroundImage:  `url(${background})` }}>
                    <span className="text-white  text-3xl font-bold px-2 py-1">3</span>
                </div>
                <div className="bg-center bg-no-repeat h-64 w-40 rounded-lg transform transition-transform duration-300 hover:scale-110 mr-10"
                    style={{ backgroundImage:  `url(${background})` }}>
                    <span className="text-white  text-3xl font-bold px-2 py-1">4</span>
                </div>
                <div className="bg-center bg-no-repeat h-64 w-40 rounded-lg transform transition-transform duration-300 hover:scale-110 mr-10"
                    style={{ backgroundImage:  `url(${background})` }}>
                    <span className="text-white  text-3xl font-bold px-2 py-1">5</span>
                </div>
                <div className="bg-center bg-no-repeat h-64 w-40 rounded-lg transform transition-transform duration-300 hover:scale-110 mr-10"
                    style={{ backgroundImage:  `url(${background})` }}>
                    <span className="text-white  text-3xl font-bold px-2 py-1">6</span>
                </div>
            </div>
        </div>
        <div className="text-white font-bold text-4xl px-12 py-6">
            More Reasons to Join
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
                <div className="bg-black/50 w-full max-w-xs p-6 rounded-lg mr-10">
                    <h1 className="text-2xl font-bold mb-2">Enjoy on your TV</h1>
                    <p className="text-sm text-white/70">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                        Blu-ray players, and
                        more.</p>
                    <i className="fa fa-desktop text-red-500 float-right" aria-hidden="true"></i>

                </div>
                <div className="bg-black/50 w-full max-w-xs p-6 rounded-lg mr-10">
                    <h1 className="text-2xl font-bold mb-2">Enjoy on your TV</h1>
                    <p className="text-sm text-white/70">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                        Blu-ray players, and
                        more.</p>
                    <i className="fa fa-arrow-circle-down text-red-500 float-right" aria-hidden="true"></i>

                </div>
                <div className="bg-black/50 w-full max-w-xs p-6 rounded-lg mr-10">
                    <h1 className="text-2xl font-bold mb-2">Enjoy on your TV</h1>
                    <p className="text-sm text-white/70">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                        Blu-ray players, and
                        more.</p>
                        <i className="fa fa-mobile float-right text-red-500" aria-hidden="true"></i>

                </div>
                <div className="bg-black/50 w-full max-w-xs p-6 rounded-lg mr-10">
                    <h1 className="text-2xl font-bold mb-2">Enjoy on your TV</h1>
                    <p className="text-sm text-white/70">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                        Blu-ray players, and
                        more.</p>
                        <i className="fa fa-users float-right text-red-500" aria-hidden="true"></i>

                </div>
            </div>

        </div>
        <div className="text-white font-bold text-4xl px-12 py-6">
            Frequently Asked Questions
            <button
                className="bg-black/50 rounded-2xl my-6 w-full p-4 text-2xl text-left flex justify-between items-center hover:bg-white/20 transition duration-700 ease-in-out">
                <span>What is Netflix?</span>
                <span>+</span>
            </button>
            <button
                className="bg-black/50 rounded-2xl my-6 w-full p-4 text-2xl text-left flex justify-between items-center hover:bg-white/20 transition duration-700 ease-in-out">
                <span>How much does Netflix cost?</span>
                <span>+</span>
            </button>
            <button
                className="bg-black/50 rounded-2xl my-6 w-full p-4 text-2xl text-left flex justify-between items-center hover:bg-white/20 transition duration-700 ease-in-out">
                <span>Where can I watch?</span>
                <span>+</span>
            </button>
            <button
                className="bg-black/50 rounded-2xl my-6 w-full p-4 text-2xl text-left flex justify-between items-center hover:bg-white/20 transition duration-700 ease-in-out">
                <span>How do I cancel?</span>
                <span>+</span>
            </button>
            <button
                className="bg-black/50 rounded-2xl my-6 w-full p-4 text-2xl text-left flex justify-between items-center hover:bg-white/20 transition duration-700 ease-in-out">
                <span>What can I watch on Netflix?</span>
                <span>+</span>
            </button>
            <button
                className="bg-black/50 rounded-2xl my-6 w-full p-4 text-2xl text-left flex justify-between items-center hover:bg-white/20 transition duration-700 ease-in-out">
                <span>Is Netflix good for kids?</span>
                <span>+</span>
            </button>
        </div>
    </main>
    )
}