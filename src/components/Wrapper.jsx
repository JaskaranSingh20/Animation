import React from 'react'
import Header from './Header'
import Content from './Content'

function Wrapper({timeline, ease}) {

  return (
    <div className='wrapper' >
        <Header timeline={timeline} ease={ease}/>
        <Content timeline={timeline} ease={ease}/>
    </div>
  )
}

export default Wrapper