import React from 'react'
import './Section1.css'
import Image from 'next/image'
import Link from 'next/link'

const Section1 = () => {
    return (
        <div className='Section1'>
            <div className="leftCol col">
                <div className="image"><Image className='tableImage' src="/images/side_table1.png" alt="tableImage" width={400} height={400} /></div>
                <div className="text">
                    <h2 className='headingH2'>Side Table</h2>
                    <Link href={'/pages/shop'}> <p className='anchorA1'>View More</p></Link>
                </div>
            </div>
            <div className="rightCol col">
                <div className="image"> <Image className='tableImage' src="/images/side_table2.png" alt="tableImage" width={400} height={400} /></div>
                <div className="text">
                    <h2 className='headingH2'>Side Table</h2>
                    <Link href={'/pages/shop'}> <p className='anchorA1'>View More</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Section1