import AnimatedText from "@/components/AnimatedText"
import Head from "next/head"
import React from "react"
import Layout from "../layouts/Layout"

const About = () => {
  return (
    <>
      <main className='flex w-full flex-col items-center justify-center bg-red-400'>
        <Layout className="pt-16">
          <AnimatedText className="text-[100px]" text={'Passion Fuels Purpose! '}/>
        </Layout>
      </main>
    </>
  )
}
export default About