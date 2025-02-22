'use client'

import React from "react";
import {motion} from 'framer-motion';

const quote = {
    initial:{
        opacity:1
    },
    animate:{
        opacity:1,
        transition:{
            delay:0.5,
            staggerChildren: 0.08,
        }
    }
}

const quote2 = {
    initial:{
        opacity:0,
        y:50
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:0.5
        }
    }
}

const AnimatedText = ({text,className = ''}) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0'>
        <motion.h1 variants={quote} initial='initial' animate='animate' className={`inline-block w-full text-dark dark:text-light font-bold capitalize ${className}`}>
            {
                text.split(" ").map((word,index) =>
                <motion.span variants={quote2} key={word+'-'+index} className="inline-block">
                    {word}&nbsp;
                </motion.span>
                )
            }
        </motion.h1>
    </div>
  )
}
export default AnimatedText