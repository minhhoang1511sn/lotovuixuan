import hoadao from '../static/img/hoa-dao.gif';
import thantai from '../static/img/242_bkcxcvc.gif';
import './header.css'

function Header(){
    return(
        <div className="header">
        <img src={hoadao}  alt="" className="hoamai"/>
        <img src={thantai}  alt="" className="thantai"/>
         </div> 
    )
}
export default Header;