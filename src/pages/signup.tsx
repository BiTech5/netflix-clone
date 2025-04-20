export const SignUp = () => {
    return (
        <div className="flex justify-center items-center w-full h-full mb-16">
            <form className="bg-black/80 w-96 px-10 py-8 rounded-md">
                <h1 className="text-white font-bold text-3xl">Sign In</h1>
                <input className="my-6 text-xl w-full bg-black/50 border-white rounded-md p-3 text-white" type="text" placeholder="Email or mobile number" required /> <br />
                <input type="password" placeholder="Password" className="my-2 text-xl w-full bg-black/50 border-white rounded-md p-3 text-white" required />
                <button className="text-white bg-[#e50914] text-xl rounded-md w-full py-2 my-2" type="submit">Sign In</button>
                <label className="text-white text-center my-3">OR</label>

                <button className="bg-white/30 rounded-md py-2 w-full text-white">Use a Sign-In Code</button>
                <button className="underline rounded-md py-2 w-full text-white">Forgot password?</button>
                <br /><br />
                <label className="flex items-center space-x-2 cursor-pointer text-lg">
                    <input type="checkbox"                         className="w-7 text-blue-600  "/>
                        <span className="text-white select-none">Remember me</span>
                </label><br />
                <label className="text-white">New To Netflix?
                </label><button className="text-white font-bold mx-2 hover:underline" type="submit"> Sign Up Now</button>
                <br />
                <label className="text-sm text-white/70">This page is protected by Google reCAPTCHA to ensure you're not a bot.</label>
                <br />
                <a href="https://policies.google.com/terms" className="text-blue-900 underline text-sm">Learn More.</a>
            </form>
        </div>
    )
}