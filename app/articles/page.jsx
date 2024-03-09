'use client';
import React, { useRef } from "react";
import Layout from "../layouts/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import {motion, useMotionValue} from 'framer-motion';
import article1 from '../../public/images/articles/s.jpg'
import article2 from '../../public/images/articles/c.png'

const FramerImage = motion(Image)

const MovingImg = ({title,img,link}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse (event) {
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10)
    };

    function handleMouseLeave (event) {
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0)
    };

    return(
        <Link onMouseMove={handleMouse} onMouseLeave={handleMouseLeave} href={link} target="_blank">
            <h2 className="capitalize text-xl underline-offset-2 font-semibold hover:underline">{title}</h2>
            <FramerImage initial={{opacity:0}} whileInView={{opacity:1,transition:{duration:0.2}}} style={{x:x, y:y}} ref={imgRef} src={img} alt={title} className="z-10 w-96 h-auto hidden absolute md:!hidden rounded-lg"/>
        </Link>
    )
}

const Article = ({img,date,title,link}) => {
    return(
        <motion.li initial={{y:200}} whileInView={{y:0,transition:{duration:0.5}}} viewport={{once:true}} className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between dark:bg-dark dark:text-light dark:border-light bg-light text-dark first:mt-0 border border-dark border-solid border-r-4 border-b-4
        sm:flex-col
        ">
            <MovingImg title={title} link={link} img={img}/>
            <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">{date}</span>
        </motion.li>
    )
}

const FeaturedArticle = ({img,title,summary,link,time})=> {
    return(
        <li className='relative col-span-1 w-full p-4 dark:bg-dark dark:border-light bg-light border border-solid border-dark rounded-2xl'>
            <div className='absolute top-0 -right-3 dark:bg-light -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark'/>
            <Link className='w-full inline-block cursor-pointer overflow-hidden rounded-lg' href={link} target="_blank">
                <FramerImage 
                sizes="
                    (max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw
                "
                priority
                transition={{duration:0.2}} whileHover={{scale:1.05}} src={img} alt={title} className="w-full h-auto" />
            </Link>
            <Link href={link} target="_blank">
                <h2 className='capitalize dark:text-light text-2xl mt-2 font-bold my-2 hover:underline underline-offset-2 xs:text-lg'>
                    {title}
                </h2>
            </Link>
            <p className="text-sm mb-2 dark:text-light">
                {summary}
            </p>
            <span className='text-primary dark:text-primaryDark font-semibol'>{time}</span>
        </li>
    )
}

const page = () => {
  return (
    <main className='w-full text-dark mb-16 flex flex-col items-center justify-center overflow-hidden'>
        <Layout className="pt-16">
            <AnimatedText className="text-[104px] mb-16 lg:left-0 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" text={'Words Can Change The World! '}/>
            <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                <FeaturedArticle
                    title='Build A Custom Pagination Component In Reactjs From Scratch'
                    summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                    Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                    time='9 min read'
                    link={'/'}
                    img={article1}
                />
                <FeaturedArticle
                    title='Build A Custom Pagination Component In Reactjs From Scratch'
                    summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                    Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                    time='9 min read'
                    link={'/'}
                    img={article1}
                />
            </ul>
            <h2 className="dark:text-light font-bold text-4xl w-full text-center my-16 mt-32">All Articles</h2>
            <ul>
                <Article
                    title={'Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'}
                    date={'jan 10'}
                    img={article2}
                    link={'/'}
                />
                <Article
                    title={'Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'}
                    date={'jan 10'}
                    img={article2}
                    link={'/'}
                />
                <Article
                    title={'Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'}
                    date={'jan 10'}
                    img={article2}
                    link={'/'}
                />
                <Article
                    title={'Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'}
                    date={'jan 10'}
                    img={article2}
                    link={'/'}
                />
                <Article
                    title={'Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'}
                    date={'jan 10'}
                    img={article2}
                    link={'/'}
                />
                <Article
                    title={'Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'}
                    date={'jan 10'}
                    img={article2}
                    link={'/'}
                />
            </ul>
        </Layout>
    </main>
  )
}
export default page