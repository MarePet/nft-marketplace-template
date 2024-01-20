import React from 'react'
import Image from 'next/image'

//INTERNAL IMPORT
import Style from './Hero.module.css'
import { Button } from '../component'
import images from '../../img'

const Hero = () => {
  return (
    <div className={Style.Hero}>
        <div className={Style.Hero_Box}>
            <div className={Style.Hero_Box_Left}>
                <h1>Discover, Collect and sell NFTs</h1>
                <p>Discover the most outstanding NFTs or create your own and sell or trade them</p>
                <Button btnName='Start your search'/>
            </div>
            <div className={Style.Hero_Box_Right}>
                <Image src={images.hero} alt = "hero_image" />
            </div>
        </div>
    </div>
  )
}

export default Hero