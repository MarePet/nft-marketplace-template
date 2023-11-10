import React from 'react';
import Link from 'next/link';

//INTERNAL IMPORT
import Style from './Discover.module.css';

const Discover = () => {
  //DISCOVER NAVIGATION MENU
  const discover = [
    {
    name: "Collection",
    link: "collection"
    },
    {
      name: "Search",
      link: "search"
    },
    {
      name: "Author profile",
      link: "author-profile"
    },
    {
      name: "NFT Details",
      link: "nft-details"
    },
    {
      name: "Account settings",
      link: "account-settings"
    },
    {
      name: "Connect wallet",
      link: "connect-wallet"
    },
    {
        name: "Blog",
        link: "blog"
    }
  ]

  return (
    <div>{discover.map((el,i)=>(
      <div key={i+1} className={Style.Discover}>
        <Link href={{pathname:`${el.link}`}}>{el.name}</Link>
      </div>
    ))}</div>
  )
}

export default Discover