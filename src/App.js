import './App.scss';
import Header from './components/Header/Header.js';
import VideoDetails from "./Data/video-details.json"
import Videos from "./Data/videos.json"
import { Component } from 'react';
import Home from './Pages/Home/Home';
import Upload from './Pages/Upload/Upload';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'

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
      <BrowserRouter>
        <Header />
        <Switch>
          < Route path="/"
            exact render={() =>
              <Home
                selectedVideo={this.state.selectedVideo}
                filteredVids={filteredVids}
                videoSelector={this.videoSelector}
              />} />
          < Route path="/upload" component={Upload} />
        </Switch>

      </BrowserRouter>
    );
  }
}



export default App;
