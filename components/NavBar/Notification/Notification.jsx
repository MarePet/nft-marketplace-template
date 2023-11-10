import React from 'react';
import Image from 'next/image';

//INTERNAL IMPORT
import Style from './Notification.module.css';
import Images from '../../../img';


const Notification = () => {
  return (
    <div className={Style.Notification}>
      <p>Notification</p>
      <div className={Style.Notification_Box}>
        <div className={Style.Notification_Box_Image}>
          <Image src={Images.user1} alt="profile image" width={50} height={50} className={Style.Notification_Box_Image} />
        </div>
        <div className={Style.Notification_Box_Info}>
          <h4>Marko Petrović</h4>
          <p>Message</p>
          <small>3 minutes ago</small>
        </div>
        <span className={Style.Notification_Box_New}></span>
      </div>
    </div>
  )
}

export default Notification