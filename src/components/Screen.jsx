import React, {useEffect, useRef} from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Screen() {


  return (
    <div id="page">
            <div id="loop">
                <h1><b>CYBER</b> FICTION IS THE <b><i>REAL</i></b><span>STORY</span> IN THE <span><i>METAVERSE.</i></span></h1>
                <h1><b>CYBER</b> FICTION IS THE <b><i>REAL</i></b><span>STORY</span> IN THE <span><i>METAVERSE.</i></span></h1>
                <h1><b>CYBER</b> FICTION IS THE <b><i>REAL</i></b><span>STORY</span> IN THE <span><i>METAVERSE.</i></span></h1>
            </div>
            <h3 className="left">CYBERFICTION AIMS TO BE A DECENTRALIZED COMMUNITY THAT CAN<br/> CREATE NEW VALUES AND PROFITS THROUGH PLAY IN THE VIRTUAL<br/> WORLD.</h3>
            <h3 className="right">사이버픽션은 가상 세계에서 놀이를 통해 새로운 가치와 이윤을 창조할<br/> 수 있는 탈중앙화 커뮤니티를 지향합니다.</h3>
            <b className="down">...SCROLL TO READ</b>
            <canvas></canvas>
    </div>
  )
}

export default Screen