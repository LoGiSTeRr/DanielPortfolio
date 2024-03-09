import React from "react";
import { motion,useScroll } from "framer-motion";

const LiIcon = ({reference}) => {
    const {scrollYProgress} = useScroll({
        target:reference,
        offset:["center end","center center"]
    })
    return (
        <figure className=' absolute left-0 stroke-dark dark:stroke-light'>
            <svg className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[43px] xs:h-[47px]" width={'75'} height={'75'} viewBox="0 0 100 100">
                <circle cx='75' r={20} cy='50' className='dark:stroke-primaryDark stroke-primary stroke-1 fill-none'/>
                <motion.circle style={{pathLength:scrollYProgress}} cx='75' r={20} cy='50' className='dark:fill-dark stroke-[5px] fill-light'/>
                <circle cx='75' r={10} cy='50' className=' animate-pulse stroke-1 fill-primary dark:fill-primaryDark'/>
            </svg>
        </figure>
    )
}
export default LiIcon