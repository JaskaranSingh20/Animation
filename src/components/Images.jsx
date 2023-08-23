import React, { useEffect, useRef } from 'react'

function Images({timeline, ease}) {

    let img1 = useRef(null);
    let img2 =  useRef(null);
    let img3 = useRef(null);

    useEffect(()=>{

        timeline.from([img1, img2, img3], {
            opacity: 0,
            y: 100,
            scale: 1.8,
            stagger: {
                amount: 0.4
            }
        })
    }, [])

  return (
    <div className="images">
                <div className="box1" ref={el => img1 = el} ></div>
                <div className="box2" ref={el => img2 = el} ></div>
                <div className="box3" ref={el => img3 = el} ></div>
            </div>
  )
}

export default Images