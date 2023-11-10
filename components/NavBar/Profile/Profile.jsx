import React from 'react';
import Image from 'next/image';
import { FaUserAlt, FaRegImage, FaUserEdit } from 'react-icons/fa';
import { MdHelpCenter } from 'react-icons/md';
import { TbDownloadOff, TbDownload } from 'react-icons/tb';
import Link from 'next/link';

//INTERNAL IMPORT
import Style from './Profile.module.css';
import Images from '../../../img';


const Profile = () => {
  return (
    <div className={Style.Profile}>
      <div style={Style.Profile_Account}>
        <Image src={Images.user1} alt='User profile' width={50} height={50} className={Style.Profile_Account_Image} />
        <div className={Style.Profile_Account_Info}>
          <p>Marko Petrović</p>
          <small>Addres</small>
        </div>
      </div>

      <div className={Style.Profile_Menu}>

        <div className={Style.Profile_Menu_One}>
          <div className={Style.Profile_Menu_One_Item}>
            <FaUserAlt />
            <p>
              <Link href={{ pathname: '/myprofile' }}>My Profile</Link>
            </p>
          </div>
          <div className={Style.Profile_Menu_One_Item}>
            <FaRegImage />
            <p>
              <Link href={{ pathname: '/myprofile' }}>My Items</Link>
            </p>
          </div>
          <div className={Style.Profile_Menu_One_Item}>
            <FaUserEdit />
            <p>
              <Link href={{ pathname: '/myprofile' }}>Edit Profile</Link>
            </p>
          </div>
        </div>

        <div className={Style.Profile_Menu_Two}>
          <div style={Style.Profile_Menu_One_Item}>
            <MdHelpCenter />
            <p>
              <Link href={{ pathname: '/help' }}>
                Help
              </Link>
            </p>
          </div>
          <div style={Style.Profile_Menu_One_Item}>
            <TbDownload />
            <p>
              <Link href={{ pathname: '/disconnect' }}>
                Disconnect
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Profile