import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GrClose } from 'react-icons/gr';
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram, TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

//INTERNAL IMPORT
import Style from './Sidebar.module.css';
import Images from '../../../img';
import { Button } from '@/components/component';


const Sidebar = ({ setOpenSideMenu }) => {

  //USESTATE
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

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
  ];
  const helpCenter = [
    {
      name: "About",
      link: "about"
    },
    {
      name: "Contact us",
      link: "contact-us"
    },
    {
      name: "Sign up",
      link: "sign-up"
    },
    {
      name: "Sign in",
      link: "sing-in"
    },
    {
      name: "Subscription",
      link: "subscription"
    },
  ];
  const openDiscoverMenu = () => {
    if (!openDiscover) {
      setOpenDiscover(true);
    }
    else {
      setOpenDiscover(false);
    }
  };
  const openHelpMenu = () => {
    if (!openHelp) {
      setOpenHelp(true);
    }
    else {
      setOpenHelp(false);
    }
  };
  const closeSidebar = () => {
    setOpenSideMenu(false);
  }

  return (
    <div className={Style.Sidebar}>
      <div className={Style.Sidebar_CloseBtn} onClick={() => closeSidebar()}></div>
      <div className={Style.Sidebar_Box}>
        <Image src={Images.logo} alt='logo' width={150} height={150} />
        <p>Discover articles about all the latest topics and news regarding NFT collections and share them</p>
        <div className={Style.Sidebar_Social}>
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
            <TiSocialYoutube />
          </a>
          <a href="#">
            <TiSocialInstagram />
          </a>
        </div>
      </div>
      <div className={Style.Sidebar_Menu}>
        <div>
          <div className={Style.Sidebar_Menu_Box} onClick={() => openDiscoverMenu()}>
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>

          {
            openDiscover && (
              <div className={Style.Sidebar_Discover}>
                {discover.map((el, i) => (
                  <p key={i + 1}>
                    <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                  </p>
                ))}
              </div>
            )
          }

        </div>

        <div>
          <div className={Style.Sidebar_Menu_Box} onClick={() => openHelpMenu()}>
            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>

          {
            openHelp && (
              <div className={Style.Sidebar_Discover}>
                {helpCenter.map((el, i) => (
                  <p key={i + 1}>
                    <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                  </p>
                ))}
              </div>
            )
          }

        </div>
      </div>
      <div className={Style.Sidebar_Button}>
        <Button btnName="Create" />
        <Button btnName="Connect Wallet" />
      </div>
    </div>
  )
}

export default Sidebar