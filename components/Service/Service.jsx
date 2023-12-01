import React from 'react'
import Image from 'next/image';

//INTERNAL IMPORT
import Style from './Service.module.css';
import images from '../../img';

const Service = () => {
  return (
    <div className={Style.Service}>
        <div className={Style.Service_Box}>
            <div className={Style.Service_Box_Item}>
                <Image src={images.service1} alt ="Filter & Discover " width={100} height={100}/>
                <p className={Style.Service_Box_Item_Step}>
                    <span>Step 1</span>
                </p>
                <h3>Filter & Discover</h3>
                <p>Connect with wallet, discover, buy or sell NFTs. </p>
            </div>
            <div className={Style.Service_Box_Item}>
                <Image src={images.service2} alt ="Filter & Discover " width={100} height={100}/>
                <p className={Style.Service_Box_Item_Step}>
                    <span>Step 2</span>
                </p>
                <h3>Filter & Discover</h3>
                <p>Connect with wallet, discover, buy or sell NFTs. </p>
            </div>
            <div className={Style.Service_Box_Item}>
                <Image src={images.service3} alt ="Connect wallet" width={100} height={100}/>
                <p className={Style.Service_Box_Item_Step}>
                    <span>Step 3</span>
                </p>
                <h3>Connect Wallet</h3>
                <p>Connect with wallet, discover, buy or sell NFTs. </p>
            </div>
            <div className={Style.Service_Box_Item}>
                <Image src={images.service4} alt ="Filter & Discover " width={100} height={100}/>
                <p className={Style.Service_Box_Item_Step}>
                    <span>Step 4</span>
                </p>
                <h3>Start trading</h3>
                <p>Connect with wallet, discover, buy or sell NFTs. </p>
            </div>
        </div>
    </div>
  )
}

export default Service