import './VideoList.scss';
import React from 'react'

function VideoList({ Videos, videoSelector }) {
    console.log(Videos, videoSelector);

    return (
        <div>
            <nav className="vidList">
                <div className="vidList__subheader">NEXT VIDEO</div>
                {Videos.map((vid) => (
                    <div
                        key={vid.id}
                        className="vidList__container"
                        onClick={() => { videoSelector(vid.id) }}
                    >
                        <img className="vidList__img" src={vid.image}></img>
                        <div className="vidList__info-container">
                            <h3 className="vidList__title">{vid.title}</h3>
                            <div>{vid.channel}</div>
                        </div>
                    </div>
                ))}
            </nav>
        </div>
    )
}

export default VideoList
