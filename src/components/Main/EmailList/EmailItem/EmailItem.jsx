import React, { useState } from 'react'
import FacePicture from '../../../../assets/images/FacePicture.png'
import './EmailItem.scss'

const EmailItem = ({name,title,text,date,id,handleEmailDisplay}) => {

  const monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const [clicked, setClicked] = useState(false)

  const handleClick = (e) => {
    setClicked(true)
    handleEmailDisplay(id)
  }
  return (

    <div className={`email-item ${clicked? 'clicked' : ''}`} onClick={handleClick} >
        <img src={FacePicture} alt="" />
        <div className="email-item__data">
          <div className="email-item__data-header">
            <p>{name}</p>
            <p>{`${monthsArray[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`}</p>

          </div>
          <div className="email-item__data-body">
            <h4>{title}</h4>
            <p>{text.substring(0,80)}</p>

          </div>
        </div>
    </div>
  )
}

export default EmailItem