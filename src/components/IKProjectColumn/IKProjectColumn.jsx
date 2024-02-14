import './IKProjectColumn.css';
import IKProjectMiniCard from '../IKProjectMiniCard/IKProjectMiniCard'

export default function IKProjectColumn() {
  return (
      <div className='columnContainer'>
          <IKProjectMiniCard />
          <IKProjectMiniCard />
          <IKProjectMiniCard />
      </div>
  )
}