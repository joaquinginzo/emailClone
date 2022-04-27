import React from 'react'
import './Sidebar.scss'
import EmailIcon from '../../../assets/icons/email.png'
import TrashIcon from '../../../assets/icons/trash.png'

const Sidebar = ({emaildata,trashdata,displayTrash,displayInbox}) => {

  return (
    <div className='sidebar'>
        <ul className='sidebar__list'>
            <li className='sidebar__list__item' onClick={displayInbox}>
              <img src={EmailIcon} alt="" />
              <p>Inbox</p>
              <p className='sidebar__list_item-num'>{emaildata.length}</p>
            </li>
            <li className='sidebar__list__item' onClick={displayTrash}>
              <img src={TrashIcon} alt=""/>
              <p>Trash</p>
              <p className='sidebar__list_item-num'>{trashdata.length}</p>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar