import React, { useState } from 'react';
import Image from 'next/image';
import { TbPlayerPlay, TbPlayerPause } from 'react-icons/tb';

//INTERNAL IMPORT
import Style from './Video.module.css';
import images from '../../img';

const Video = () => {
    const [play, setPlay] = useState(false);
    const playVideo = () => {
        if (!play) {
            setPlay(true)
        } else {
            setPlay(false);
        }
    };
    return (
        <div className={Style.Video}>
            <div className={Style.Video_Box}>
                <div className={Style.Video_Box_Title}>
                    <h1>
                        <span>🎬</span>Videos
                    </h1>
                    <p>Check out our hottest videos. View more about crypto opportunities or any other related topic.</p>
                </div>
                <div className={Style.Video_Box_Frame}>
                    <div className={Style.Video_Box_Frame_Left}>
                        <Image src={images.nftvideo} alt='video-image' style={{ objectFit: "cover" }} className={Style.Video_Box_Frame_Left_Img} />
                        <div className={Style.Video_Box_Frame_Left_MusicPlayer} onClick={() => playVideo()}>
                            {
                                play ? (
                                    <div className={Style.Video_Box_Frame_Left_VideoPlayer_Icon}>
                                        <TbPlayerPause />
                                    </div>
                                ) : (
                                    <div className={Style.Video_Box_Frame_Left_VideoPlayer_Icon}>
                                        <TbPlayerPlay />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className={Style.Video_Box_Frame_Right}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video