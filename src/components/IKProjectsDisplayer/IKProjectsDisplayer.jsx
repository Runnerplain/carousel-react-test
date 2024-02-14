import './IKProjectsDisplayer.css'
import '../IKProjectColumn/IKProjectColumn'
import IKProjectFocusCard from '../IKProjectFocusCard/IKProjectFocusCard'
import IKProjectColumn from '../IKProjectColumn/IKProjectColumn'

// Displayer for all carousel system

export default function IKProjectsDisplayer() {
  return (
    <div className='wrapper'>
      <IKProjectColumn />
      <IKProjectFocusCard />
      <IKProjectColumn />
    </div>
  )
}