import './buttons.css'
import { ChangingNumber,Undo, Reset} from '../sodagoi/sodagoi'
import {ChangingRound, ChangingTicketColor} from'../panel/panel'

function Buttons(){
    
    
    
    return(
        <div className="buttons">
        <div className="editbtn">
            <button onClick={e=>{Reset(document.getElementsByClassName("soloto"))}} id="resetButton"  className="reset">Reset</button>
            <button onClick={e=>{Undo(document.getElementsByClassName("soloto"))}} id="undoButton" className="undo">Undo</button>
            <div className="input_vongloai">
                <input type="text" name="vongloaithaydoi" id="inputVL" className="vongloai_text thenhap"/>
                <button type="submit" onClick={e=>ChangingRound(document.getElementById('inputVL').value)} className="vongloai_vong">Vòng</button>
            </div>
            <div className="mauve">
                <input type="mauve_text" id="mauveloto" className="thenhapmau"/>
                <button onClick={e=>ChangingTicketColor(document.getElementById("mauveloto").value)} className="mauve_ve" >Vé</button>
            </div>
            <div className="buttonso">
                <button onClick={e=> ChangingNumber(document.getElementById('so1').value, document.getElementById('so1').id)} id="so1" value="01" className="soloto">01</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so2').value , document.getElementById('so2').id)} id="so2" value="02" className="so2 soloto">02</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so3').value , document.getElementById('so3').id)} id="so3" value="03" className="so3 soloto">03</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so4').value , document.getElementById('so4').id)} id="so4" value="04" className="so4 soloto">04</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so5').value , document.getElementById('so5').id)} id="so5" value="05" className="so5 soloto">05</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so6').value , document.getElementById('so6').id)} id="so6" value="06" className="so6 soloto">06</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so7').value , document.getElementById('so7').id)} id="so7" value="07" className="so7 soloto">07</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so8').value , document.getElementById('so8').id)} id="so8" value="08" className="so8 soloto">08</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so9').value , document.getElementById('so9').id)} id="so9" value="09" className="so9 soloto">09</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so10').value , document.getElementById('so10').id)} id="so10" value="10" className="so10 soloto">10</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so11').value , document.getElementById('so11').id)} id="so11" value="11" className="so11 soloto">11</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so12').value , document.getElementById('so12').id)} id="so12" value="12" className="so12 soloto">12</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so13').value , document.getElementById('so13').id)} id="so13" value="13" className="so13 soloto">13</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so14').value , document.getElementById('so14').id)} id="so14" value="14" className="so14 soloto">14</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so15').value , document.getElementById('so15').id)} id="so15" value="15" className="so15 soloto">15</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so16').value , document.getElementById('so16').id)} id="so16" value="16" className="so16 soloto">16</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so17').value , document.getElementById('so17').id)} id="so17" value="17" className="so17 soloto">17</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so18').value , document.getElementById('so18').id)} id="so18" value="18" className="so18 soloto">18</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so19').value , document.getElementById('so19').id)} id="so19" value="19" className="so19 soloto">19</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so20').value , document.getElementById('so20').id)} id="so20" value="20" className="so20 soloto">20</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so21').value , document.getElementById('so21').id)} id="so21" value="21" className="so21 soloto">21</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so22').value , document.getElementById('so22').id)} id="so22" value="22" className="so22 soloto">22</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so23').value , document.getElementById('so23').id)} id="so23" value="23" className="so23 soloto">23</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so24').value , document.getElementById('so24').id)} id="so24" value="24" className="so24 soloto">24</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so25').value , document.getElementById('so25').id)} id="so25" value="25" className="so25 soloto">25</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so26').value , document.getElementById('so26').id)} id="so26" value="26" className="so26 soloto">26</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so27').value , document.getElementById('so27').id)} id="so27" value="27" className="so27 soloto">27</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so28').value , document.getElementById('so28').id)} id="so28" value="28" className="so28 soloto">28</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so29').value , document.getElementById('so29').id)} id="so29" value="29" className="so29 soloto">29</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so30').value , document.getElementById('so30').id)} id="so30" value="30" className="so30 soloto">30</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so31').value , document.getElementById('so31').id)} id="so31" value="31" className="so31 soloto">31</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so32').value , document.getElementById('so32').id)} id="so32" value="32" className="so32 soloto">32</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so33').value , document.getElementById('so33').id)} id="so33" value="33" className="so33 soloto">33</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so34').value , document.getElementById('so34').id)} id="so34" value="34" className="so34 soloto">34</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so35').value , document.getElementById('so35').id)} id="so35" value="35" className="so35 soloto">35</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so36').value , document.getElementById('so36').id)} id="so36" value="36" className="so36 soloto">36</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so37').value , document.getElementById('so37').id)} id="so37" value="37" className="so37 soloto">37</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so38').value , document.getElementById('so38').id)} id="so38" value="38" className="so38 soloto">38</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so39').value , document.getElementById('so39').id)} id="so39" value="39" className="so39 soloto">39</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so40').value , document.getElementById('so40').id)} id="so40" value="40" className="so40 soloto">40</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so41').value , document.getElementById('so41').id)} id="so41" value="41" className="so41 soloto">41</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so42').value , document.getElementById('so42').id)} id="so42" value="42" className="so42 soloto">42</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so43').value , document.getElementById('so43').id)} id="so43" value="43" className="so43 soloto">43</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so44').value , document.getElementById('so44').id)} id="so44" value="44" className="so44 soloto">44</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so45').value , document.getElementById('so45').id)} id="so45" value="45" className="so45 soloto">45</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so46').value , document.getElementById('so46').id)} id="so46" value="46" className="so46 soloto">46</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so47').value , document.getElementById('so47').id)} id="so47" value="47" className="so47 soloto">47</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so48').value , document.getElementById('so48').id)} id="so48" value="48" className="so48 soloto">48</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so49').value , document.getElementById('so49').id)} id="so49" value="49" className="so49 soloto">49</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so50').value , document.getElementById('so50').id)} id="so50" value="50" className="so50 soloto">50</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so51').value , document.getElementById('so51').id)} id="so51" value="51" className="so51 soloto">51</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so52').value , document.getElementById('so52').id)} id="so52" value="52" className="so52 soloto">52</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so53').value , document.getElementById('so53').id)} id="so53" value="53" className="so53 soloto">53</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so54').value , document.getElementById('so54').id)} id="so54" value="54" className="so54 soloto">54</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so55').value , document.getElementById('so55').id)} id="so55" value="55" className="so55 soloto">55</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so56').value , document.getElementById('so56').id)} id="so56" value="56" className="so56 soloto">56</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so57').value , document.getElementById('so57').id)} id="so57" value="57" className="so57 soloto">57</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so58').value , document.getElementById('so58').id)} id="so58" value="58" className="so58 soloto">58</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so59').value , document.getElementById('so59').id)} id="so59" value="59" className="so59 soloto">59</button>
                <button onClick={e=> ChangingNumber(document.getElementById('so60').value , document.getElementById('so60').id)} id="so60" value="60" className="so60 soloto">60</button>
            </div>
        </div>
    </div>
    )
}
export default Buttons