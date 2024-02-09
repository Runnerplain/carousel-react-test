import './IKProjectMiniCard.css'
import picture1 from '../../assets/pictures/picture1.jpg';


export default function IKProjectMiniCard() {
  return (
    <div className='pictureContainer'>
      <img className='pictureMini' src={picture1} alt="" />
      <p className='titlePicture'>Lorem</p>
    </div>
  )
}