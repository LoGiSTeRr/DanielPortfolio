import { CircularText } from "@/components/Icons";
import React from "react";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className='fixed md:absolute left-4 bottom-4 flex items-center justifyfcenter overflow-hidden md:right-[0%] md:left-auto md:top-0 md:bottom-auto'>
      <div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
        <CircularText className={'fill-black animate-spin-slow dark:fill-light'} />
        <Link href="mailto:abcd@gmail.com" className='flex font-semibold dark:border-light ease-linear duration-200 hover:bg-light hover:text-dark items-center justify-center absolute 1eft-1/2 top-1/2 -translate-x-0 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark h-20 w-20 rounded-full md:w-12 md:h-12 md:text-[10px]'>
          Hire Me
        </Link>
      </div>
    </div>
  )
}
export default HireMe