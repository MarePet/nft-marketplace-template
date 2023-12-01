import React from 'react';

//INTERNAL IMPORT
import Style from '../styles/index.module.css';
import { Hero , Service} from '@/components/component';


const Home = () => {
  return (
    <div className={Style.HomePage}>
      <Hero/>
      <Service/>
    </div>
  )
}

export default Home