import React from 'react';
import Image from 'next/image';
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter, TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp
} from 'react-icons/ti';
import { RiSendPlaneFill } from 'react-icons/ri';

//INTERNAL IMPORT
import Style from './Footer.module.css';
import images from '../../img';
import { Discover, HelpCenter } from '../NavBar/index';

const Footer = () => {
  return (
    <div className={Style.Footer}>
      <div className={Style.Footer_Box}>
        <div className={Style.Footer_Box_Social}>
          <Image src={images.logo} alt="foorer_logo" height={100} width={100} />
          <p>Latgest digital marketplace for content creator collectibles and non-fungible tokens. Buy sell and trade exclusive digital items.</p>
          <div className={Style.Footer_Social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
          </div>
        </div>

        <div className={Style.Footer_Box_Discover}>
          <h3>Discover</h3>
          <Discover />
        </div>

        <div className={Style.Footer_Box_Help}>
          <h3>Help Center</h3>
          <HelpCenter />
        </div>
        
        <div className={Style.Subscribe}>
          <h3>Subscribe</h3>
          <div className={Style.Subscribe_Box}>
            <input type="email" placeholder='Enter your email' />
            <RiSendPlaneFill className={Style.Subscribe_Box_Send} />
          </div>

          <div className={Style.Subscribe_Box_Info}>
            <p>
              Discover, collect and sell NFTs. OpeanSea is the largest NFT marketplace.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer