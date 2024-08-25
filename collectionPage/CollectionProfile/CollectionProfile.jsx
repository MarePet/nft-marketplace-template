import React from 'react';
import Image from 'next/image';
import {TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram} from "react-icons/ti"; 

//INTERNAL IMPORT
import Style from './CollectionProfile.module.css';
import images from '../../img';

const CollectionProfile = () => {

  const cardArray =[1,2,3,4];

  return (
    <div className={Style.Collection_Profile}>
      <div className={Style.Collection_Profile_Box}>
        <div className= {Style.Collection_Profile_Box_Left}>
          <Image src={images.nft_image_1} alt='nft-image' width={800} height={800}
          className={Style.Collection_Profile_Box_Left_Img}/>
          <div className={Style.Collection_Profile_Box_Left_Social}>
            <a href="#">
              <TiSocialFacebook/>
            </a>
            <a href="#">
              <TiSocialInstagram/>
            </a>
            <a href="#">
              <TiSocialLinkedin/>
            </a>
            <a href="#">
              <TiSocialTwitter/>
            </a>
          </div>
        </div>
        <div className={Style.Collection_Profile_Box_Middle}>
          <h1>Awesome NFT collections!</h1>
          <p>The home of over 5,000 arts and designs where colors reign supreme. Leave the drab reality and enther the world of NFTs!</p>
          <div className={Style.Collection_Profile_Box_Middle_Box}>
            {
              cardArray.map((el,i)=>(
                <div className={Style.Collection_Profile_Box_Middle_Box_Item} key={i+1}>
                  <small>Floor price</small>
                  <p>${i+1}95,4683</p>
                  <span>+{i+2}.11%</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionProfile