import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { AiFillFire, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { MdVerified, MdTimer } from 'react-icons/md'
import { TbArrowBigLeftLine, TbArrowBigRightLine } from 'react-icons/tb'

//INTERNAL IMPORT
import Style from './BigNFTSlider.module.css'
import images from '../../img'
import { Button } from '../component'
import { BsCollection } from 'react-icons/bs'


const BigNFTSlider = () => {
    const [idNumber, setIdNumber] = useState(1);
    const sliderData = [
        {
            title: "Hello NFT",
            id: 1,
            name: "Marko Petrovic",
            collection: "Gym",
            price: "000000646 ETH",
            like: 243,
            userImage: images.user1,
            nftImage: images.nft_image_1,
            time: {
                days: 27,
                hours: 10,
                minutes: 11,
                seconds: 35
            }
        },
        {
            title: "Friend NFT",
            id: 2,
            name: "Andjela Cosic",
            collection: "Buddy",
            price: "000000646 ETH",
            like: 243,
            userImage: images.user2,
            nftImage: images.nft_image_2,
            time: {
                days: 27,
                hours: 10,
                minutes: 11,
                seconds: 35
            }
        },
        {
            title: "Gym NFT",
            id: 3,
            name: "Marko Petrovic",
            collection: "Gym",
            price: "000000646 ETH",
            like: 243,
            userImage: images.user3,
            nftImage: images.nft_image_3,
            time: {
                days: 27,
                hours: 10,
                minutes: 11,
                seconds: 35
            }
        },
        {
            title: "Best Friend NFT",
            id: 4,
            name: "Uros Marenovic",
            collection: "Buddy",
            price: "000000646 ETH",
            like: 243,
            userImage: images.user4,
            nftImage: images.nft_image_4,
            time: {
                days: 27,
                hours: 10,
                minutes: 11,
                seconds: 35
            }
        }
    ]
// ---- INCREMENT
    const inc = useCallback(()=>{
        if(idNumber + 1 < sliderData.length){
            setIdNumber(idNumber+1)
        }
    },[idNumber,sliderData.length]);
// ----- DECREMENT
    const dec = useCallback(()=>{
        if(idNumber > 0){
            setIdNumber(idNumber-1)
        }
    },[idNumber]);


    return (
        <div className={Style.BigNFTSlider}>
            <div className={Style.BigNFTSlider_Box}>
                <div className={Style.BigNFTSlider_Box_Left}>
                    <h2>{sliderData[idNumber].title}</h2>
                    <div className={Style.BigNFTSlider_Box_Left_Creator}>
                        <div className={Style.BigNFTSlider_Box_Left_Creator_Profile}>
                            <Image className={Style.BigNFTSlider_Box_Left_Creator_Profile_Img}
                                src={sliderData[idNumber].userImage} alt='Profile image' width={50} height={50} />
                            <div className={Style.BigNFTSlider_Box_Left_Creator_Profile_Info}>
                                <p>Creator</p>
                                <h4>
                                    {sliderData[idNumber].name}{" "}
                                    <span><MdVerified /></span>
                                </h4>
                            </div>
                        </div>
                        <div className={Style.BigNFTSlider_Box_Left_Creator_Collection}>
                            <AiFillFire className={Style.BigNFTSlider_Box_Left_Creator_Collection_Icon}/>

                            <div className={Style.BigNFTSlider_Box_Left_Creator_Collection_Info}>
                                <p>Collection</p>
                                <h4>{sliderData[idNumber].collection}</h4>
                            </div>
                        </div>
                    </div>
                    <div className={Style.BigNFTSlider_Box_Left_Bidding}>
                        <div className={Style.BigNFTSlider_Box_Left_Bidding_Box}>
                            <small>Current bid</small>
                            <p>{sliderData[idNumber].price} <span>$221,21</span></p>
                        </div>
                        <p className={Style.BigNFTSlider_Box_Left_Bidding_Box_Auction}>
                            <MdTimer className={Style.BigNFTSlider_Box_Left_Bidding_Box_Icon}/>
                            <span>Auction ending in</span>
                        </p>
                        <div className={Style.BigNFTSlider_Box_Left_Bidding_Box_Timer}>
                            <div className={Style.BigNFTSlider_Box_Left_Bidding_Box_Timer_Item}>
                                <p>{sliderData[idNumber].time.days} </p> <span>days</span>
                            </div>
                            <div className={Style.BigNFTSlider_Box_Left_Bidding_Box_Timer_Item}>
                                <p>{sliderData[idNumber].time.hours} </p> <span>hours</span>
                            </div>
                            <div className={Style.BigNFTSlider_Box_Left_Bidding_Box_Timer_Item}>
                                <p>{sliderData[idNumber].time.minutes}</p>  <span>minutes</span>
                            </div>
                            <div className={Style.BigNFTSlider_Box_Left_Bidding_Box_Timer_Item}>
                                <p>{sliderData[idNumber].time.seconds} </p><span>seconds</span>
                            </div>
                        </div>
                        <div className={Style.BigNFTSlider_Box_Left_Button}>
                            <Button btnName="Place" handleClick = {()=>{}}/>
                            <Button btnName="View" handleClick = {()=>{}}/>
                        </div>
                    </div>
                    <div className={Style.BigNFTSlider_Box_Left_SliderBtn}>
                        <TbArrowBigLeftLine className={Style.BigNFTSlider_Box_Left_SliderBtn_Icon}
                        onClick={()=> dec()}
                        />
                        <TbArrowBigRightLine className={Style.BigNFTSlider_Box_Left_SliderBtn_Icon}
                        onClick={()=> inc()}
                        />
                    </div>
                </div>

                <div className={Style.BigNFTSlider_Box_Right}>
                    <div className={Style.BigNFTSlider_Box_Right_Box}>
                        <Image className={Style.BigNFTSlider_Box_Right_Box_Img} src = {sliderData[idNumber].nftImage}  alt='NFT Image'/>
                        <div className={Style.BigNFTSlider_Box_Right_Box_Like}>
                            <AiFillHeart/>
                            <span>{sliderData[idNumber].like}</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default BigNFTSlider