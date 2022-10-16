import React from 'react'
import './Home.css'
import Section from './Section';
import ModelThree from './ModelThree'
import Modelx from './Model-x'
import Modely from './Model-y'
import SolarPanels from './SolarPanels';
import SolarRoof from './SolarRoof';
import Accessories from './Accessories';

function Home() {
  return (
    <div className='home'>
        <Section />
        <ModelThree />
        <Modelx />
        <Modely />
        <SolarPanels />
        <SolarRoof />
        <Accessories />
    </div>
  );
}

export default Home

