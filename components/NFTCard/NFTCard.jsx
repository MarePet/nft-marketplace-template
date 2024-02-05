import React from 'react'
import { AiFillHeart,AiOutlineHeart } from 'react-icons/ai'
import { BsImages } from 'react-icons/bs'
import { useState } from 'react'
import Image from 'next/image'


//INTERNAL IMPORT
import Style from './NFTCard.module.css'
import images from '../../img'

const NFTCard = () => {
 
    const featureArray = [1,2,3,4,5,6,7,8,9];

    const [like,setLike] = useState(true);

    const likeNft = () =>{
        if(!like){
            setLike(true);
        }else{
            setLike(false);
        }
    }
 
 
    return (
    <div className={Style.NFTCard}>
        {
            featureArray.map((el,i)=>(
                <div className={Style.NFTCard_Box} key={i+1}>
                    <div className={Style.NFTCard_Box_Img}>
                        <Image
                        src={images.nft_image_1}
                        alt='nft_image'
                        className={Style.NFTCard_Box_Img_Image}
                        />
                    </div>
                    <div className={Style.NFTCard_Box_Update}>
                        <div className={Style.NFTCard_Box_Update_Left}>
                            <div className={Style.NFTCard_Box_Update_Left_Like} onClick={()=>likeNft()}>
                                {like ? (
                                    <AiOutlineHeart/>
                                ) : (
                                <AiFillHeart className={Style.NFTCard_Box_Update_Left_Like_Icon}/>
                                )
                            }
                            {""} 22
                            </div>
                        </div>
                        <div className={Style.NFTCard_Box_Update_Right}>
                            <div className={Style.NFTCard_Box_Update_Right_Info}>
                                <small>Remaining time</small>
                                <p>3h : 15m : 20s</p>
                            </div>
                        </div>
                    </div>
                    <div className={Style.NFTCard_Box_Update_Details}>
                        <div className={Style.NFTCard_Box_Update_Details_Price}>
                            <div className={Style.NFTCard_Box_Update_Details_Price_Box}>
                                <h4>Clone #13777</h4>
                                <div className={Style.NFTCard_Box_Update_Details_Price_Box_Box}>
                                    <div className={Style.NFTCard_Box_Update_Details_Price_Box_Bid}>
                                        <small>Current bid</small>
                                        <p>1.0000 ETH</p>
                                    </div>
                                    <div className={Style.NFTCard_Box_Update_Details_Price_Box_Stock}>
                                        <small>61 in stock</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={Style.NFTCard_Box_Update_Details_Category}>
                            <BsImages/>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default NFTCard