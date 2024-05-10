"use client"

import { animatePageIn } from "@/helpers/animations";
import { useEffect } from "react";

const Template = ({children}: {children: React.ReactNode}) => {

useEffect(() => {
 animatePageIn()
}, [])

 return(
  <div>
   <div style={{width: "100%", height:"100vh", background: "#000", position: "fixed"}} id="banner-1">

   </div>

   {children}
  </div>
 )
}

export default Template;
