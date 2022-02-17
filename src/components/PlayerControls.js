import React from 'react'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function PlayerControls(props) {
  return (
    <div>
       <AudioPlayer
       src={props.src}
       showSkipControls
       autoPlayAfterSrcChange
     />
    </div>
  )
}
