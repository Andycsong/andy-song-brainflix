import './App.scss';
import Header from './components/Header/Header.js';
import VideoDetails from "./Data/video-details.json"
import Videos from "./Data/videos.json"
import Hero from './components/Hero/Hero';
import Comments from './components/Comments/Comments'
import { Component } from 'react';
import VideoList from './components/VideoList/VideoList';

class App extends Component {
  state = {
    Videos: Videos,
    VideoDetails: VideoDetails,
    selectedVideo: VideoDetails[0],
  };

  videoSelector = (id) => {
    const newVid = this.state.VideoDetails.find(
      (vid) => vid.id === id);


    this.setState({
      selectedVideo: newVid,
    });
  };

  render() {
    const filteredVids = this.state.Videos.filter(
      (vid) => vid.id !== this.state.selectedVideo.id);


    return (
      <div className="App">
        <Header />
        <Hero hero={this.state.selectedVideo} />
        <Comments commentsPosted={this.state.selectedVideo} />
        <VideoList Videos={filteredVids} videoSelector={this.videoSelector} />
      </div>
    );

  }
}



export default App;
