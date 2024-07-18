import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { TbPlayerPlay, TbPlayerPause } from 'react-icons/tb';

//INTERNAL IMPORT
import Style from './AudioCard.module.css';
import images from '../../../img';
import { LikeProfile } from '@/components/component';

const AudioCard = () => {
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);
  
  const likeNft = () => {
    if(!like){
      setLike(true)
    }else{
      setLike(false);
    }
  };

  const playMusic = () => {
    if(!play){
      setPlay(true)
    }else{
      setPlay(false);
    }
  };

  return (
    <div className={Style.AudioCard}>
      <div className={Style.AudioCard_Box}>
        <div className={Style.AudioCard_Box_Like_Time}>
          <div className={Style.AudioCard_Box_Like} onClick={() => likeNft()}>
            {
              like ? (
                <AiFillHeart className={Style.AudioCard_Box_Like_Icon} />
              ) : (
                <AiOutlineHeart className={Style.AudioCard_Box_Like_Icon_Unlike} />
              )
            }
            <span>24</span>
          </div>
          <div className={Style.AudioCard_Box_Time}>
            <div className={Style.AudioCard_Box_Like_Time_Remaining}>
              <small>Remaining time</small>
              <h5> 3h: 15m : 20s</h5>
            </div>
          </div>
        </div>

        <div className={Style.AudioCard_Box_Player}>
          <Image src={images.musiceWave} alt='music' width={200}/>
          <div className={Style.AudioCard_Box_MusicPlayer} onClick={() => playMusic()}>
            {
              play ? (
                <div className={Style.AudioCard_Box_MusicPlayer_Icon}>
                  <TbPlayerPause />
                </div>
              ) : (
                <div className={Style.AudioCard_Box_MusicPlayer_Icon}>
                  <TbPlayerPlay />
                </div>
              )
            }
          </div>
        </div>
        <div className={Style.AudioCard_Box_Details}>
          <div className={Style.AudioCard_Box_Details_Info}>
            <h4>NFT music #1123</h4>
            <div className={Style.AudioCard_Box_Details_Info_Price}>
              <small>Price</small>
              <p>$3,221.33</p>
            </div>
          </div>
          <div className={Style.AudioCard_Box_Details_Info_Stock}>
            <LikeProfile/>
            <small>24 in stock</small>
          </div>
        </div>
        <div className={Style.AudioCard_Box_Img}>
          <Image src={images.creatorbackground10} alt='background' width={500} height={500}></Image>
        </div>
      </div>
    </div>
  )
}

export default AudioCard