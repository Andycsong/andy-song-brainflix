import React, { Component } from 'react'
import './Upload.scss'
import ThumbnailImage from '../../assets/Images/Upload-video-preview.jpg'

class Upload extends Component {
    render() {
        return (
            <section className="upload">
                <h2 className="upload__title">Upload Video</h2>
                <div className='upload__container'>
                    <h3 className='upload__thumbnail-title'>VIDEO THUMBNAIL</h3>
                    <img className='upload__thumbnail-image' src={ThumbnailImage}></img>
                </div>
                <div className='upload__info-container'>
                    <form className='upload__form' id='uploadForm'>
                        <label for='uploadForm' className='upload__info-title'>TITLE YOUR VIDEO
                            <input id='uploadForm' className='upload__form-name' type='text' placeholder='Add a title to your video'></input>
                        </label>
                        <label id='uploadForm' className='upload__form-description'>ADD A VIDEO DESCRIPTION

                            <textarea
                                form='uploadForm'
                                className='upload__form-input'
                                type='text'
                                name='commentName'
                                placeholder='Add a description of your video'
                            >
                            </textarea>

                        </label>
                        <div className='upload__data-container'>
                            <button type='submit' form='uploadForm' className='upload__submit'>PUBLISH</button>
                            <button type='reset' form='uploadForm' className='upload__cancel'>CANCEL</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}
export default Upload