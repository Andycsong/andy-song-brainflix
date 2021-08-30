import AvatarImage from '../../assets/Images/Mohan-muruge.jpg'
import React from 'react'
import FormatDate from '../../utils/FormatDate.js'
import './Comments.scss'

const Comments = ({ selectedVideo, handleClick, handleSubmit }) => {

    return (
        <section>
            <article className='comments'>
                <h3 className='comments__title'>{selectedVideo.comments.length + ' Comments'}</h3>
                <div className='comments__form-container'>
                    <img src={AvatarImage} className="comments__avatar" alt='Avatar for User'></img>
                    <form className='comments__form' id='commentsForm' onSubmit={handleSubmit}>
                        <label htmlFor='commentsForm' className='comments__form-name'>JOIN THE CONVERSATION</label>
                        <div className='comments__data-container'>

                            <textarea
                                form='commentsForm'
                                className='comments__form-input'
                                name='commentForm'
                                placeholder='Add a comment'
                            >
                            </textarea>
                            <button type='submit' form='commentsForm' className='comments__submit'>COMMENT</button>
                        </div>
                    </form>
                </div>
            </article>
            <article className='display-comments'>
                {selectedVideo.comments.sort((initial, newNew) => { return newNew.timestamp - initial.timestamp })
                    .map(comment => (
                        <div className='display-comments__card'>
                            <div className='display-comments__image'></div>
                            <div className='display-comments__info-container'>
                                <div className='display-comments__container'>
                                    <h3 className="display-comments__name">{comment.name}</h3>
                                    <div className='display-comments__date'>{FormatDate(comment.timestamp)}</div>
                                </div>
                                <p className='display-comments__comment'>{comment.comment}</p>
                                <button className='display-comments__delete' onClick={() => handleClick(comment.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
            </article >
        </section >
    );

}

export default Comments;