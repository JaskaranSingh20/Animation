import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react'

function Pg({timeline}) {

    const sq = useRef(null);

    useEffect(()=>{

        timeline.from(sq.current, {
            y: "100%",
            opacity: 0,
            scale: .5,
            duration:.5,
            delay: 1,
            rotate: 360
        })

    }, [])

  return (
    <div className='pg1'>
        <div className='square pg2' ref={sq}></div>
    </div>
  )
}

export default Pg