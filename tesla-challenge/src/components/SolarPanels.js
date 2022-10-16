import React from 'react'
import './SolarPanels.css'

function SolarPanels() {
    return (
        <div>
            <div className='sectionsp'>
                <div className='section_text'>
                    <h1>Solar Panels</h1>
                    <p>Low Cost Solar Panels in America</p>
                </div>

                <div className='section_button'>
                    <div className='button_group'>
                        <button className='customOrderButton'>Order Now</button>
                        <button className='existingInventoryButton'>Learn More</button>
                    </div>
                    <svg className='section_arrow' xmlns='http://www.w3.org/2000/svg' fill="white" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                </div>
            </div>
        </div>
        
    )
}

export default SolarPanels