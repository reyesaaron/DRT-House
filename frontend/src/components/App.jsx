import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Chatbot from './Chatbot'
import Homepage from '../screen/Homepage'
import Nav from './Nav';
import Booking from '../screen/Booking';
import Accomodation from '../screen components/Accomodation';
import Activities from '../screen/Activities';
import Covid from '../screen/Covid';
import Footer from './Footer';
import Contact from '../screen/Contact';

function App() {
  return (
      <Router>
        <div className='App'>
          <Nav/>
          <Chatbot />
          <Routes>
            <Route path='/' exact element={<Homepage />}/> 
            <Route path='/booking' element={<Booking />}/>
            <Route path='/activities' element={<Activities/>} />
            <Route path='/accomodation' element={<Accomodation/>} />
            <Route path='/protocol' element={<Covid/>} />
            <Route path='/contactus' element={<Contact/>} />
          </Routes>
          <Footer />
        </div>
      </Router>
  )
}

export default App