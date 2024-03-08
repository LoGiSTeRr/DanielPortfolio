'use client';

import React from "react";
import Layout from "../layouts/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import {motion} from 'framer-motion';

import article1 from '../../public/images/articles/s.jpg'

const FramerImage = motion(Image)

const FeaturedArticle = ({img,title,summary,link,time})=> {
    return(
        <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl'>
            <Link className='w-full inline-block cursor-pointer overflow-hidden rounded-lg' href={link} target="_blank">
                <FramerImage transition={{duration:0.2}} whileHover={{scale:1.05}} src={img} alt={title} className="w-full h-auto" />
            </Link>
            <Link href={link} target="_blank">
                <h2 className='capitalize text-2xl font-bold my-2 hover:underline underline-offset-2'>
                    {title}
                </h2>
            </Link>
            <p className="text-sm mb-2">
                {summary}
            </p>
            <span className='text-primary font-semibol'>{time}</span>
        </li>
    )
}

const page = () => {
  return (
    <main className='w-full text-dark mb-16 flex flex-col items-center justify-center overflow-hidden'>
        <Layout className="pt-16">
            <AnimatedText className="text-[104px] mb-16" text={'Words Can Change The World! '}/>
            <ul className='grid grid-cols-2 gap-16'>
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
                <li>
                    fa-3
                </li>
            </ul>
        </Layout>
    </main>
  )
}
export default page