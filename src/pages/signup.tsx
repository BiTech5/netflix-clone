export const SignUp = () => {
    return (
        <div className="flex justify-center items-center w-full min-h-screen px-4 sm:px-6 mb-16">
            <form className="bg-black/80 w-full max-w-md px-6 sm:px-10 py-8 rounded-md">
                <h1 className="text-white font-bold text-2xl sm:text-3xl text-center mb-6">Sign In</h1>

                <label className="input validator mb-4 sm:text-xl w-full bg-black/50 border border-white/30 rounded-md text-white">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                    </svg>
                    <input type="email" placeholder="mail@site.com" required />
                </label>
                <div className="validator-hint hidden">Enter valid email address</div>



                <label className="input validator mb-4 sm:text-xl w-full bg-black/50 border border-white/30 rounded-md text-white">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path
                                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                            ></path>
                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </g>
                    </svg>
                    <input
                        type="password"
                        required
                        placeholder="Password"
                        minLength={8}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                    />
                </label>
                <p className="validator-hint hidden">
                    Must be more than 8 characters, including
                    <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                </p>

                <button
                    className="btn border-none text-white bg-myredd text-base sm:text-xl rounded-md w-full py-2 mb-4 hover:bg-red-600 transition"
                    type="submit"
                >
                    Sign In
                </button>

                <div className="text-white text-center my-2">OR</div>

                <button className="bg-white/20 rounded-md py-2 w-full text-white mb-3 hover:bg-white/30 transition">
                    Use a Sign-In Code
                </button>
                <button className="underline rounded-md py-2 w-full text-white mb-4 hover:text-gray-300 transition">
                    Forgot password?
                </button>

                <label className="flex items-center space-x-2 text-sm sm:text-base mb-4">
                    <input type="checkbox" className="w-5 h-5 accent-red-600" />
                    <span className="text-white select-none">Remember me</span>
                </label>

                <div className="text-white text-sm sm:text-base mb-4">
                    New to Netflix?
                    <button
                        type="button"
                        className="text-white font-bold ml-1 hover:underline"
                    >
                        Sign Up Now
                    </button>
                </div>

                <p className="text-sm text-white/60">
                    This page is protected by Google reCAPTCHA to ensure you're not a bot.
                </p>
                <a
                    href="https://policies.google.com/terms"
                    className="text-blue-400 underline text-sm hover:text-blue-500 transition"
                >
                    Learn More.
                </a>
            </form>
        </div>

    )
}