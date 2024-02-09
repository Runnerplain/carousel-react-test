import './IKProjectMiniCard.css'
import picture1 from '../../assets/pictures/picture1.jpg';


// Card Component for each projects in first or next column. Load all unique data project to display in focus Card. 

export default function IKProjectMiniCard() {
  return (
    <div className='pictureContainer'>
      <img className='pictureMini' src={picture1} alt="" />
      <p className='titlePicture'>Lorem</p>
    </div>
  )
}