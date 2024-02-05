import React from 'react'
import { RiSendPlaneFill } from 'react-icons/ri'
import Image from 'next/image'


//INTERNAL IMPORT
import Style from './Subscribe.module.css'
import images from '../../img'




const Subscribe = () => {
  return (
    <div className={Style.Subscribe}>
        <div className={Style.Subscribe_Box}>
            <div className={Style.Subscribe_Box_Left}>
                <h2>Never miss a drop!</h2>
                <p>Subscribe to out super-exclusive drop list and be the first to know about upcoming drops!</p>
                <div className={Style.Subscribe_Box_Left_Box}>
                  <span>01</span>
                  <small>Get more!</small>
                </div>

                <div className={Style.Subscribe_Box_Left_Box}>
                  <span>02</span>
                  <small>Get premium magazines!</small>
                </div>
                
                <div className={Style.Subscribe_Box_Left_Input}>
                  <input type="email" placeholder='Enter your e-mail' />
                  <RiSendPlaneFill className={Style.Subscribe_Box_Left_Input_Icon}/>
                </div>
            </div>
            <div className={Style.Subscribe_Box_Right}>
              <Image src={images.update} className={Style.Subscribe_Box_Right_Img} alt='get update'/>
            </div>
        </div>
    </div>
  )
}

export default Subscribe