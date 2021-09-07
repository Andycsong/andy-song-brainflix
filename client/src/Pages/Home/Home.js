
import './Home.scss'
import Hero from '../../components/Hero/Hero';
import Comments from '../../components/Comments/Comments'
import { Component } from 'react';
import VideoList from '../../components/VideoList/VideoList';
import Videoplayer from '../../components/VideoPlayer/Videoplayer'
import { API_CALLS, } from '../../utils/API';


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

    handleSubmit = (event) => {
        event.preventDefault();
        const userComment = event.target.commentForm.value
        const id = this.state.selectedVideo.id
        const comment = {
            'name': 'BrainStation Man',
            'comment': userComment,
        }
        API_CALLS.postComments(id, comment)
            .then((response) => {
                this.setState({
                    selectedVideo: {
                        ...this.state.selectedVideo, comments: [response.data, ...this.state.selectedVideo.comments]
                    }
                })
            })
            .catch(error => {
                console.log(error);
            })
        event.target.reset()
    }

    handleClick = (commentId) => {
        const id = this.state.selectedVideo.id
        // axios.delete(`${API_URL}${PORT}${API_END_POINT}/${id}/comments/${commentId}`)
        API_CALLS.deleteComments(id, commentId)
            .then(response => {
                this.getVideoId(id)
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        if (!this.state.selectedVideo) {
            return window.setTimeout(() => {
                <h2>Gimme a chance boss</h2>
            }, 100)
        }

        const filteredVids = this.state.videoDetails.filter(vid => vid.id !== this.state.selectedVideo.id);

        return (
            <div className="Home">
                <Videoplayer selectedVideo={this.state.selectedVideo} />
                <div className="Home-container">
                    <div className="Home__left-container">
                        <Hero selectedVideo={this.state.selectedVideo} />
                        <Comments
                            selectedVideo={this.state.selectedVideo}
                            handleClick={this.handleClick}
                            handleSubmit={this.handleSubmit}
                        />
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