import React from 'react'
import './Section.css'

function Section() {
    return (
        <div>
            <div className='section'>
                <div className='section_text'>
                    <h1>Model S</h1>
                    <p>Order Online for Touchless Delivery</p>
                </div>

                <div className='section_button'>
                    <div className='button_group'>
                        <button className='customOrderButton'>Custom Order</button>
                        <button className='existingInventoryButton'>Existing Inventory</button>
                    </div>
                    <svg className='section_arrow' xmlns='http://www.w3.org/2000/svg' fill="white" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                </div>
            </div>
        </div>
        
    )
}

export default Section