import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Chatbot from './Chatbot'
import Homepage from '../screen/Homepage'
import Nav from './Nav';
import Booking from '../screen/Booking';
import Accomodation from '../screen components/LP3Accomodation';



function App() {
  return (
      <Router>
        <div className='App'>
          <Nav/>
          <Chatbot />
          <Routes>
            <Route path='/' exact element={<Homepage />}/> 
            <Route path='/booking' element={<Booking />}/>
            <Route path='/accomodation' element={<Accomodation/>} />
          </Routes>
        </div>
      </Router>
  )
}

export default App