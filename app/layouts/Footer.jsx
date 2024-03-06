import React from "react"
import Layout from "./Layout"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid font-medium text-lg border-dark text-dark">
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
            <div> 
                Build with <span className='text-primary text-2x1 px-1'> &#9825; </span> by &nbsp; <Link target={"_blank"} href="https://devdreaming.com" className='underline underline-offset-2'>CodeBucks</Link>
            </div>
            <Link href="https://devdreaming.com" target={"_blank"} className="underline underline-offset-2">Say Hello</Link>
        </Layout>
    </footer>
  )
}
export default Footer