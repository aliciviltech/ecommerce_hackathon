import React from 'react'
import './Section1.css'

const Section1 = () => {
  return (
    <div className='Section1'>
        <div className="leftCol col">
            <div className="image"><img src="/images/side_table1.png" alt="" /></div>
            <div className="text">
                <h2 className='headingH2'>Side Table</h2>
                <p className='anchorA1'>View More</p>
            </div>
        </div>
        <div className="rightCol col">
            <div className="image"><img src="/images/side_table2.png" alt="" /></div>
            <div className="text">
                <h2 className='headingH2'>Side Table</h2>
                <p className='anchorA1'>View More</p>
            </div>
        </div>
    </div>
  )
}

export default Section1