import React from "react";
import Layout from "../layouts/Layout";
import Link from "next/link";
import Image from "next/image";

import ProfilePicture from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from "../../components/AnimatedText";
import { LinkArrow } from "../../components/Icons";
import Transition from "@/components/Transition";

const MainPage = () => {
  return (
    <>
    <Transition/>
      <Layout className="pt-0 dark:text-light md:pt-16 sm:pt-8">
        <div className="flex items-center justify-between w-full lg:flex-col">
          <div className="w-1/2 md:w-full">
            <Image
              src={ProfilePicture}
              alt="Daniel"
              className="h-auto w-full  lg:hidden md:inline-block md:w-full"
              priority
              sizes="
              (max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw
              "
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
            <AnimatedText
              className="!text-6xl !text-left  xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-2xl"
              text="Turning Vision Into Reality With Code And Design. "
            />
            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
              As a skilled full-stack developer, I am dedicated to turning
              ideas into innovative web applications. Explore my latest
              projects and articles, showcasing my expertise in React.js and
              web development.
            </p>
            <div className="flex items-center self-start mt-2 lg:self-center">
              <Link
                className="flex md:p-2 md:px-4 md:text-base
                items-center dark:border-light bg-dark text-light ease-linear duration-200 p-2.5 px-6 rounded-lg text-1g font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                href="/dummy.pdf"
                target="_blank"
                download={true}
              >
                Resume <LinkArrow className={"w-6 ml-1"} />
              </Link>
              <Link
                className="ml-4 dark:text-light text-lg font-medium capitalize text-dark underline md:text-base"
                target="_blank"
                href="daniel.com"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
export default MainPage