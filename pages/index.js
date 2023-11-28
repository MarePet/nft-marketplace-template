import React from 'react';

//INTERNAL IMPORT
import Style from '../styles/index.module.css';
import { Hero } from '@/components/component';


const Home = () => {
  return (
    <div className={Style.HomePage}>
      <Hero/>
    </div>
  )
}

export default Home