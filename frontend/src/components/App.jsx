import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Chatbot from './Chatbot'
import Homepage from '../screen/Homepage'
import Nav from './Nav';
import Booking from '../screen/Booking';
import Activities from '../screen/Activities';
import Covid from '../screen/Covid';
import Footer from "../components/Footer";
import Contact from '../screen/Contact';
import Tour from "../screen/Tour";
import LP3Accomodationv2 from '../screen components/LP3Accomodationv2';


function App() {
  return (
      <Router>
        <div className='App'>
          <Nav/>
          <Chatbot />
          <Routes>
            <Route path='/' exact element={<Homepage />}/> 
            <Route path='/booking' element={<Booking />}/>
            <Route path='/accomodation' element={<LP3Accomodationv2 />} />
            <Route path='/activities' element={<Activities/>} />
            <Route path='/tour' element={<Tour />} />
            <Route path='/protocol' element={<Covid/>} />
            <Route path='/contacts' element={<Contact/>} />
          </Routes>
          <Footer />
        </div>
      </Router>
  )
}

export default App