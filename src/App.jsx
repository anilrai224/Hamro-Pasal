import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Popular from './Components/Collections/Popular'
import Footer from './Components/Footer/Footer'
import Carousel from './Components/Carousel/Carousel'
import Video from './Components/Video/Video'
import Featured from './Components/Featured/Featured'
import Shop from './Components/Shop/Shop'

const App = () => {
  return (
    <>
      <Navbar/>
      <Carousel/>
      <Popular/>
      <Video/>
      <Featured/>
      <Shop/>
      <Footer/>
    </>
  )
}

export default App