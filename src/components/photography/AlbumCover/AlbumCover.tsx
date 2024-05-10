import React from "react"
import styles from './AlbumCover.module.scss'
import Image from "next/image"
import { GoArrowRight } from "react-icons/go";

import annie from '@/assets/Annie_Leibovitz-SF-2-Cropped.jpg'

const AlbumCover = () => {
 return (
  <div className={styles.wrapper}>
   <div className={styles.image_wrapper}>
    <Image className={styles.cover} src={annie} alt="cover" />
   </div>
   <div className={styles.content_wrapper}>
    <div>
     <h1 className={styles.album_name}>Annie Leibowitz</h1>
     <p className={styles.album_description}>
      quasi excepturi blanditiis unde, laborum tenetur quas porro velit ducimus architecto earum molestiae aspernatur eveniet.
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda in suscipit neque nihil sapiente omnis, quidem iure laudantium tempore! Iure tempore accusamus placeat facilis voluptate dolor cum architecto adipisci earum!
     lorem dolor cum architecto adipisci earum! dolor cum architecto adipisci earum!
     </p>
    </div>
    <div className={styles.button_wrapper}>
     <button className={styles.more_button}>
      <p>Watch more</p>
      <GoArrowRight className={styles.arrow} />
     </button>
    </div>
   </div>
  </div>
 )
}

export default AlbumCover
