import React from 'react';

//INTERNAL IMPORT
import Style from '../styles/index.module.css';
import { Hero , Service, BigNFTSlider, Subscribe, Title, Category,Filter,NFTCard,Collection, FollowerTab, AudioLive, Slider} from '@/components/component';


const Home = () => {
  return (
    <div className={Style.HomePage}>
      <Hero/>
      <Service/>
      <BigNFTSlider/>
      <Title heading="Audio Collection" 
      paragraph="Discover the most outsdanding NFTs."/>
      <AudioLive/>
      <FollowerTab/>   
      <Slider/>
      <Title heading="Filter by Collection" 
      paragraph="Discover the most outsdanding NFTs."/>
      <Collection/>
      <Title heading="Featured NFTs" 
      paragraph="Discover the most outsdanding NFTs."/>
      <Filter/>
      <NFTCard/>
      <Title heading="Browse by category" 
      paragraph="Explore NFTs by the featured categories. "/>
      <Category/>
      <Subscribe/>
    </div>
  )
}

export default Home