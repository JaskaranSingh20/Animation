import React, { useEffect, useRef} from 'react'
import SplitType from 'split-type'
import { gsap } from 'gsap';

function Loader({timeline, ease}) {

  let load = useRef(null);
    let fh1 = useRef(null);
    let sh1 = useRef(null);
    let th1 = useRef(null);
    let fth1 = useRef(null);

    useEffect(()=>{

      const text = new SplitType(fth1);
      const text2 = new SplitType(th1);
      const text3 = new SplitType(sh1);
      const text4 = new SplitType(fh1);

      let charFth = fth1.querySelectorAll(".char")
      let charth = th1.querySelectorAll(".char")
      let charsh = sh1.querySelectorAll(".char")
      let charfh = fh1.querySelectorAll(".char")
      // console.log(charFth);
     
        timeline.from(charFth, { y: "100",stagger: { amount: .08,}, opacity: 0 })
        .to(charFth, {y: "-125", stagger: { amount: .08,}, opacity: 0 })

        .from(charth, { y: "50",stagger: { amount: .08,},opacity: 0} )
        .to(charth, { y: "-125",stagger: { amount: .08,},opacity: 0})

        .from(charsh, { y: "50",stagger: { amount: .08 }, opacity: 0})
        .to(charsh, { y: "-125",stagger: { amount: .08,},opacity: 0})

        .from(charfh, { y: "50",stagger: { amount: .08 }, opacity: 0})
        .to(charfh, { y: "-125",stagger: { amount: .08,},opacity: 0})

        .to( load,{ display: "none", height: 0 ,color: '#dadada', duration: .5,
           onStart: function(){
             document.querySelector("html").style.overflowY="scroll";
           }
         })
    },[])

  return (
    <div className='main' ref={el => load = el}>
        <div className='top'>
            <h3>Jaskaran Singh <br/>
            Portfolio &#169;2023</h3>

            <h1 className='special' ref={el => fh1 = el}>100</h1>
        </div>
        <h1 ref={el => sh1 = el}> 81</h1>
        <h1 ref={el => th1 = el}>35</h1>
        <h1 ref={el => fth1 = el}>00</h1>
    </div>
  )
}

export default Loader