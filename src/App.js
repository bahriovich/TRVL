import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/Intro'
import Destination from './Components/Destinations/Destination'
import Service from './Components/Services/Service'
import Type from './Components/Types/Type'
import Testimonials from './Components/Testimonials/Testimonials';
import Subscribe from './Components/Subscribe/Subscribe';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>

      <div className="App" >
        <Navbar />
        <Intro />
        <Destination />
        <Service />
      </div>
      <Type style={{"Zindex": "1000"}} />
      <div className="App">
        <Testimonials />
        <Subscribe />
        <Footer />
      </div>
    </>
  )
}

export default App