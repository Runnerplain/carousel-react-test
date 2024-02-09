import './IKProjectFocusCard.css'
import picture2 from '../../assets/pictures/picture2.jpg'

export default function IKProjectFocusCard() {
  return (
    <div className='focusCardContainer'>
      <div className="focusBox">
        <img className='pictureFocus' src={picture2} alt="" />
        <div className="__overlay">
          <h3 className='titleProjectFocusCard'>Projet 1</h3>
          <p className='tagProjectFocusCard'>#tag1</p>
          <p className='descriptionFocusCard'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima beatae quae distinctio aliquid odit provident praesentium, eum quisquam ab dolore!</p>
          <p className='techUsingFocusCard'>Tecnos utilisées</p>
          <div className="logoTech"></div>
          <button>Découvrir le projet</button>
          </div>
      </div>
    </div>
  )
}