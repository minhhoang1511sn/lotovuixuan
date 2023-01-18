import background from '../static/img/ok-01.png';
import './backgroundimg.css'
function BackgroundImg(){
    return(
        <div className='backgroundimg'>
     <img src={background} className="hinhnen" alt=""/>
      </div>
    )
}
export default BackgroundImg;