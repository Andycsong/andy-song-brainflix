
import './Home.scss'
import Hero from '../../components/Hero/Hero';
import Comments from '../../components/Comments/Comments'
import { Component } from 'react';
import VideoList from '../../components/VideoList/VideoList';
import Videoplayer from '../../components/VideoPlayer/Videoplayer'


function Home({ selectedVideo, filteredVids, videoSelector }) {
    console.log(selectedVideo, filteredVids, videoSelector);




    return (
        <div className="Home">
            <Videoplayer videoPlayer={selectedVideo} />
            <div className="Home-container">
                <div className="Home__left-container">
                    <Hero hero={selectedVideo} />
                    <Comments commentsPosted={selectedVideo} />
                </div>
                <div className="Home__right-container">
                    <VideoList Videos={filteredVids} videoSelector={videoSelector} />
                </div>
            </div>
        </div>
    );

}



export default Home;