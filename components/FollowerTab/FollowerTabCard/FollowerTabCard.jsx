import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import { MdVerified } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';

//INTERNAL IMPORT
import Style from './FollowerTabCard.module.css';
import images from '../../../img';


const FollowerTabCard = ({ i, el }) => {
  const [following, setFollowing] = useState(false);
  const followMe = () => {
    if (!following) {
      setFollowing(true);
    } else {
      setFollowing(false);
    }
  }
  return (
    <div className={Style.FollowerTabCard}>
      <div className={Style.FollowerTabCard_Rank}>
        <p>
          #{i + 1} <span>🥇</span>
        </p>
      </div>
      <div className={Style.FollowerTabCard_Box}>
        <div className={Style.FollowerTabCard_Box_Img}>
          <Image className={Style.FollowerTabCard_Box_Img_Img} src={el.background} alt="profile background" width={500} height={300} />
        </div>
        <div className={Style.FollowerTabCard_Box_Profile}>
          <Image className={Style.FollowerTabCard_Box_Profile_Img} alt="profile picture" width={80} height={80} objectFit='cover' src={el.user} />
        </div>
        <div className={Style.FollowerTabCard_Box_Info}>
          <div className={Style.FollowerTabCard_Box_Info_Name}>
            <h4>Uros Marenovic{""} <span><MdVerified /></span></h4>
            <p>12.321 ETH</p>
          </div>
          <div className={Style.FollowerTabCard_Box_Info_Following}>
            {
              following ? (
                <a onClick={() => followMe()}>
                  Following
                </a>
              ) : (
                <a onClick={() => followMe()}>
                  Follow{""}{" "} <span><TiTick /></span>
                </a>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default FollowerTabCard