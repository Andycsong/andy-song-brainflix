
import './Home.scss'
import Hero from '../../components/Hero/Hero';
import Comments from '../../components/Comments/Comments'
import { Component } from 'react';
import VideoList from '../../components/VideoList/VideoList';
import Videoplayer from '../../components/VideoPlayer/Videoplayer'
import { API_CALLS } from '../../utils/API';


class Home extends Component {
    state = {
        videoDetails: {},
        selectedVideo: null,
    };

    getVideoId = (id) => {
        API_CALLS.getDetailedVideos(id)
            .then(response => {
                this.setState({ selectedVideo: response.data, })
            })
            .catch(error => console.log(error))
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.getVideoId(this.props.match.params.id)
        }
    }

    componentDidMount() {
        API_CALLS.getVideos()
            .then((response) => {
                this.setState({
                    videoDetails: response.data,
                })
                const id = this.props.match.params.id || response.data[0].id;
                this.getVideoId(id);
            });
    }


    LoadingScreen = () => {
        window.setTimeout(() => {
            return (
                <h2> Gimme a chance boss</h2 >
            )
        }, 1000)
    }

    render() {
        if (!this.state.selectedVideo) {
            return this.LoadingScreen;
        }

        const filteredVids = this.state.videoDetails.filter(vid => vid.id !== this.state.selectedVideo.id);

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