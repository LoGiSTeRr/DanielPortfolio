"use client"

import Link from "next/link"
import React from "react"
import {motion} from 'framer-motion'

const MotionLink = motion (Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center  border-2 border-solid border-transparent rounded-full mt-2 dark:border-light'>
      
            <MotionLink whileHover={{backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],transition:{duration:1,repeat:Infinity}}} href={'/'} className="h-16 w-16 • bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold">
                BD
            </MotionLink>

    </div>
  )
}
export default Logo