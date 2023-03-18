import React from 'react'
import "./BloggCard.css"
import { blog } from "../../assets/data/data"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
import { Link } from "react-router-dom"
import './main.css';

const BlogCard = () => {
  return (
    <>
        <section className='blog body bg-gradient'>
        <div className='container grid3' data-aos="zoom-y-out">
          {blog.map((item) => (
            <div className='box boxItems bg-gradient' key={item.id} data-aos="zoom-y-out">
              <div className='img bg-gradient' data-aos="zoom-y-out">
                <img src={item.cover} alt='' />
              </div>
              <div className='details' data-aos="zoom-y-out">
                <div className='tag' data-aos="zoom-y-out">
                  <AiOutlineTags className='icon' />
                  <a href='/'>#{item.category}</a>
                </div>
                <Link to={`/details/${item.id}`} className='link'>
                  <h3>{item.title}</h3>
                </Link>
                <p>{item.desc.slice(0, 180)}...</p>
                <div className='date'>
                  <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{item.date}</label>
                  <AiOutlineComment className='icon' /> <label htmlFor=''>27</label>
                  <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default BlogCard