import React, { useEffect, useRef, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

function Header({timeline, ease}) {
    
    const [show, setShow] = useState(true);
    const logoRef = useRef(null);
    const aboutRef = useRef(null);
    const journalRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(()=>{
        if(window.innerWidth <= 600){
            setShow(false);
        }

        timeline.from(logoRef.current,.5, { opacity: 0, y: "-100%",})

        if(aboutRef.current && journalRef.current && contactRef.current ){

            timeline.from([aboutRef.current, journalRef.current, contactRef.current], 1, {
                opacity: 0,
                y: "-200%",
                stagger:{
                    amount: .4
                },
                delay: -.3,
                ease: ease,
            })
        }
    }, [])

  return (
    <div className='header'>
        <div className='logo' ref={logoRef}>Logo</div>
        {
            show ? <div className='menu'>
            <span className='menu_item' ref={aboutRef}>About</span>
            <span className='menu_item' ref={journalRef}>Journal</span>
            <span className='menu_item' ref={contactRef}>Contact</span>
            </div>
            : <MenuIcon/>
        }
        
    </div>
  )
}

export default Header