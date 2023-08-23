import React, { useEffect, useRef } from 'react'
import Images from './Images'

function Content({timeline, ease}) {

    let h1 = useRef(null);
    let p = useRef(null);
    let btn = useRef(null);

    useEffect(()=>{

        timeline.from([h1.children, p, btn], {
            opacity: 0,
            y: 100,
            skewY: "20",
            stagger: {
                amount: .4
            }
        })
    }, [])

  return (
    <div className='container'>
        <div className="content">
                    <h1 className="content-inner-bold" ref={el => h1 = el}>
                        <div>Hard work beats talent</div>
                        <br />
                        <div>when talent doesn't work hard.</div>
                    </h1>
                    <p ref={el => p = el}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eius quo quibusdam maxime tenetur laborum hic officia aliquid quaerat facere.

                    </p>
                    <button ref={el => btn = el}>
                        Explore
                    </button>
        </div>

        <Images timeline={timeline} ease={ease}/>
    </div>
  )
}

export default Content