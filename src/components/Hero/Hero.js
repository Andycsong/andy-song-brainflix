import './Hero.scss'
import viewsIcon from '../../assets/Icons/Icon-views.svg'
import likesIcon from '../../assets/Icons/Icon-likes.svg'

const Hero = (props) => {
    const selectedVideo = props.hero;

    const FormatDate = (time) => {
        const formatter = new Intl.DateTimeFormat('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
        const dateFormat = new Date(time);
        return formatter.format(dateFormat)
    }

    return (
        <div>
            <section>
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
                            <h3 className="hero__channel">By {selectedVideo.channel}</h3>
                            <div className="hero__timestamp">{FormatDate(selectedVideo.timestamp)}</div>
                        </div>
                        <div className="hero__view-container">
                            <div className="hero__views">
                                <img className='hero__view-icon' alt="icon shaped as an eye " src={viewsIcon}></img>
                                {selectedVideo.views}</div>
                            <div className="hero__likes">
                                <img className='hero__like-icon' alt="icon shaped as an heart" src={likesIcon}></img>
                                {selectedVideo.likes}</div>
                        </div>
                        <hr className='hero__divider'></hr>
                        <p className="hero__description">{selectedVideo.description}</p>
                    </div>
                </article>
            </section>
        </div >
    )
}

export default Hero;

