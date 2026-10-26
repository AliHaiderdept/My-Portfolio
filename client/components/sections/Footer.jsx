import { LuGithub } from "react-icons/lu";
import { CgMail } from "react-icons/cg";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { TbBrandFacebook } from "react-icons/tb";
export default function Footer() {
    return (
        <footer className="border-t border-white/10 px-6 pb-8 pt-16 md:px-12 md:pt-24">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(180px,0.6fr)_minmax(180px,0.6fr)] md:gap-8">
                    <div className="max-w-xl">
                        <p className="font-geist-mono text-xs uppercase tracking-[0.28em] text-neutral-500">
                            Let&apos;s make something meaningful
                        </p>
                        <h2 className="mt-5 font-archivo-black text-5xl uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-7xl">
                            Ali Haider
                        </h2>
                        <p className="mt-6 max-w-md text-sm leading-7 text-neutral-400 font-geist-mono">
                            Full-stack developer and ML engineer building thoughtful digital
                            experiences from Lahore, Pakistan.
                        </p>
                    </div>

                    <nav aria-label="Footer navigation">
                        <p className="font-geist-mono text-xs uppercase tracking-[0.22em] text-neutral-500">
                            Explore
                        </p>
                        <div className="mt-5 flex flex-col items-start gap-3 text-sm text-neutral-300 font-geist-mono">
                            <a className="transition-colors hover:text-white" href="#home">Home</a>
                            <a className="transition-colors hover:text-white" href="#about">About</a>
                            <a className="transition-colors hover:text-white" href="#projects">Projects</a>
                            <a className="transition-colors hover:text-white" href="#skills">Skills</a>
                            <a className="transition-colors hover:text-white" href="#contact">Contact</a>
                        </div>
                    </nav>

                    <div>
                        <p className="font-geist-mono text-xs uppercase tracking-[0.22em] text-neutral-500">
                            Connect
                        </p>
                        <div className="mt-5 flex flex-col items-start gap-3 text-sm text-neutral-300">
                            <a className="transition-colors border border-white p-3 hover:border-neutral-400 hover:text-white" href="mailto:hello@alihaidermillinium.dev">
                                <CgMail />
                            </a>
                            <a className="transition-colors border border-white p-3 hover:border-neutral-400 hover:text-white" href="https://github.com/AliHaiderdept" target="_blank" rel="noreferrer">
                                <LuGithub />
                            </a>
                            <a className="transition-colors border border-white p-3 hover:border-neutral-400 hover:text-white" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                <PiLinkedinLogoLight />
                            </a>
                            <a className="transition-colors border border-white p-3 hover:border-neutral-400 hover:text-white" href="https://www.facebook.com/alihaiderofficial952" target="_blank" rel="noreferrer">
                               <TbBrandFacebook /> 
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-5 font-geist-mono text-[10px] uppercase tracking-[0.18em] text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Ali Haider</p>
                    <a className="transition-colors hover:text-neutral-300" href="#home">Back to top ↑</a>
                </div>
            </div>
        </footer>
    );
}