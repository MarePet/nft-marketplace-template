import React from 'react'
import Image from 'next/image'

//INTERNAL IMPORT
import Style from './Banner.module.css';

const Banner = ({bannerImage}) => {
  return (
    <div className={Style.Banner}>
        <div className={Style.Banner_Img}>
            <Image src={bannerImage} alt='background' width={1900} height={300}></Image>
        </div>
        <div className={Style.Banner_Img_Mobile}>
            <Image src={bannerImage}  alt='background' width={1600} height={900}></Image>
        </div>
    </div>
  )
}

export default Banner