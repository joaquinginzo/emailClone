import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Main/Sidebar/Sidebar'
import EmailList from './components/Main/EmailList/EmailList'
import EmailData from './assets/data/EmailData'
import TrashData from './assets/data/TrashData'
import Main from './components/Main/Main'
import { useEffect, useState } from 'react'
import EmailDisplay from './components/Main/EmailDisplay/EmailDisplay'

function App() {

  const [emaildata, setEmailData] = useState(EmailData)
  const [trashdata, setTrashData] = useState(TrashData)
  const [emailDataToDisplay, setEmailDataToDisplay] = useState(EmailData)
  const [emailIdToDisplay,setEmailIdToDisplay] = useState(0)
  const [emailToDisplay,setEmailToDisplay] = useState(emailDataToDisplay[emailIdToDisplay])
  
 
  const displayInbox = () => {
    setEmailDataToDisplay(emaildata)
  }

  const displayTrash = () => {
    setEmailDataToDisplay(trashdata)
  }

  const handleEmailDisplay = (id) => {
    setEmailIdToDisplay(id)
    setEmailToDisplay(emailDataToDisplay[id])
  }

  const displayEmail = () => {
    setEmailToDisplay(emailDataToDisplay[emailIdToDisplay])
  }

  const handleForward = (id) => {
    emailIdToDisplay >= 0 ? setEmailIdToDisplay(emailIdToDisplay+1) : setEmailIdToDisplay(emailIdToDisplay)
  }
  
  const handleBackwards = (id) => {
    setEmailIdToDisplay(emailIdToDisplay-1)
  }

  useEffect(displayEmail,[emailIdToDisplay,emailDataToDisplay,emailToDisplay])

  console.log(emaildata)

  return (
    <div className="App">
        <Header/>
        <Main emaildata={emaildata}>
          <Sidebar  emaildata={emaildata} trashdata={trashdata} displayInbox={displayInbox} displayTrash={displayTrash}/>
          <EmailList emailDataToDisplay={emailDataToDisplay} emaildata={emaildata} trashdata={trashdata} handleEmailDisplay={handleEmailDisplay}/>
          <EmailDisplay name={emailToDisplay.name} date={emailToDisplay.date} text={emailToDisplay.text} title={emailToDisplay.title} key={emailToDisplay.id} id={emailToDisplay.id} handleForward={handleForward} handleBackwards={handleBackwards}/>
        </Main>
    </div>
  );
}

export default App;
