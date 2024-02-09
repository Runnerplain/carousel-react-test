import IKProjectMiniCard from '../IKProjectMiniCard/IKProjectMiniCard'
import './IKProjectsCardsColumnAfter.css'


// Next column with all projects before its pass to first column after focusing cards. Need to give props to first column


export default function IKProjectsCardsColumnAfter() {
  return (
    <div className='columnContainer'>
      <IKProjectMiniCard />
    </div>
  )
}