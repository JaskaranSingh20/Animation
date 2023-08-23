import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react'

function Page({timeline}) {

    const sq = useRef(null);

    useEffect(()=>{

        timeline.from(sq.current, {
            x: "-100%",
            opacity: 0,
            scale: .5,
            duration: 1,
            delay: 1,
            rotate: 360
        })

    }, [])

  return (
    <div className='pg1'>
        <div className='square' ref={sq}></div>
    </div>
  )
}

export default Page