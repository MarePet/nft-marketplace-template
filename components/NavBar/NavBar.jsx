import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

//REACT ICONS
import { MdNotifications } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg';




//INTERNAL IMPORT
import Style from './NavBar.module.css';
import { Discover, HelpCenter, Notification, Profile, Sidebar } from './index';
import { Button } from '../component';
import images from '../../img';


const NavBar = () => {
  //USESTATE COMPONENTS
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText == "Help Center") {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setHelp(false);
      setDiscover(false);
      setNotification(false);
    } else {
      setProfile(false);
    }
  };

  const openSidebar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };

  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_Container}>
        <div className={Style.NavBar_Container_Left}>

          <div className={Style.Logo}>
            <Image src={images.logo} alt="NFT Marketplace" width={100} height={100} />
          </div>

          <div className={Style.NavBar_Container_Left_Box_Input}>
            <div className={Style.NavBar_Container_Left_Box_Input_Box}>
              <input type="text" placeholder='Search for NFT' />
              <BsSearch onClick={() => { }} className={Style.Search_Icon} />
            </div>
          </div>

        </div>

        {/*END OF LEFT SECTION*/}

        <div className={Style.NavBar_Container_Right}>
          <div className={Style.NavBar_Container_Right_Discover}>
            {/*DISCOVER MENU*/}
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (<div className={Style.NavBar_Container_Right_Discover_Box}>
              <Discover />
            </div>)}
          </div>

          {/*HELP CENTER MENU*/}
          <div className={Style.NavBar_Container_Right_Help}>
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {help && (
              <div className={Style.NavBar_Container_Right_Help_Box}>
                <HelpCenter />
              </div>
            )}
          </div>

          {/* NOTIFICATION */}
          <div className={Style.NavBar_Container_Right_Notify}>
            <MdNotifications className={Style.Notify} onClick={() => openNotification()} />
            {notification && <Notification />}
          </div>

          {/*CREATE BUTTON SECTION */}
          <div className={Style.NavBar_Container_Right_Button}>
            <Button btnName="Create" handleClick={() => { }} />
          </div>

          {/*CREATE USER PROFILE*/}
          <div className={Style.NavBar_Container_Right_Profile_Box}>
            <div className={Style.NavBar_Container_Right_Profile}>
              <Image src={images.user1} alt='Profile' width={40} height={40} onClick={() => openProfile()} className={Style.NavBar_Container_Right_Profile} />
              {profile && <Profile />}
            </div>
          </div>

          {/*MENU BUTTON - Only for mobile device */}
          <div className={Style.NavBar_Container_Right_MenuBtn}>
            <CgMenuRight className={Style.MenuIcon} onClick={() => openSidebar()} />
          </div>

          {/*SIDEBAR COMPONENT - Only for mobile device*/}
          {
            openSideMenu && (
              <div className={Style.Sidebar}>
                <Sidebar setOpenSideMenu={setOpenSideMenu} />
              </div>
            )
          }

        </div>
      </div>


    </div>
  );
};

export default NavBar