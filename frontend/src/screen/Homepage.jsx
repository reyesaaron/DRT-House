import * as React from 'react';
import Accomodation from '../screen components/LP3Accomodation';
import LandingPage1 from '../screen components/LandingPage1';
import LP2Info from '../screen components/LP2Info';
import LP4Moments from '../screen components/LP4Moments';
import LP5Location from '../screen components/LP5Location';

export default function BasicGrid() {
  return (
    <div>
      <LandingPage1 />
      <LP2Info />
      <Accomodation />
      <LP4Moments />
      <LP5Location />
    </div>
    
  );
}