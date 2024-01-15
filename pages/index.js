import React from 'react';

//INTERNAL IMPORT
import Style from '../styles/index.module.css';
import { Hero , Service, BigNFTSlider, Subscribe} from '@/components/component';


const Home = () => {
  return (
    <div className={Style.HomePage}>
      <Hero/>
      <Service/>
      <BigNFTSlider/>
      <Subscribe/>
    </div>
  )
}

export default Home