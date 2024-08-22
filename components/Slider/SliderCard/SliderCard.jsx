import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';

//INTERNAL IMPORT
import Style from './SliderCard.module.css';
import { LikeProfile } from '@/components/component';

export const SliderCard = ({el,i}) => {
  return (
  <motion.div className={Style.SliderCard}>
    <div className={Style.SliderCard_Box}>
      <motion.div className={Style.SliderCard_Box_Img}>
        <Image src={el.background} alt='slider profile' className={Style.SliderCard_Box_Img_Img}/>
      </motion.div>
      <div className={Style.SliderCard_Box_Title}>
        <p>NFT Video #1245</p>
        <div className={Style.SliderCard_Box_Title_Like}>
          <LikeProfile/>
          <small>1 of 100</small>
        </div>
      </div>
      <div className={Style.SliderCard_Box_Price}>
        <div className={Style.SliderCard_Box_Price_Box}>
          <small>Current bid</small>
          <p>1.000 ETH</p>
        </div>
        <div className={Style.SliderCard_Box_Price_Time}>
          <small>Remaining time</small>
          <p>3h: 15min: 20s</p>
        </div>
      </div>
    </div>
  </motion.div>
  )
}
