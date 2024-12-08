import React from 'react'

interface PrimaryBlogType {
    id: number,
    title: string,
    time: string,
    date: string,
    imageURL: string
}
const PrimaryBlogCard = ({ blog }: { blog: PrimaryBlogType }) => {
    return (
        <div className='Card w-[100%] h-fit p-5 sm:w-[393px] sm:h-[554px] flex flex-col gap-5'>
            <div className="image sm:h-[393px]"><img className='w-[100%] w-[100%] h-[100%] object-contain' src={blog.imageURL} alt="" /></div>
            <div className="text flex flex-col gap-2 justify-center text-center">
                <div className="title paragraphP4 px-4">{blog.title}</div>
                <div className="readMore text-lg underline">Read More</div>
                <div className="date"><i className="fa-regular fa-clock"></i> {blog.time} &nbsp; &nbsp;&nbsp; <i className="fa-regular fa-calendar"></i> {blog.date}</div>
            </div>
        </div>

    )
}

export default PrimaryBlogCard