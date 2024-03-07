import React from "react";
import Layout from "../layouts/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'

const FeaturedProject = ({type,title,summary,img,link,github}) => {
    return(
        <article className='w-full p-12 flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl'>
            <Link className='w-1/2 cursor-pointer overflow-hidden rounded-1g' href={link} target="_blank">
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline under underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark'>{summary}</p>

                <div className='mt-2 flex items-center'>
                <Link className="w-10" href={github} target="_blank"><GithubIcon/></Link>
                <Link className= 'ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold' href={link} target="_blank">Visit Project</Link>
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
                    <FeaturedProject
                        title={'Crypto Screener Application'}
                        link={'/'}
                        img={project1}
                        github={'/'}
                        type={'Application'}
                        summary={"A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."}
                    />
                </div>
                <div className=' col-span-6'>
                    
                </div>
                
            </div>
        </Layout>
    </mai>
  )
}
export default page