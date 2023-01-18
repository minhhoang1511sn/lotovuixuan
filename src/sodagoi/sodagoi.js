import { useState } from 'react';
import './sodagoi.css'
import '../buttons/buttons.js'
var  ChangingNumber = null ;
var Undo = null;
var Reset = null;
function Sodagoi(){
    const [number,setNumber] = useState([]);
    ChangingNumber = function(newNumber, idNewNum){
        setNumber(prev=>[...prev,newNumber])
        document.getElementById(idNewNum).disabled = true;
        console.log(newNumber)
    }
    Undo = function(val){
        var list = val;
        for (let item of list) {
            if(item.value === number[number.length-1])
            {
                item.disabled = false;
                break;
            }
        }
        number.pop()
        setNumber([...number])    
    }
    Reset = function(val){
        var list = val;
        for (let item of list) {
            if(item.disabled )
            {
                item.disabled = false;
            }
        }
        number.forEach(()=>{
            number.pop()
        })
        setNumber([])
    }

    var check = false;
    return(
        <div className="sodagoi">
        <div htmlFor="vongloaithaydoi" id="sovuagoi" className="sovuagoi">
            { number[number.length-1] }
        </div>
        <div id="sodagoielm" className="cacsodagoi">
          <ul className="danhsachsodagoi">
           <textarea  value={number.toString()}></textarea> 
          </ul>
        </div>
    </div>
    )
}
export {ChangingNumber,Undo, Reset}
export default Sodagoi;