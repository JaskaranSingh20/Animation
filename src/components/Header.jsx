import React, { useEffect, useRef } from 'react'

function Header({timeline, ease}) {

    const logoRef = useRef(null);
    const aboutRef = useRef(null);
    const journalRef = useRef(null);
    const contactRef = useRef(null);


    useEffect(()=>{

        timeline.from(logoRef.current,.5, {
            opacity: 0,
            y: "-100%",
        })
        timeline.from([aboutRef.current, journalRef.current, contactRef.current], 1, {
            opacity: 0,
            y: "-200%",
            stagger:{
                amount: .4
            },
            delay: -.3,
            ease: ease
        })
    }, [])

  return (
    <div className='header'>
        <div className='logo' ref={logoRef}>Logo</div>
        <div className='menu'>
            <span className='menu_item' ref={aboutRef}>About</span>
            <span className='menu_item' ref={journalRef}>Journal</span>
            <span className='menu_item' ref={contactRef}>Contact</span>
            </div>
    </div>
  )
}

export default Header