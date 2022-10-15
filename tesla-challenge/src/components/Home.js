import React from 'react'
import './Home.css'
import Section from './Section';
import ModelThree from './ModelThree'
import Modelx from './Model-x'
import Modely from './Model-y'

function Home() {
  return (
    <div className='home'>
        <Section />
        <ModelThree />
        <Modelx />
        <Modely />
    </div>
  );
}

export default Home

