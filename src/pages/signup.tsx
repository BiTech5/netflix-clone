export const SignUp = () => {
    return (
        <div className="flex justify-center items-center w-full min-h-screen px-4 sm:px-6 mb-16">
            <form className="bg-black/80 w-full max-w-md px-6 sm:px-10 py-8 rounded-md">
                <h1 className="text-white font-bold text-2xl sm:text-3xl text-center mb-6">Sign In</h1>

                <input
                    className="mb-4 text-base sm:text-xl w-full bg-black/50 border border-white/30 rounded-md p-3 text-white placeholder:text-white/70"
                    type="text"
                    placeholder="Email or mobile number"
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="mb-4 text-base sm:text-xl w-full bg-black/50 border border-white/30 rounded-md p-3 text-white placeholder:text-white/70"
                    required
                />

                <button
                    className="text-white bg-[#e50914] text-base sm:text-xl rounded-md w-full py-2 mb-4 hover:bg-red-600 transition"
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