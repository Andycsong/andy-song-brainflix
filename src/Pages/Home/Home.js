
import './Home.scss'
import Hero from '../../components/Hero/Hero';
import Comments from '../../components/Comments/Comments'
import { Component } from 'react';
import VideoList from '../../components/VideoList/VideoList';
import Videoplayer from '../../components/VideoPlayer/Videoplayer'
import VideoDetails from "../../Data/video-details.json"
import Videos from "../../Data/videos.json"
import axios from 'axios';
import { API_URL, API_KEY } from '../../utils/APIKey';


class Home extends Component {
    state = {
        // Videos: Videos,
        // VideoDetails: VideoDetails,
        // selectedVideo: VideoDetails[0],
        videos: [],
        videoDetails: [],
        selectedVideo: {},
    };


    getVideoId(id) {
        axios.get(`${API_URL}/videos/${id}${API_KEY}`)
            .then(
                (response) => {
                    this.setState({
                        selectedVideo: response.data,
                    });
                });
    }

    getData() {
        if (this.props.match.params.videoId) {
            this.getVideoId(this.props.match.params.videoId);
        } else {
            axios.get(`${API_URL}/videos${API_KEY}`)
                .then(
                    (response) => {
                        this.getVideoId(response.data[0].id);
                    });

        }
    };

    componentDidMount() {
        axios.get(`${API_URL}/videos${API_KEY}`)
            .then(
                (response) => {
                    this.setState({
                        selectedVideo: response.data,
                    });
                });
        this.getData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.videoId !== prevProps.match.params.videoId) {
            this.getData();
        }
    }

    render() {

        const filteredVids = this.state.videos.filter(
            (vid) => vid.id !== this.state.selectedVideo.id);

        return (
            <div className="Home">
                <Videoplayer
                    selectedVideo={this.state.selectedVideo}
                />
                {/* <div className="Home-container">
                    <div className="Home__left-container">
                        <Hero selectedVideo={this.state.selectedVideo} />
                        <Comments selectedVideo={this.state.selectedVideo} />
                    </div>
                     <div className="Home__right-container">
                        <VideoList videos={filteredVids} videoSelector={this.videoSelector} />
                    </div> 
                </div> */}
            </div>
        );
    }
}



export default Home;