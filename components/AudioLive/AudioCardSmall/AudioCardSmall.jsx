import React, { useState } from 'react';
import { TbPlayerPlay, TbPlayerPause } from 'react-icons/tb';
import Image from 'next/image';

//INTERNAL IMPORT
import Style from './AudioCardSmall.module.css';
import images from '../../../img';
import { LikeProfile } from '@/components/component';


const AudioCardSmall = () => {
  const [play, setPlay] = useState(false);

  const playMusic = () => {
    if(!play){
      setPlay(true);
    }else{
      setPlay(false);
    }
  };

  return (
    <div className= {Style.AudioPlayer}>
      <div className={Style.AudioPlayer_Box}>
        <Image src={images.creatorbackground1} alt='music' width={100} height={100} className={Style.AudioPlayer_Box_Img}/>
        <div className={Style.AudioPlayer_Box_Info}>
          <h4>NFT music #1142</h4>
          <div className={Style.AudioPlayer_Box_Info_Box}>
            { <LikeProfile/> }
            <div className={Style.AudioPlayer_Box_Info_Box_Price}>
              <small>Price</small>
              <p>1.00 ETH</p>
            </div>
          </div>
        </div>
        <div className={Style.AudioPlayer_Box_PlayBtn} onClick ={() => playMusic()}>
          {
            play ? <TbPlayerPause/> : <TbPlayerPlay/>
          }
        </div>
      </div>
    </div>
  )
}

export default AudioCardSmall