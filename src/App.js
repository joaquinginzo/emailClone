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
  const [emailDataToDisplay, setEmailDataToDisplay] = useState(emaildata)
  const [emailIdToDisplay,setEmailIdToDisplay] = useState(0)
  const [emailToDisplay,setEmailToDisplay] = useState(emailDataToDisplay[emailIdToDisplay])
  
 
  const displayInbox = () => {
    setEmailDataToDisplay(emaildata)
    setEmailToDisplay(emaildata[0])
  }

  const displayTrash = () => {
    setEmailDataToDisplay(trashdata)
    setEmailToDisplay(trashdata[0])
  }

  const handleEmailDisplay = (id) => {
    const emailArray = emailDataToDisplay
    const emailIndex = emailArray.map(email=>email.id).indexOf(id)
    setEmailIdToDisplay(emailIndex)
    setEmailToDisplay(emailArray[emailIndex])
    console.log(emailIndex)
  }

  const displayEmail = () => {
    setEmailToDisplay(emailDataToDisplay[emailIdToDisplay])
  }

  const handleDelete = (id) => {
    const emailArray = emailDataToDisplay
    const emailIndex = emailArray.map(email=>email.id).indexOf(id)
    let trashcopy = [...trashdata]
    let inboxcopy = [...emaildata]
    trashcopy.push(emailArray[emailIndex])
    inboxcopy.splice(emailIndex,1)
    setEmailData(inboxcopy)
    setEmailDataToDisplay(inboxcopy)
    setTrashData(trashcopy)
  }

  const handleRestore = (id) => {
    const emailArray = emailDataToDisplay
    const emailIndex = emailArray.map(email=>email.id).indexOf(id)
    let trashcopy = [...trashdata]
    let inboxcopy = [...emaildata]
    inboxcopy.push(emailArray[emailIndex])
    trashcopy.splice(emailIndex,1)
    setEmailData(inboxcopy)
    setEmailDataToDisplay(inboxcopy)
    setTrashData(trashcopy)
  }

  const handleForward = (id) => {
    const emailArray = [...emailDataToDisplay]
    const emailIndex = emailArray.map(email=>email.id).indexOf(id)
    if (emailArray[emailIndex+1] !== undefined) {
      setEmailIdToDisplay(emailIndex+1)
      setEmailToDisplay(emailArray[emailIndex+1])
    } else {
      setEmailIdToDisplay(emailIndex)
      setEmailToDisplay(emailArray[emailIndex])
    }
  }
  
  const handleBackwards = (id) => {
    const emailArray = [...emailDataToDisplay]
    const emailIndex = emailArray.map(email=>email.id).indexOf(id)
    if (emailArray[emailIndex-1] !== undefined) {
      setEmailIdToDisplay(emailIndex-1)
      setEmailToDisplay(emailArray[emailIndex-1])
    } else {
      setEmailIdToDisplay(emailIndex)
      setEmailToDisplay(emailArray[emailIndex])
    }
  }

  useEffect(displayEmail,[emailIdToDisplay,emailDataToDisplay,emaildata,trashdata])


  return (
    <div className="App">
        <Header/>
        <Main emaildata={emaildata}>
          <Sidebar  emaildata={emaildata} trashdata={trashdata} displayInbox={displayInbox} displayTrash={displayTrash}/>
          <EmailList emailDataToDisplay={emailDataToDisplay} emaildata={emaildata} trashdata={trashdata} handleEmailDisplay={handleEmailDisplay}/>
          <EmailDisplay name={emailToDisplay.name} date={emailToDisplay.date} text={emailToDisplay.text} title={emailToDisplay.title} key={emailToDisplay.id} id={emailToDisplay.id} handleDelete={handleDelete} handleForward={handleForward} handleBackwards={handleBackwards} handleRestore={handleRestore}/>
        </Main>
    </div>
  );
}

export default App;
