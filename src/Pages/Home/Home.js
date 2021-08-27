
import './Home.scss'
import Hero from '../../components/Hero/Hero';
import Comments from '../../components/Comments/Comments'
import { Component } from 'react';
import VideoList from '../../components/VideoList/VideoList';
import Videoplayer from '../../components/VideoPlayer/Videoplayer'
import axios from 'axios';
import { API_URL, API_KEY } from '../../utils/APIKey';


class Home extends Component {
    state = {
        videoDetails: {},
        selectedVideo: null,
    };

    getVideoId = (id) => {
        axios.get(`${API_URL}/videos/${id}${API_KEY}`)
            .then(
                response => {
                    this.setState({
                        selectedVideo: response.data,
                    })
                })
            .catch(error => console.log(error))
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.getVideoId(this.props.match.params.id)
        }
    }

    componentDidMount() {
        axios.get(`${API_URL}/videos/${API_KEY}`)
            .then(
                (response) => {
                    console.log(response.data);
                    this.setState({
                        videoDetails: response.data,
                    })

                    const id = this.props.match.params.id || response.data[0].id;
                    this.getVideoId(id);
                });
    }


    render() {
        if (!this.state.selectedVideo) {
            return <h2>gimme a chance boss</h2>;
        }

        const filteredVids = this.state.videoDetails.filter(
            vid => vid.id !== this.state.selectedVideo.id);

        return (
            <div className="Home">
                <Videoplayer selectedVideo={this.state.selectedVideo} />
                <div className="Home-container">
                    <div className="Home__left-container">
                        <Hero selectedVideo={this.state.selectedVideo} />
                        <Comments selectedVideo={this.state.selectedVideo} />
                    </div>
                    <div className="Home__right-container">
                        <VideoList filteredVids={filteredVids} />
                    </div>
                </div>
            </div>
        );
    }
}



export default Home;