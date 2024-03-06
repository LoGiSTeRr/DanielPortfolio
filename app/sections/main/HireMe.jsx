import { CircularText } from "@/app/components/Icons";
import React from "react";
import Link from "next/link";

const HireMe = () => {
    return (
        <div className='fixed left-4 bottom-4 flex items-center justifyfcenter overflow-hidden'>
          <div className='w-48 h-auto flex items-center justify-center relative'>
            <CircularText className={'fill-black animate-spin-slow'}/>
            <Link href="mailto:abcd@gmail.com" className='flex items-center justify-center absolute 1eft-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark h-20 w-20 rounded-full'>
              Hire Me
            </Link>
          </div>
        </div>
    )
}
export default HireMe