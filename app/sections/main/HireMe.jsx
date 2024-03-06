import { CircularText } from "@/app/components/Icons";
import React from "react";

const HireMe = () => {
    return (
        <div className='fixed left-4 bottom-4 flex items-center justifyfcenter overflow-hidden'>
          <div className='w-48 h-auto flex items-center justify-center relative'>
            <CircularText className={'fill-black animate-spin-slow'}/>
          </div>
        </div>
    )
}
export default HireMe