import * as React from 'react';
import Accomodation from '../screen components/Accomodation';
import LandingPage1 from '../screen components/LandingPage1';
import LP2Info from '../screen components/LP2Info';

export default function BasicGrid() {
  return (
    <div>
      <LandingPage1 />
      <LP2Info />
      <Accomodation />
    </div>
    
  );
}