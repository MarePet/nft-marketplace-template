import React from 'react';

//INTERNAL IMPORT
import Style from '../styles/index.module.css';
import { Hero , Service, BigNFTSlider, Subscribe, Title} from '@/components/component';


const Home = () => {
  return (
    <div className={Style.HomePage}>
      <Hero/>
      <Service/>
      <BigNFTSlider/>
      <Title heading="Browse by category" 
      paragraph="Explore NFTs by the featured categories. "/>
      <Subscribe/>
    </div>
  )
}

export default Home