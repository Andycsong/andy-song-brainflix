import AvatarImage from '../../assets/Images/Mohan-muruge.jpg'
import React from 'react'
import FormatDate from '../../utils/FormatDate'
import './Comments.scss'


const Comments = (props) => {
    const selectedVideo = props.commentsPosted;
    console.log(selectedVideo);
    return (
        <section>
            <article className='comments'>
                <h3 className='comments__title'>3 Comments</h3>
                <div className='comments__form-container'>
                    <img src={AvatarImage} className="comments__avatar" alt='Avatar for User'></img>
                    <form className='comments__form' id='commentsForm'>
                        <label for='commentsForm' className='comments__form-name'>JOIN THE CONVERSATION</label>
                        <textarea
                            form='commentsForm'
                            className='comments__form-input'
                            type='text'
                            name='commentName'
                            rows='5'
                        >
                        </textarea>
                        <button type='submit' form='commentsForm' className='comments__submit'>COMMENT</button>
                    </form>
                </div>
                <article className='display-comments'>
                    {selectedVideo.comments.map(comment => (
                        <div className='display-comments__card'>
                            <div className='display-comments__image'></div>
                            <div className='display-comments__info-container'>
                                <div className='display-comments__container'>
                                    <h3 className="display-comments__name">{comment.name}</h3>
                                    <div className='display-comments__date'>{FormatDate(comment.timestamp)}</div>
                                </div>
                                <p className='display-comments__comment'>{comment.comment}</p>
                            </div>
                        </div>
                    ))}
                </article>
            </article >
        </section >
    );
}

export default Comments;