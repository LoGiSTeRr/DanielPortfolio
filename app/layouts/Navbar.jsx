'use client';
import Link from "next/link";
import React from "react";
import Logo from "../components/Logo";
import { useRouter } from "next/navigation";
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from "../components/Icons";

const Navbar = () => {
    const router = useRouter();

    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
            <nav>
                <Link className="relative group mr-4" href="/">Home <span className={`${router.asPath === '/' ? 'w-full' : 'w-0'} h-[1px] group-hover:w-full absolute left-0 -bottom-0.5 inline-block ease duration-300 transition-[width] bg-dark`}>&nbsp;</span></Link>
                <Link className="relative group mx-4" href="/about">About</Link>
                <Link className="relative group mx-4" href="/projects">Projects</Link>
                <Link className="relative group ml-4" href="/articles">Articles</Link>
            </nav>

            <nav className="flex items-center justify-center flex-wrap">
                <Link href="/" target={"_blank"}>
                    <TwitterIcon/>
                </Link>
                <Link href="/" target={"_blank"}>
                    <GithubIcon/>
                </Link>
                <Link href="/" target={"_blank"}>
                    <LinkedInIcon/>
                </Link>
                <Link href="/" target={"_blank"}>
                    <PinterestIcon/>
                </Link>
                <Link href="/" target={"_blank"}>
                    <DribbbleIcon/>
                </Link>
            </nav>

            <div className='absolute left-[50%] top-2 gtranslate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}
export default Navbar