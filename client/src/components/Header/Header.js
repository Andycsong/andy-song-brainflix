import React, { Component } from 'react'
import './Header.scss'
import BrainFlixLogo from '../../assets/Logo/Logo-brainflix.svg'
import AvatarImage from '../../assets/Images/Mohan-muruge.jpg'
import SearchBox from "../SearchBox/SearchBox";
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className='header-container'>
                    <div className="header-left-container">
                        <Link to='/'>
                            <img src={BrainFlixLogo} className="header__logo" alt="hello" ></img>
                        </Link>
                    </div>
                    <div className="header-right-container">
                        <SearchBox className="header__search" placeholder='Search' />
                        <div className="header__avatar-button">
                            <Link to='/upload' className='header__upload-link'>
                                <button className="header__button">UPLOAD</button>
                            </Link>
                            <img src={AvatarImage} className="header__avatar" alt="Avatar for User"></img>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

