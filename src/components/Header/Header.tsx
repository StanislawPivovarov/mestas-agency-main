'use client'

import React, { useState } from "react";
import Image from "next/image";
import { Sling as Hamburger } from 'hamburger-react'
import { useToggle } from 'ahooks'
import { ChakraProvider, DrawerContent, DrawerHeader } from "@chakra-ui/react";

import styles from './styles.module.scss'
import Logo from '@/assets/layout/logo.svg'
import { Drawer } from "antd";


const Header = () => {

 const [state, { toggle }] = useToggle()
 const [color, setColor] = useState<string>("#fff")

 console.log(state)
 console.log(color)

 const pathStyles = state ? { transition: "fill 0.4s cubic-bezier(0, 0, 0, 1) 0s", transitionDelay: " 0.2s" } : { transition: "all 0s cubic-bezier(0, 0, 0, 1) 0s" }

 return (

  <div className={styles.header}>
   <svg className={styles.logo} height="40" viewBox="0 0 1462 876" xmlns="http://www.w3.org/2000/svg">
    <path style={pathStyles} fill={color} d="M0 0H845.589V219H0V0Z" />
    <path style={pathStyles} fill={color} d="M0 0H845.589V219H0V0Z" />
    <path style={pathStyles} fill={color} d="M0 328.5H845.589V547.5H0V328.5Z" />
    <path style={pathStyles} fill={color} d="M0 657H845.589V876H0V657Z" />
    <path style={pathStyles} fill={color} d="M948.324 876V0H1153.79V876H948.324Z" />
    <path style={pathStyles} fill={color} d="M1256.53 488.538V0H1462V488.538H1256.53Z" />
   </svg>

   <div>

    <Hamburger onToggle={() => {
     toggle();
     if (state) {
      setColor("#fff")
     } else (
      setColor("#000")
     )


    }} size={40}
     color={color}
    />
   </div>

   <Drawer
    open={state}
    width={"100%"}
    onClose={toggle}
    closable={false}
   >
   </Drawer>

  </div>

 )
}

export default Header;
