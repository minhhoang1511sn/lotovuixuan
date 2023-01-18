import { useState } from 'react';
import './panel.css'

var ChangingRound = null;
var ChangingTicketColor= null;
function Panel(){
    const [numberRound,setNumberRound] = useState('01')
    ChangingRound = function(num){
        if(Number(num))
        setNumberRound(num)
    }
    ChangingTicketColor = function(val){
        if(val === "v"){
            document.getElementById("omauve").style = "background-color: yellow";
        }
        else if(val==="l")
        {
            document.getElementById("omauve").style = "background-color: green";
        }
        else if(val==="d")
        {
            document.getElementById("omauve").style = "background-color: blue";
        }
        else if(val==="l")
        {
            document.getElementById("omauve").style = "background-color: pink";
        }
        else{
            alert("giá trị nhập không hợp lệ! Nhập màu tương ứng: (v - vàng, d - xanh dương, l - xanh lá, h- hồng)")
        }
    }
    return(
        <div className="panel">
        <h1 id="vongloaiso" className="vongloai">{numberRound}</h1>
        <div id="omauve" className="square"></div>
        </div>
    )
}
export {ChangingRound, ChangingTicketColor}
export default Panel;