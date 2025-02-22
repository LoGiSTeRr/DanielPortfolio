import React, { useRef } from "react";
import { motion,useScroll } from "framer-motion";
import LiIcon from "@/components/LiIcon";

const Details = ({position,company,companyLink,time,address,work}) => {
    const ref = useRef(null);
    return(
        <li ref={ref} className=' my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-4/5'>
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.50,type:'spring'}}>
                <h3 className="font-bold capitalize text-2xl sm:text-xl xs:text-lg">{position}&nbsp; <a className='text-primary dark:text-primaryDark capitalize' target="_blank" href={companyLink}>@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className= 'font-medium w-full md:text-sm'>{work}</p>
            </motion.div>
        </li>
    )
}

const Experince = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start end","center start"]
    })

  return (
    <div className="my-64">
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Experience
        </h2>
        <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
            <motion.div style={{scaleY:scrollYProgress}} className="absolute left-[34px] top-1 dark:bg-light w-[4px] h-full bg-dark origin-top
            md:w-[2px] md:left-[30px] xs:left-[20px]
            "/>
            <ul className="w-full flex flex-col items-start justify-between ml-4 xl:ml-2">
                <Details
                    position={'IT Teacher'} company={'STEP IT Academy'}
                    time={'2022-Present'}  address={'Baku'}
                    work={"Teaching the following courses: Web development Robotics Blender Python IT Basics"}
                />
                <Details
                    position={'Software Engineer'} company={'Freelance'}
                    time={'2020-Present'}  address={'Remote'}
                    work={"Worked on creating Desktop Applications on .NET technology, such as self-written IDE, Maze generator, Messenger"}
                />
                <Details
                    position={'Web developer'} company={'Start-Up'}
                    time={'2019-2021'}  address={'Baku'}
                    work={"Used ASP.NET to develop well-optimized APIs with well-written documentations"}
                />
            </ul>
        </div>
    </div>
  )
}
export default Experince