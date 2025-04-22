import { Started } from "./started";

export const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content">
            <div className="w-full flex flex-col items-center justify-center px-4 py-8 text-center">
                <p className="mb-4 text-lg">
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                <div className="w-full max-w-xl">
                    <Started />
                </div>
            </div>

            <div className="footer sm:footer-horizontal grid-rows-2 p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover" href="https://github.com/BiTech5">Branding</a>
                    <a className="link link-hover" href="https://github.com/BiTech5">Design</a>
                    <a className="link link-hover" href="https://github.com/BiTech5">Marketing</a>
                    <a className="link link-hover" href="https://github.com/BiTech5">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover" href="https://github.com/BiTech5">About us</a>
                    <a className="link link-hover" href="https://github.com/BiTech5">Contact</a>
                    <a className="link link-hover" href="https://github.com/BiTech5">Jobs</a>
                    <a className="link link-hover" href="https://github.com/BiTech5">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover" href="https://github.com/BiTech5">Terms of use</a>
                    <a className="link link-hover" href="https://github.com/BiTech5">Privacy policy</a>
                    <a className="link link-hover" href="https://github.com/BiTech5">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <a className="link link-hover" href="https://github.com/BiTech5">Twitter</a>
                    <a className="link link-hover" href="https://github.com/BiTech5">Instagram</a>
                    <a className="link link-hover" href="https://github.com/BiTech5">Facebook</a>
                    <a className="link link-hover" href="https://github.com/BiTech5">GitHub</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Explore</h6>
                    <a className="link link-hover" href="https://github.com/BiTech5">Features</a>
                    <a className="link link-hover" href="https://github.com/BiTech5">Enterprise</a>
                    <a className="link link-hover" href="https://github.com/BiTech5">Security</a>
                    <a className="link link-hover" href="https://github.com/BiTech5">Pricing</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Apps</h6>
                    <a className="link link-hover" href="https://github.com/BiTech5">Mac</a>
                    <a className="link link-hover" href="https://github.com/BiTech5">Windows</a>
                    <a className="link link-hover" href="https://github.com/BiTech5">iPhone</a>
                    <a className="link link-hover" href="https://github.com/BiTech5">Android</a>
                </nav>
            </div>
        </footer>
    );
};
