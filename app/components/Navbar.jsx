import Link from "next/link"
import React from "react"
import Logo from "./Logo"

const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav>
            <Link className="relative group" href="/">Home <span className='h-[1px] group-hover:w-full absolute left-0 -bottom-0.5 inline-block w-0 ease duration-300 transition-[width] bg-dark'>&nbsp;</span></Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/articles">Articles</Link>
        </nav>
        
        <nav>
            <Link href="/" target={"_blank"}>T</Link>
            <Link href="/" target={"_blank"}>T</Link>
            <Link href="/" target={"_blank"}>T</Link>
            <Link href="/" target={"_blank"}>T</Link>
            <Link href="/" target={"_blank"}>T</Link>
            <Link href="/" target={"_blank"}>T</Link>
        </nav>

        <div className='absolute left-[50%] top-2 gtranslate-x-[-50%]'>
            <Logo/>
        </div>
    </header>
  )
}
export default Navbar