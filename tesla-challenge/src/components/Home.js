import React from 'react'
import './Home.css'
import Section from './Section';

function Home() {
  return (
    <div className='home'>
        <Section 
            title="Model S" 
            description="Order Online for Touchless Delivery"
            //due to styled-component not working with node I cannot change the background image to the appropriate model
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />

        <Section type="text/css"
            title="Model 3" 
            description="Order Online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />

        <Section 
            title="Model X" 
            description="Order Online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />

        <Section 
            title="Model Y" 
            description="Order Online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
        />
    </div>
  );
}

export default Home

