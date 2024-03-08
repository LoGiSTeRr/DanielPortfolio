import React from "react"

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full p-32 h-full inline-block z-0 dark:bg-dark bg-light ${className}`}>
        {children}
    </div>
  )
}
export default Layout