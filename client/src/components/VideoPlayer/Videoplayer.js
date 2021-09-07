import React from 'react'
import './Videoplayer.scss'


function Videoplayer({ selectedVideo }) {
    return (
        <video controls
            className="hero__video"
            poster={selectedVideo.image}
            src={`${selectedVideo.video}/?api_key=04c2a75c-f8b6-459d-a765-7672191d3de8`}
        >
        </video>
    )
}

export default Videoplayer

