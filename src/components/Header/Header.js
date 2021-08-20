import React, { Component } from 'react'
import './Header.scss'
import BrainFlixLogo from '../../assets/Logo/Logo-brainflix.svg'
import UploadButton from '../../assets/Icons/Icon-upload.svg'
import AvatarImage from '../../assets/Images/Mohan-muruge.jpg'
import SearchImage from '../../assets/Icons/Icon-search.svg'
import SearchBox from "../SearchBox/SearchBox";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-left-container">
                    <img src={BrainFlixLogo} className="header__logo" alt="hello" ></img>
                </div>
                <div className="header-right-container">
                    <SearchBox className="header__search" placeholder='Search' />
                    <div className="header__avatar-button">
                        <button className="header__button">
                            <img className="header__button-plus" src={UploadButton} alt="Upload button">
                            </img>UPLOAD</button>
                        <img src={AvatarImage} className="header__avatar" alt="Avatar for User"></img>
                    </div>

                </div>

            </div >
        )
    }
}

