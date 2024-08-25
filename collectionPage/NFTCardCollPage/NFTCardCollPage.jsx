import React, {useState} from 'react'
import Image from 'next/image';
import { BsImage } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { MdVerified, MdTimer } from 'react-icons/md';

//INTERNAL IMPORT
import Style from './NFTCardCollPage.module.css';
import { LikeProfile } from '@/components/component';

const NFTCardCollPage = ({NFTData}) => {
    const [like, setLike] = useState(false);
    const [likeIncrement, setLikeIncrement] = useState(21);

    const likeNft = () => {
        if(!like){
            setLike(true);
            setLikeIncrement(23);
        }else{
            setLike(false);
            setLikeIncrement(23+1);
        }
    }
  return (
    <div className={Style.NFTCard}>
        {NFTData.map((el,i)=>(
            <div className={Style.NFTCard_Box} key={i+1}>
                <div className={Style.NFTCard_Box_Like}>
                    <div className={Style.NFTCard_Box_Like_Box}>
                        <div className={Style.NFTCard_Box_Like_Box_Box}>
                            <BsImage className={Style.NFTCard_Box_Like_Box_Box_Icon}/>
                            <p onClick={()=>likeNft()}>
                                {like ? <AiOutlineHeart/> : <AiFillHeart/>}
                                {""}
                                <span>{likeIncrement + 1}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={Style.NFTCard_Box_Img}>
                    <Image src={el} alt='NFT' 
                    width={400} 
                    height={400}
                    objectFit='cover'
                    className={Style.NFTCard_Box_Img_Img}/>
                </div>
                <div className={Style.NFTCard_Box_Info_Left}>
                    <LikeProfile/>
                    <p>Clone #{i+1}</p>
                    <small>4{i+2}</small>
                    <div className={Style.NFTCard_Box_Price}>
                        <div className={Style.NFTCard_Box_Price_Box}>
                            <small>Current bid</small>
                            <p>1{i+5}.000 ETH</p>
                        </div>
                        <div className={Style.NFTCard_Box_Price_Stock}>
                            <MdTimer/> <span>{i+1} hours left</span>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default NFTCardCollPage