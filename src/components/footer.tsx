import { Started } from "./started"
export const Footer = () => {
    return (
        <footer className="bg-black text-white/70  px-12">
            <div className="px-12 py-6">
                <div className="text-white w-full flex flex-col items-center gap-6">

                    <span className="no-underline">
                        Ready to watch? Enter your email to create or restart your membership.
                    </span>
                    <Started />

                </div>
                <a href="https://github.com/BiTech5" target="_blank" rel="noopener noreferrer" className="underline">Questions? Contact us.</a>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-12 underline">
                    <div>
                        <ul>
                            <li className="py-2"><a href="https://github.com/BiTech5" target="_blank" rel="noopener noreferrer">FAQ</a></li>
                            <li className="py-2"><a href="https://github.com/BiTech5" target="_blank" rel="noopener noreferrer">Investor Relations</a></li>
                            <li className="py-2"><a href="https://github.com/BiTech5" target="_blank" rel="noopener noreferrer">Privacy</a></li>
                            <li className="py-2"><a href="https://github.com/BiTech5" target="_blank" rel="noopener noreferrer">Speed Test</a></li>

                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="py-2"><a href="https://github.com/BiTech5" target="_blank" rel="noopener noreferrer">Help Center</a></li>
                            <li className="py-2"><a href="https://github.com/BiTech5" target="_blank" rel="noopener noreferrer">Jobs</a></li>
                            <li className="py-2"><a href="https://github.com/BiTech5" target="_blank" rel="noopener noreferrer">Cookie Preferences</a></li>
                            <li className="py-2"><a href="https://github.com/BiTech5" target="_blank" rel="noopener noreferrer">Legal Notices</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="py-2"><a href="https://github.com/BiTech5" target="_blank" rel="noopener noreferrer">Account</a></li>
                            <li className="py-2"><a href="https://github.com/BiTech5" target="_blank" rel="noopener noreferrer">Ways to Watch</a></li>
                            <li className="py-2"><a href="https://github.com/BiTech5" target="_blank" rel="noopener noreferrer">Corporate Information</a></li>
                            <li className="py-2"><a href="https://github.com/BiTech5" target="_blank" rel="noopener noreferrer">Only on Netflix</a></li>


                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="py-2"><a href="https://github.com/BiTech5" target="_blank" rel="noopener noreferrer">Media Center</a></li>
                            <li className="py-2"><a href="https://github.com/BiTech5" target="_blank" rel="noopener noreferrer">Terms of Use</a></li>
                            <li className="py-2"><a href="https://github.com/BiTech5" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}