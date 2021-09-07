import React, { Component } from 'react'
import './Upload.scss'
import ThumbnailImage from '../../assets/Images/Upload-video-preview.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { API_URL, API_END_POINT, PORT } from '../../utils/API';

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
        if (!this.state.title || !this.state.description) {
            return false;
        }
        return true;
    }

    submit = (e) => {
        e.preventDefault();
        if (this.isValidated()) {
            axios.post(`${API_URL}${PORT}${API_END_POINT}`, {
                title: this.state.title,
                "description": this.state.description,
                "video": 'https://project-2-api.herokuapp.com/stream',
                "timestamp": Date.now(),
            })
                .then(res => {
                    window.setTimeout(() => {
                        alert(`Your video : ${this.state.title} has been uploaded. Press OK to go back to Home page `);
                        this.props.history.push('/')
                    }, 500)
                })
                .catch(err => console.log(err))
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
                <h1 className="upload__title">Upload Video</h1>
                <div className='upload__desktop-container'>
                    <div className='upload__container'>
                        <h3 className='upload__thumbnail-title'>VIDEO THUMBNAIL</h3>
                        <img className='upload__thumbnail-image' alt='chosen thumbnail' src={ThumbnailImage}></img>
                    </div>
                    <div className='upload__info-container'>
                        <form className='upload__form' id='uploadForm' onSubmit={this.submit}>
                            <label htmlFor='uploadForm' className='upload__info-title'>TITLE YOUR VIDEO
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
                </div>
            </section >
        )
    }
}
export default Upload