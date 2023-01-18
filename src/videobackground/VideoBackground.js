import video from '../static/video/temp.mp4';
function VideoBackground(){
   return(<video playsInline  autoPlay muted loop id="myVideo">
   <source src={video} type="video/mp4"/>
 </video>) 
}
export default VideoBackground;