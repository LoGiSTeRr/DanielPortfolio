import React from "react";
import {motion} from 'framer-motion'

const Skill = ({name,x,y}) => {
    return(
        <motion.div initial={{x:0,y:0}} whileInView={{x:x,y:y,transition:{duration: 1.5}}} whileHover={{scale:1.05}} className='p-8 cursor-pointer shadow-dark flex items-center justify-center rounded-full dark:text-dark dark:bg-light font-semibold bg-dark text-light absolute px-6 py-3
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
        xs:text-dark xs:dark:text-light xs:font-bold
        
        '>
            {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full dark:bg-circularDark bg-circularLight
        lg:h-[80vh] sm:h-[60vh] xs:h-[44vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg
        md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm
        '>
            <motion.div whileHover={{scale:1.05}} className='p-8 cursor-pointer shadow-dark flex items-center justify-center rounded-full font-semibold dark:bg-light dark:text-dark bg-dark text-light
            lg:p-6 md:p-4 xs:text-xs xs:p-2
            '>
                Web
            </motion.div>
            <Skill name={'CSS'} x="-5vw" y="-10vw"/>
            <Skill name={'HTML'} x="-27vw" y="2vw"/>
            <Skill name={'React.js'} x="2vw" y="6vw"/>
            <Skill name={'Next.js'} x="0vw" y="12vw"/>
            <Skill name={'Tailwindcss'} x="-20vw" y="-15vw"/>
            <Skill name={'Blender'} x="32vw" y="-5vw"/>
            <Skill name={'Spline'} x="0vw" y="-20vw"/>
            <Skill name={'Daun'} x="-25vw" y="18vw"/>
            <Skill name={'Daun'} x="18vw" y="18vw"/>
        </div>
    </>
  )
}
export default Skills