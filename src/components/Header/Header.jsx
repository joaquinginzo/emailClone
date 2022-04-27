import React from 'react'
import './Header.scss'
import Logo from '../../assets/icons/Logo.png'
import FacePicture from '../../assets/images/FacePicture.png'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img src={Logo} alt="" />
        <p>Relay<span className='header__span'>.io</span></p>
      </div>
      <img className= 'header__faceImage' src={FacePicture} alt="" />
    </header>
  )
}

export default Header