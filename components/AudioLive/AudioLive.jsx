import React from 'react'


//INTERNAL IMPORT
import Style from './AudioLive.module.css'
import AudioCard from './AudioCard/AudioCard'
import AudioCardSmall from './AudioCardSmall/AudioCardSmall'

const AudioLive = () => {
  return (
    <div className={Style.AudioLive}>
        <div className={Style.AudioLive_Box}>
            <div className={Style.AudioLive_Box_Left}>
                <AudioCard/>
                <AudioCard/>
            </div>
            <div className={Style.AudioLive_Box_Right}>
                <AudioCardSmall/>
                <AudioCardSmall/>
                <AudioCardSmall/>
            </div>
        </div>
    </div>
  )
}

export default AudioLive