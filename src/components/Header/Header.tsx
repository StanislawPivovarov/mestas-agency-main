import React from "react";
import { Row, Col } from 'antd'
import Image from "next/image";
import styles from './Header.module.scss'
import logo from '@/assets/layout/logo.svg'
import { menu } from '@/helpers/menu'
import Navigation from "../Navigation";

const Header = () => {


 return (
  <Row className={styles.wrapper} align={'middle'} justify={'center'}>
   <Col xs={23} md={22}>
    <div className={styles.wrapper_items}>

     <Image className={styles.logo} src={logo} alt={'logo'} />
     <div>
      <Navigation/>
     </div>
    </div>
   </Col>
  </Row>
 )
}

export default Header;
