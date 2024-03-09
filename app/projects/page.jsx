'use client';

import React from "react";
import Layout from "../layouts/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg';
import { motion } from "framer-motion";
import Transition from "@/components/Transition";

const FramerImage = motion(Image)

const FeaturedProject = ({type,title,summary,img,link,github}) => {
    return(
        <article className='lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        dark:border-light  dark:bg-dark rounded-br-3xl relative w-full p-12 flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl'>
            <div className='absolute dark:bg-light top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
            <Link className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full' href={link} target="_blank">
                <FramerImage
                sizes="
                (max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw
                "
                priority
                transition={{duration:0.2}} whileHover={{scale:1.05}} src={img} alt={title} className="w-full h-auto" />
            </Link>
            <div className='w-1/2 rounded-br-3xl flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline under underline-offset-2'>
                    <h2 className='my-2 w-full dark:text-light text-left text-4xl font-bold sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 dark:text-light font-medium text-dark sm:text-sm'>{summary}</p>

                <div className='mt-2 flex items-center'>
                <Link className="w-10 dark:bg-light dark:rounded-full" href={github} target="_blank"><GithubIcon/></Link>
                <Link className= 'ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:text-dark dark:bg-white dark:border-light sm:px-4 sm:text-base' href={link} target="_blank">Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({type,title,img,link,github}) => {
    return(
        <article className='dark:border-light dark:bg-dark rounded-br-3xl w-full flex-col p-6 relative flex items-center justify-center rounded-2xl border border-solid border-dark bg-light shadow-2xl xs:p-4'>
            <div className='absolute dark:bg-light top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark  md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
            <Link className='w-full cursor-pointer overflow-hidden rounded-1g' href={link} target="_blank">
                <FramerImage transition={{duration:0.2}} whileHover={{scale:1.05}} src={img} alt={title} className="w-full h-auto" />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline under underline-offset-2'>
                    <h2 className='my-2 w-full dark:text-white text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>

                <div className='mt-2 flex items-center justify-between w-full'>
                    <Link className='dark:text-dark dark:bg-white dark:border-light rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold md:text-base' href={link} target="_blank">Visit</Link>
                    <Link className="w-8 md:w-6 dark:bg-light dark:rounded-full" href={github} target="_blank"><GithubIcon/></Link>
                </div>
            </div>
        </article>
    )
}

const page = () => {
  return (
    <>
    <Transition/>
    <main className='w-full mb-16 flex flex-col items-center justify-center text-dark'>
        <Layout className="pt-16">
            <AnimatedText className="relative left-7 mb-16 text-[104px] lg:left-0 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" text={'Imagination Trumps Knowledge!'}/>

            <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                <div className='col-span-12'>
                    <FeaturedProject
                        title={'Crypto Screener Application'}
                        link={'/'}
                        img={project1}
                        github={'/'}
                        type={'Application'}
                        summary={"A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."}
                    />
                </div>
                <div className='sm:col-span-12 col-span-6'>
                    <Project
                        title={'Crypto Screener Application'}
                        link={'/'}
                        img={project1}
                        github={'/'}
                        type={'Application'}
                        summary={"A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."}
                    />
                </div>
                <div className='sm:col-span-12 col-span-6'>
                    <Project
                        title={'Crypto Screener Application'}
                        link={'/'}
                        img={project1}
                        github={'/'}
                        type={'Application'}
                        summary={"A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."}
                    />
                </div>
                <div className=' col-span-12'>
                    <FeaturedProject
                        title={'Crypto Screener Application'}
                        link={'/'}
                        img={project1}
                        github={'/'}
                        type={'Application'}
                        summary={"A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."}
                    />
                </div>
                <div className='sm:col-span-12 col-span-6'>
                    <Project
                        title={'Crypto Screener Application'}
                        link={'/'}
                        img={project1}
                        github={'/'}
                        type={'Application'}
                        summary={"A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."}
                    />
                </div>
                <div className='sm:col-span-12 col-span-6'>
                    <Project
                        title={'Crypto Screener Application'}
                        link={'/'}
                        img={project1}
                        github={'/'}
                        type={'Application'}
                        summary={"A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."}
                    />
                </div>
            </div>
        </Layout>
    </main>
    </>
  )
}
export default page