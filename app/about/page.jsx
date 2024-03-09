'use client';

import AnimatedText from "@/components/AnimatedText"
import Head from "next/head"
import React,{useEffect, useRef} from "react"
import Layout from "../layouts/Layout"
import Image from "next/image";
import profile from '../../public/images/profile/developer-pic-2.jpg'
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "./Skills";
import Experince from "./Experince";

const AnimatedNumbers = ({value}) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue,{duration:3000});
  const isInView = useInView(ref,{once:true});

  useEffect(()=>{
    if(isInView){
      motionValue.set(value);
    }
  },[isInView,value,motionValue])

  useEffect(()=>{
    springValue.on('change',(latest)=>{
      if(ref.current && latest.toFixed(0) <= value){
        ref.current.textContent = latest.toFixed(0)
      }
    })
  },[springValue,value])

  return <span ref={ref}></span>
}

const About = () => {
  return (
    <>
      <main className='flex w-full flex-col items-center justify-center dark:text-light text-dark'>
        <Layout className="pt-16 ">
          <AnimatedText className="relative left-7 mb-16 text-[104px]" text={'Passion Fuels Purpose! '}/>
          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light'>Biography</h2>
              <p className="font-medium">
                Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
                and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
                new and innovative ways to bring my clients' visions to life.
              </p>
              <p className="my-4 font-medium">
                I believe that design is about more than just making things look pretty – it's about solving problems and 
                creating intuitive, enjoyable experiences for users. 
              </p>
              <p className="font-medium">
                Whether I'm working on a website, mobile app, or 
                other digital product, I bring my commitment to design excellence and user-centered thinking to 
                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
              </p>
            </div>
            <div className='dark:bg-dark dark:border-light col-span-3 relative h-max rounded-2xl border-2 border-solid bg-light p-8 border-dark'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] dark:bg-light bg-dark'/>
              <Image alt="profile" src={profile} className="w-full k h-auto rounded-2xl" 
              priority
              sizes="
              (max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw
              "/>
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between'>
              <div className= 'flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  +<AnimatedNumbers value={50}/>
                </span>
                <h2 className='text-xl font-medium dark:text-light capitalize text-dark/75'>satisfied clients</h2>
              </div>
              <div className= 'flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  +<AnimatedNumbers value={40}/>
                </span>
                <h2 className='text-xl font-medium dark:text-light capitalize text-dark/75'>projects completed</h2>
              </div>
              <div className= 'flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  +<AnimatedNumbers value={4}/>
                </span>
                <h2 className='text-xl dark:text-light font-medium capitalize text-dark/75'>years of experience</h2>
              </div>
            </div>
          </div>

          <Skills/>
          <Experince/>
        </Layout>
      </main>
    </>
  )
}
export default About