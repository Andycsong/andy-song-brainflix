import './VideoList.scss';
import React from 'react'
import { Link } from 'react-router-dom';

function VideoList({ filteredVids }) {
    return (

        <div>
            <nav className="vidList">
                <div className="vidList__subheader">NEXT VIDEO</div>
                {filteredVids.map((vid) => {
                    return (
                        <Link className="vidList__click" key={vid.id} to={`/video/${vid.id}`}>
                            <div className="vidList__container">
                                <img className="vidList__img" src={vid.image} alt='poster of the video that is displayed'></img>
                                <div className="vidList__info-container">
                                    <h3 className="vidList__title">{vid.title}</h3>
                                    <div className="vidList__channel">{vid.channel}</div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </nav>
        </div>
    )
}

export default VideoList
