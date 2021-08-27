import React from 'react'
import './Videoplayer.scss'


function Videoplayer({ selectedVideo }) {
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

