import './IKProjectsCardsColumnBefore.css'
import IKProjectMiniCard from '../IKProjectMiniCard/IKProjectMiniCard'


// First array with empty cards - filling up after "Focusing cards" pass to next Card. Need to check array in next column

export default function IKProjectsCardsColumnBefore() {
  return (
    <div className="columnContainer">
        <IKProjectMiniCard />
        <IKProjectMiniCard />
        <IKProjectMiniCard />
        <IKProjectMiniCard />
        <IKProjectMiniCard />
    </div>
  )
}