"use client"

import React from "react";
import { menu } from '@/helpers/menu'
import TransitionLink from "../TransitionLink";

const Navigation = () => {
 return(
  <div>
   {
    menu.map((item) => {
     return(
      <TransitionLink label={item.name} key={item.id} href={item.slug}/>
     )
    })
   }
  </div>
 )
}

export default Navigation;
