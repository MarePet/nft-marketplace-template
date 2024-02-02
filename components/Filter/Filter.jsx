import React, { useState } from 'react'
import {
    FaFilter,
    FaAngleDown,
    FaAngleUp,
    FaWallet,
    FaMusic,
    FaVideo,
    FaImage,
    FaUserAlt,
    FaImages
} from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'
import { MdVerified } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'

//INTERNAL IMPORT
import Style from './Filter.module.css'

const Filter = () => {
    const [filter, setFilter] = useState(true);
    const [image, setImage] = useState(true);
    const [video, setVideo] = useState(true);
    const [music, setMusic] = useState(true);

    //FUNCTIONS
    const openFilter = () => {
        if(!filter){
            setFilter(true)
        }else{
            setFilter(false)
        }
    }

    const openImage = () =>{
        if(!image){
            setImage(true);
        }
        else{
            setImage(false);
        }
    }

    const openVideo = () => {
        if(!video){
            setVideo(true);
        }
        else{
            setVideo(false);
        }
    }

    const openMusic = () => {
        if(!music){
            setMusic(true);
        }
        else{
            setMusic(false);
        }
    }


    return (
        <div className={Style.Filter}>
            <div className={Style.Filter_Box}>
                <div className={Style.Filter_Box_Left}>
                    <button onClick={() => { }}>NFTs</button>
                    <button onClick={() => { }}>Art</button>
                    <button onClick={() => { }}>Music</button>
                    <button onClick={() => { }}>Sport</button>
                    <button onClick={() => { }}>Photography</button>
                </div>
                <div className={Style.Filter_Box_Right}>
                    <div className={Style.Filter_Box_Right_Box}
                        onClick={() => openFilter()}>
                        <FaFilter />
                        <span>Filter</span> {filter ? <FaAngleDown /> : <FaAngleUp />}
                    </div>
                </div>
            </div>
            {
                filter && (
                    <div className={Style.Filter_Box_Items}>
                        <div className={Style.Filter_Box_Items_Box}>
                            <div className={Style.Filter_Box_Items_Box_Item}>
                                <FaWallet /> <span>10 ETH</span>
                                <AiFillCloseCircle />
                            </div>
                        </div>
                        <div className={Style.Filter_Box_Items_Box}>
                            <div className={Style.Filter_Box_Items_Box_Item_Trans}
                                onClick={() => openImage()}>
                                    <FaImages/> <small>Images</small>
                                    {image ? <AiFillCloseCircle/> : <TiTick/>}
                            </div>
                        </div>
                        <div className={Style.Filter_Box_Items_Box}>
                            <div className={Style.Filter_Box_Items_Box_Item_Trans}
                            onClick={()=>openVideo()}>
                                <FaVideo/> <small>Video</small>
                                {
                                    video ? <AiFillCloseCircle/> : <TiTick/>
                                }
                            </div>
                        </div>
                        <div className={Style.Filter_Box_Items_Box}>
                            <div className={Style.Filter_Box_Items_Box_Item_Trans}
                            onClick={()=>openMusic()}>
                                <FaMusic/><small>Music</small>
                                {
                                    music ? <AiFillCloseCircle/> : <TiTick/>
                                }
                            </div>
                        </div>
                        <div className={Style.Filter_Box_Items_Box}>
                            <div className={Style.Filter_Box_Items_Box_Item}>
                                <FaUserAlt/> <span>Verified</span>
                                <MdVerified/>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Filter