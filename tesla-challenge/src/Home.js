import React from 'react'
import './Home.css'
import Section from './components/Section';
import ModelThree from './components/ModelThree'
import Modelx from './components/Model-x'
import Modely from './components/Model-y'
import SolarPanels from './components/SolarPanels';
import SolarRoof from './components/SolarRoof';
import Accessories from './components/Accessories';

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

