import React from "react";
import Layout from "../layouts/Layout";
import Link from "next/link";
import Image from "next/image";

import ProfilePicture from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from "../../components/AnimatedText";
import { LinkArrow } from "../../components/Icons";

const MainPage = () => {
  return (
    <>
      <Layout className="pt-0 dark:text-light">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image
              src={ProfilePicture}
              alt="Daniel"
              className="h-auto w-full"
              priority
              sizes="
              (max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw
              "
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText
              className="!text-6xl !text-left"
              text="Turning Vision Into Reality With Code And Design. "
            />
            <p className="my-4 text-base font-medium">
              As a skilled full-stack developer, I am dedicated to turning
              ideas into innovative web applications. Explore my latest
              projects and articles, showcasing my expertise in React.js and
              web development.
            </p>
            <div className="flex items-center self-start mt-2">
              <Link
                className="flex items-center dark:border-light bg-dark text-light ease-linear duration-200 p-2.5 px-6 rounded-lg text-1g font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                href="/dummy.pdf"
                target="_blank"
                download={true}
              >
                Resume <LinkArrow className={"w-6 ml-1"} />
              </Link>
              <Link
                className="ml-4 dark:text-light text-lg font-medium capitalize text-dark underline"
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