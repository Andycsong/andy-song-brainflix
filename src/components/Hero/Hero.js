import './Hero.scss'
import viewsIcon from '../../assets/Icons/Icon-views.svg'
import likesIcon from '../../assets/Icons/Icon-likes.svg'
import FormatDate from '../../utils/FormatDate.js'

function Hero({ selectedVideo }) {

    return (
        <div>
            <section>
                <article className="hero">
                    <div className="hero-container">
                        <h1 className="hero__title">{selectedVideo.title}</h1>
                        <div className="hero__data-container">
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
                        </div>
                        <p className="hero__description">{selectedVideo.description}</p>
                    </div>
                </article>
            </section>
        </div >
    )
}

export default Hero;

