import './Hero.scss'

const Hero = (props) => {
    const selectedVideo = props.hero;

    return (
        <div>
            <article className="hero">
                <video controls
                    className="hero__video"
                    poster={selectedVideo.image}
                    src={selectedVideo.video}
                    width='100%'>
                </video>
                <div className="hero-container">
                    <h2 className="hero__title">{selectedVideo.title}</h2>
                    <div className="hero__channel-container">
                        <div className="hero__channel">{selectedVideo.channel}</div>
                        <div className="hero__timestamp">{selectedVideo.timestamp}</div>
                    </div>
                    <div className="hero__view-container">
                        <div className="hero__views">{selectedVideo.views}</div>
                        <div className="hero__likes">{selectedVideo.likes}</div>
                    </div>
                    <p className="hero__description">{selectedVideo.description}</p>
                </div>

            </article>
        </div >
    )
}

export default Hero;

