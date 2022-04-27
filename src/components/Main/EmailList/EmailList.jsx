import EmailItem from "./EmailItem/EmailItem"
import './EmailList.scss'
import FilterPanel from './FilterPanel/FilterPanel'


const EmailList = ({emailDataToDisplay,handleEmailDisplay}) => {

  
  return (
    <div className='emailList'>
        <FilterPanel/>
        {emailDataToDisplay.map((email)=> (<EmailItem name={email.name} date={email.date} text={email.text} title={email.title} key={email.id} id={email.id} handleEmailDisplay={handleEmailDisplay} />))}
    </div>
  )
}


export default EmailList