import React from 'react'
import Home from './Component/Home'
import WhGsap from './Component/WhGsap'
import HorizentalScroll from './Component/HorizentalScroll'
import Service1 from './Component/Service1'
import Brand from './Component/Brand'
import VideoCarosel from './Component/VideoCarosel'

const App = () => {
  return (
    <div className='bg-black'>
      <Home/>
      <WhGsap/>
      <HorizentalScroll/>
      <Service1/>
      <Brand/>
      <VideoCarosel/>
    </div>
  )
}

export default App