import './IKProjectFocusCard.css'
import picture2 from '../../assets/pictures/picture2.jpg'
import JsLogo from '../../assets/icons/JsLogo'
import NextLogo from '../../assets/icons/NextLogo'
import ReactLogo from '../../assets/icons/ReactLogo'
// Transition middle Card. Check Id in next column, take it and display it. After give props to first column.

export default function IKProjectFocusCard() {
  return (
    <div className='columnFocusCardContainer'>
      <div className="focusCard">
        <img className='pictureFocusCard' src={picture2} alt="" />
        <div className="content">
          <h3 className='titleProjectFocusCard'>Projet 1</h3>
          <p className='tagProjectFocusCard'>#tag1</p>
          <p className='descriptionFocusCard'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima beatae quae distinctio aliquid odit provident praesentium, eum quisquam ab dolore!</p>
          <p className='techUsingFocusCard'>Technos utilisées:</p>
          <div className="logoTech">
            <JsLogo />
            <NextLogo />
            <ReactLogo /> 
          </div>
        </div>
      </div>
        <button className='btnFocusCardDiscover'>Découvrir le projet</button>
    </div>
  )
}