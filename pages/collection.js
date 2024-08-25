import React from 'react'

//INTERNAL IMPORT
import Style from '../styles/collection.module.css';
import images from '../img';
import { Banner, CollectionProfile, NFTCardCollPage } from '@/collectionPage/collectionIndex';
import { Slider, Brand } from '@/components/component';
import { Filter } from '@/components/component';

 

const collection = () => {
  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3, 
    images.nft_image_2,
    images.nft_image_3, 
    images.nft_image_1
  ]
  return (
    <div className={Style.Collection}>
      <Banner bannerImage = {images.creatorbackground1}/>
      <CollectionProfile/>
      <Filter/>
      <NFTCardCollPage  NFTData = {collectionArray}/>
      <Slider/>
      <Brand/>
     
    </div>
  )
}

export default collection