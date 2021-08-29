import React from 'react'
import './Videoplayer.scss'


function Videoplayer({ selectedVideo }) {
    return (
        <video controls
            className="hero__video"
            poster={selectedVideo.image}
            src={selectedVideo.video}
        >
        </video>
    )
}

export default Videoplayer

