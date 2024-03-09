'use client';
import React, { Component } from "react"
import { AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"

const Layout = ({children, className=""}) => {
  const router = useRouter()
  return (
    <div className={`w-full p-32 h-full inline-block z-0 dark:bg-dark xl:p-24 1g:p-16 md:p-12 sm:p-8 bg-light ${className}`}>
      <AnimatePresence mode="wait" key={router.asPath}>
          {children}
      </AnimatePresence>
    </div>
  )
}
export default Layout