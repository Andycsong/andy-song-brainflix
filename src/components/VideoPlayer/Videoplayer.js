import React from 'react'
import './Videoplayer.scss'


const Videoplayer = (props) => {
    const selectedVideo = props.videoPlayer
    return (
        <div>
            <video controls
                className="hero__video"
                poster={selectedVideo.image}
                src={selectedVideo.video}
            >
            </video>
        </div>
    )
}

export default Videoplayer

