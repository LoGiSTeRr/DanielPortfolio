'use client';
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../components/Logo";
import { useRouter } from "next/navigation";
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from "../../components/Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "../hooks/useThemeSwitcher";

const CustomLink = ({href, title, className = "",toggle}) => {
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href);
    };

    return(
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}
            <span className={`
            h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            `}>
                &nbsp;
            </span>
        </button>
    )
}

const Navbar = () => {
    const router = useRouter();
    const [mode,setMode] = useThemeSwitcher(0)

    const [isOpen,setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen (!isOpen)
    }

    return (
        <header className='w-full relative px-32 py-8 font-medium flex items-center justify-between text-dark dark:text-light z-10 1g:px-16 md:px-12 sm:px-8'>

            <button onClick={handleClick} className="flex-col justify-center items-center hidden lg:flex">
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-linear h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1.5':''}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-linear h-0.5 w-6 rounded-sm my-1 ${isOpen ? 'opacity-0':'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-linear h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1.5':''}`}></span>
            </button>

            <div className="w-full flex justify-between items-center lg:hidden">
                <nav>
                    <Link className="relative group mr-4" href="/">Home <span className={`${router.asPath === '/' ? 'w-full' : 'w-0'} h-[1px] dark:bg-light group-hover:w-full absolute left-0 -bottom-0.5 inline-block ease duration-300 transition-[width] bg-dark`}>&nbsp;</span></Link>
                    <Link className="relative group mx-4" href="/about">About <span className={`${router.asPath === '/about' ? 'w-full' : 'w-0'} h-[1px] dark:bg-light group-hover:w-full absolute left-0 -bottom-0.5 inline-block ease duration-300 transition-[width] bg-dark`}>&nbsp;</span></Link>
                    <Link className="relative group mx-4" href="/projects">Projects <span className={`${router.asPath === '/projects' ? 'w-full' : 'w-0'} dark:bg-light h-[1px] group-hover:w-full absolute left-0 -bottom-0.5 inline-block ease duration-300 transition-[width] bg-dark`}>&nbsp;</span></Link>
                    <Link className="relative group ml-4" href="/articles">Articles <span className={`${router.asPath === '/articles' ? 'w-full' : 'w-0'} dark:bg-light h-[1px] group-hover:w-full absolute left-0 -bottom-0.5 inline-block ease duration-300 transition-[width] bg-dark`}>&nbsp;</span></Link>
                </nav>

                <nav className="flex items-center justify-center flex-wrap">
                    <motion.a whileTap={{ scale: 0.9 }} whileHover={{ y: -2 }} className="w-6 mr-3" href="https://borodindaniel.com" target={"_blank"}>
                        <TwitterIcon />
                    </motion.a>
                    <motion.a whileTap={{ scale: 0.9 }} whileHover={{ y: -2 }} className="w-6 mx-3" href="https://github.com/LoGiSTeRr" target={"_blank"}>
                        <GithubIcon />
                    </motion.a>
                    <motion.a whileTap={{ scale: 0.9 }} whileHover={{ y: -2 }} className="w-6 mx-3" href='https://www.linkedin.com/in/daniel-borodin/' target={"_blank"}>
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a whileTap={{ scale: 0.9 }} whileHover={{ y: -2 }} className="w-6 mx-3" href="https://borodindaniel.com" target={"_blank"}>
                        <PinterestIcon className={'dark:bg-light dark:rounded-full'} />
                    </motion.a>
                    <motion.a whileTap={{ scale: 0.9 }} whileHover={{ y: -2 }} className="w-6 ml-3" href="https://borodindaniel.com" target={"_blank"}>
                        <DribbbleIcon />
                    </motion.a>

                    <button onClick={()=>setMode (mode === "light" ? "dark" : "light")} className={`ml-3   flex items-center justify-center rounded-full p-1 }`}>
                        {
                            mode==='dark' ?
                            <SunIcon className={"fill-dark"}/> :
                            <MoonIcon className={"fill-dark"}/>
                        }
                    </button>
                </nav>
            </div>

            {
                isOpen ?
                <>
                <motion.div initial={{scale:0,opacity:0,x: "-50%", y: "-50%"}} animate={{scale:1,opacity:1}} className="min-w-[70vw] bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <nav className="flex items-center flex-col justify-center">
                        <CustomLink href="/" title="Home" className="" toggle={handleClick} />
                        <CustomLink href="/about" title="About" className="" toggle={handleClick} />
                        <CustomLink href="/projects" title="Projects" className="" toggle={handleClick} />
                        <CustomLink href="/articles" title="Articles" className="" toggle={handleClick} />
                    </nav>

                    <nav className="flex items-center justify-center flex-wrap mt-2">
                        <motion.a whileTap={{ scale: 0.9 }} whileHover={{ y: -2 }} className="w-6 mr-3 sm:mx-1" href="https://twitter.com" target={"_blank"}>
                            <TwitterIcon />
                        </motion.a>
                        <motion.a whileTap={{ scale: 0.9 }} whileHover={{ y: -2 }} className="w-6 mx-3 sm:mx-1" href="https://twitter.com" target={"_blank"}>
                            <GithubIcon className={'bg-light dark:bg-dark rounded-full'}/>
                        </motion.a>
                        <motion.a whileTap={{ scale: 0.9 }} whileHover={{ y: -2 }} className="w-6 mx-3 sm:mx-1" href='https://twitter.com' target={"_blank"}>
                            <LinkedInIcon />
                        </motion.a>
                        <motion.a whileTap={{ scale: 0.9 }} whileHover={{ y: -2 }} className="w-6 mx-3 sm:mx-1" href="https://twitter.com" target={"_blank"}>
                            <PinterestIcon className={'dark:bg-light dark:rounded-full'} />
                        </motion.a>
                        <motion.a whileTap={{ scale: 0.9 }} whileHover={{ y: -2 }} className="w-6 ml-3 sm:mx-1" href="https://twitter.com" target={"_blank"}>
                            <DribbbleIcon />
                        </motion.a>

                        <button onClick={()=>setMode (mode === "light" ? "dark" : "light")} className={`ml-3 flex bg-light dark:bg-dark items-center justify-center rounded-full p-1 }`}>
                            {
                                mode==='dark' ?
                                <SunIcon className={"fill-dark"}/> :
                                <MoonIcon className={"fill-dark"}/>
                            }
                        </button>
                    </nav>
                </motion.div>
                </> : null
            }

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}
export default Navbar