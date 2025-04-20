export const Footer = () => {
    return (
        <footer className="bg-black text-white/70  px-12">
            <div className="px-12 py-6">
                <div className="text-white w-full flex flex-col items-center gap-6">

                    <span className="no-underline">
                        Ready to watch? Enter your email to create or restart your membership.
                    </span>
                    <div className="grid grid-rows-2 gap-6 md:grid-cols-2">
                        <input type="email"
                            className="bg-gray-700/90 placeholder-gray300 rounded-full text-2xl px-6 py-2 outline-white text-white placeholder:text-sm "
                            placeholder="Email address" />
                        <button
                            className="bg-[#e50914] px-6 py-2 text-2xl font-bold rounded-full whitespace-nowrap hover:bg-red-600 w-fit">Get
                            Started {'>'} </button>
                    </div>
                </div>
                <a href="www.ggogle.com" className="underline">Questions? Contact us.</a>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-12 underline">
                    <div>
                        <ul>
                            <li className="py-2"><a href="www.ggogle.com">FAQ</a></li>
                            <li className="py-2"><a href="www.ggogle.com">Investor Relations</a></li>
                            <li className="py-2"><a href="www.ggogle.com">Privacy</a></li>
                            <li className="py-2"><a href="www.ggogle.com">Speed Test</a></li>

                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="py-2"><a href="www.ggogle.com">Help Center</a></li>
                            <li className="py-2"><a href="www.ggogle.com">Jobs</a></li>
                            <li className="py-2"><a href="www.ggogle.com">Cookie Preferences</a></li>
                            <li className="py-2"><a href="www.ggogle.com">Legal Notices</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="py-2"><a href="www.ggogle.com">Account</a></li>
                            <li className="py-2"><a href="www.ggogle.com">Ways to Watch</a></li>
                            <li className="py-2"><a href="www.ggogle.com">Corporate Information</a></li>
                            <li className="py-2"><a href="www.ggogle.com">Only on Netflix</a></li>


                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="py-2"><a href="www.ggogle.com">Media Center</a></li>
                            <li className="py-2"><a href="www.ggogle.com">Terms of Use</a></li>
                            <li className="py-2"><a href="www.ggogle.com">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}