import './App.scss';
import Header from './components/Header/Header.js';
import VideoDetails from "./Data/video-details.json"
import Videos from "./Data/videos.json"
import Hero from './components/Hero/Hero';
import { Component } from 'react';

class App extends Component {
  state = {
    Videos: Videos,
    VideoDetails: VideoDetails,
    selectedVideo: VideoDetails[0],
  };



  render() {

    return (
      <div className="App">
        <Header />
        <Hero hero={this.state.selectedVideo} />
      </div>
    );

  }
}



export default App;
