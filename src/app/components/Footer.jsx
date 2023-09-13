import { EnvelopeIcon, TwitterIcon, GitHubIcon, LinkedInIcon } from "./Icons";

export default function Footer() {
    return (
        <footer className="bg-white mt-24 border-t">
            <div className="mx-auto max-w-7xl px-6 py-16 md:flex items-center justify-center lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2 text-gray-400">
                    <EnvelopeIcon/>
                    <TwitterIcon />
                    <GitHubIcon />
                    <LinkedInIcon />
                </div>
            </div>
        </footer>
    );
}
