import React from 'react'
import Image from 'next/image'
import { MdVerified } from 'react-icons/md'

//INTERNAL IMPORT
import Style from './DaysComponent.module.css'
import images from '../../../img'

const DaysComponent = () => {
  return (
    <div className={Style.DaysComponent}>
      <div className={Style.DaysComponent_Box}>
        <div className={Style.DaysComponent_Box_Img}>
          <Image src={images.creatorbackground1}
            className={Style.DaysComponent_Box_Img_Img}
            alt='profile background'
            width={500}
            height={300}
            objectFit='covers'
          />
        </div>
        <div className={Style.DaysComponent_Box_Profile}>
          <Image src={images.creatorbackground2}
            alt='profile'
            width={200}
            height={200}
            className={Style.DaysComponent_Box_Img_1}
            objectFit='covers' />
          <Image src={images.creatorbackground2}
            alt='profile'
            width={200}
            height={200}
            className={Style.DaysComponent_Box_Img_2}
            objectFit='covers' />
          <Image src={images.creatorbackground2}
            alt='profile'
            width={200}
            height={200}
            className={Style.DaysComponent_Box_Img_3}
            objectFit='covers' />
        </div>
        <div className={Style.DaysComponent_Box_Title}>
          <h2>Amazing collection</h2>
          <div className={Style.DaysComponent_Box_Title_Info}>
            <div className={Style.DaysComponent_Box_Title_Info_Profile}>
              <Image src={images.user1} alt='profile' width={30} height={30}
                objectFit='covers'
                className={Style.DaysComponent_Box_Title_Info_Profile_Img} />
              <p>Creator
                <span>Marko Petrovic {" "} <small><MdVerified /></small></span>
              </p>
            </div>
            <div className={Style.DaysComponent_Box_Title_Info_Price}>
              <small>1.2225 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DaysComponent