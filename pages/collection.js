import React from 'react'

//INTERNAL IMPORT
import Style from '../styles/collection.module.css';
import images from '../img';
import { Banner, CollectionProfile } from '@/collectionPage/collectionIndex';
import { Slider, Brand } from '@/components/component';
import { Filter } from '@/components/component';

 

const collection = () => {
  return (
    <div className={Style.Collection}>
      <Banner bannerImage = {images.creatorbackground1}/>
      <CollectionProfile/>
    </div>
  )
}

export default collection