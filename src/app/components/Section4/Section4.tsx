import React from 'react'
import './Section4.css'
import { AllBlogsData } from '@/utils/AllBlogsData'
import PrimaryBlogCard from '../BlogCards/PrimaryBlogCard'

const Section4 = () => {
  return (
    <div className='Section4'>
            <div className="sectionHeading px-4">
                <h1 className='headingH2'>Our Blogs</h1>
                <p className='paragraphP2'>Find a bright ideal to suit your taste with our great selection</p>
            </div>
            <div className="productsList flex flex-wrap gap-4 justify-center mt-10">
                {
                    AllBlogsData.slice(0,3).map((blog)=>{
                        return(
                            <PrimaryBlogCard key={blog.id} blog={blog} />
                        )
                    })
                }
            </div>
            <div className="sectionFooter">
                <p className='anchorA1 mt-10'>View All Post</p>
            </div>
    </div>
  )
}

export default Section4