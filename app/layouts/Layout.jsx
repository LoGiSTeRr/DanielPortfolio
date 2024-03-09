import React from "react"

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full p-32 h-full inline-block z-0 dark:bg-dark xl:p-24 1g:p-16 md:p-12 sm:p-8 bg-light ${className}`}>
        {children}
    </div>
  )
}
export default Layout