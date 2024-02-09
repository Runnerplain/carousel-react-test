import './IKProjectsDisplayer.css'
import IKProjectsCardsColumnBefore from '../IKProjectsCardsColumnBefore/IKProjectsCardsColumnBefore'
import IKProjectFocusCard from '../IKProjectFocusCard/IKProjectFocusCard'
import IKProjectsCardsColumnAfter from "../IKProjectsCardsColumnAfter/IKProjectsCardsColumnAfter"

// Displayer for all carousel system

export default function IKProjectsDisplayer() {
  return (
    <div className='wrapper'>
      <IKProjectsCardsColumnBefore />
      <IKProjectFocusCard />
      <IKProjectsCardsColumnAfter />
    </div>
  )
}