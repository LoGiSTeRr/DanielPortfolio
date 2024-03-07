import React from "react";
import {motion} from 'framer-motion'

const Skill = ({name,x,y}) => {
    return(
        <motion.div transition={ {duration: 1.5}} initial={{x:0,y:0}} whileInView={{x:x,y:y}} whileHover={{scale:1.05}} className='p-8 cursor-pointer shadow-dark flex items-center justify-center rounded-full font-semibold bg-dark text-light absolute px-6 py-3'>
            {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
            <motion.div whileHover={{scale:1.05}} className='p-8 cursor-pointer shadow-dark flex items-center justify-center rounded-full font-semibold bg-dark text-light'>
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