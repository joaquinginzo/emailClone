import React from 'react'
import FacePicture from '../../../assets/images/FacePicture.png'
import './EmailDisplay.scss'
import Dots from '../../../assets/icons/dots.png'
import BlueArrow from '../../../assets/icons/blue-arrow.png'
import BlueTrash from  '../../../assets/icons/blue-trash.png'
import RightArrow from  '../../../assets/icons/right-arrow.png'
import LeftArrow from  '../../../assets/icons/left-arrow.png'


const EmailDisplay = ({name,title,text,date,id,handleForward, handleBackwards,handleDelete,handleRestore}) => {

  
  return (
    <div className='email-display'>
      <div className="email-display__header">
        <img src={FacePicture} alt="" />
        <div className="email-display__header-data">
          <h5>{name}</h5>
          <p>{name}@gmail.com</p>
        </div>
        <div className="email-display__header-control">
            <button><img src={Dots} alt="" /></button>
            <button onClick={()=>handleRestore(id)}><img src={BlueArrow} alt="" /></button>
            <button onClick={()=>handleDelete(id)}><img src={BlueTrash} alt="" /></button>
        </div>
      </div>
      <div className='email-display__body'>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <div className="email-display__body-control">
        <button onClick={()=>handleBackwards(id)}><img src={LeftArrow} alt="" /></button>
        <button onClick={()=>handleForward(id)}><img src={RightArrow} alt="" /></button>
      </div>
    </div>
  )
}

export default EmailDisplay