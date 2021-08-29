import React, { Component } from 'react'
import './Upload.scss'
import ThumbnailImage from '../../assets/Images/Upload-video-preview.jpg'
import { Link } from 'react-router-dom'

class Upload extends Component {
    state = {
        title: '',
        description: '',
    }

    changed = (e) => {
        let isValidated = this.isValidated();
        console.log(isValidated);

        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    isValidated = () => {
        if (
            !this.state.title ||
            !this.state.description
        ) {
            return false;
        }
        return true;
    }

    submit = (e) => {
        e.preventDefault();
        if (this.isValidated()) {
            alert(`Your video : ${this.state.title} has been uploaded. Press OK to go back to Home page `);

            window.setTimeout(() => {
                this.props.history.push('/')
            }, 500)

        } else {
            alert("Failed to upload video. Check if your form has been completed")
        }

    };

    cancel = (e) => {
        e.preventDefault();
        this.setState({
            title: '',
            description: ''
        })
    }


    render() {
        return (
            <section className="upload">
                <h2 className="upload__title">Upload Video</h2>
                <div className='upload__container'>
                    <h3 className='upload__thumbnail-title'>VIDEO THUMBNAIL</h3>
                    <img className='upload__thumbnail-image' alt='chosen thumbnail' src={ThumbnailImage}></img>
                </div>
                <div className='upload__info-container'>
                    <form className='upload__form' id='uploadForm' onSubmit={this.submit}>
                        <label for='uploadForm' className='upload__info-title'>TITLE YOUR VIDEO
                            <input
                                id='uploadForm-name'
                                className='upload__form-name'
                                type='text'
                                name='title'
                                placeholder='Add a title to your video'
                                onChange={this.changed}
                                value={this.state.title}
                            >
                            </input>
                        </label>
                        <label id='uploadForm' className='upload__form-description'>ADD A VIDEO DESCRIPTION
                            <textarea
                                id='uploadform-description'
                                className='upload__form-input'
                                type='text'
                                name='description'
                                placeholder='Add a description of your video'
                                onChange={this.changed}
                                value={this.state.description}
                            >
                            </textarea>
                        </label>
                        <div className='upload__data-container'>
                            <Link to='/' onClick={this.submit}>
                                <button type='submit' form='uploadForm' className='upload__submit'>PUBLISH</button>
                            </Link>
                            <button type='submit' onClick={this.cancel} form='uploadForm' className='upload__cancel'>CANCEL</button>
                        </div>
                    </form>
                </div>
            </section >
        )
    }
}
export default Upload