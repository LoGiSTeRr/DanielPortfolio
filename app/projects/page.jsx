import React from "react";
import Layout from "../layouts/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";

const FeaturedProject = ({type,title,summary,img,link,github}) => {
    return(
        <article>
            <Link href={link} target="_blank">
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>
            <div>
                <span>{type}</span>
                <Link href={link} target="_blank"><h2>{title}</h2></Link>
                <p>{summary}</p>
                <div>
                <Link href={github} target="_blank"><GithubIcon/></Link>
                <Link href={link} target="_blank">Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const page = () => {
  return (
    <mai className='w-full mb-16 flex flex-col items-center justify-center text-dark'>
        <Layout className="pt-16">
            <AnimatedText className="relative left-7 mb-16 text-[104px]" text={'Imagination Trumps Knowledge!'}/>

            <div className='grid grid-cols-12 gap-24'>
                <div className=' col-span-12'>
                    
                </div>
                <div className=' col-span-6'>
                    <FeaturedProject/>
                </div>
                <div className=' col-span-6'>
                    pr1
                </div>
                <div className=' col-span-12'>
                    pr1
                </div>
                <div className=' col-span-6'>
                    pr1
                </div>
                <div className=' col-span-6'>
                    pr1
                </div>
            </div>
        </Layout>
    </mai>
  )
}
export default page