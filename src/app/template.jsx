'use client'

import { motion } from "framer-motion"
import UseScrollProgress from "@/hooks/UseScrollProgress"

const variants = {
    hidden:{ opacity: 0},
    enter:{ opacity: 1}
}
const template = ({children}) => {
    const completion = UseScrollProgress()
  return (
   <>
    <motion.main
    variants={variants}
    initial='hidden'
    animate='enter'
    transition={{type:'linear',delay: 0.2, duration:0.4}}
    >
      {children}
    </motion.main>
    {/* Completion Bar  */}
    <span style={{transform:`translateY(${completion - 100}%)`}} className=" fixed z-50 bg-primary w-1 top-0 right-0 bottom-0
     transition-all duration-700">
    </span>
    {/* <div className=" h-[400px]"></div> */}
   </>
  )
}

export default template
