import React from 'react'
import './Videoplayer.scss'


const Videoplayer = (props) => {
    return (
        <div>
            <video controls
                className="hero__video"
                poster={props.video}
                src={props.image}
            >
            </video>
        </div>
    )
}

export default Videoplayer

