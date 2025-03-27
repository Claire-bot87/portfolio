import React from 'react'
import { useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './Carousel.css'
import { Link } from 'react-router'



export const Carousel = ({ data }) => {

    const [slide, setSlide] = useState(0)

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1)
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1)
    }
    console.log(data)
    return (
        <div className='carousel'>
            < BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide} />
            
            {data.map((item, idx) => (
    
    
                 <div   
                 key={idx}
                 className={slide === idx ? 'div-wrapper' : 'div-wrapper div-hidden'}
                 >
                     <div className={slide === idx ? 'div-left' : 'div-left-hidden'}>
                     <a href={item.project_link} target="_blank" rel="noopener noreferrer">
                        <h1>{item.title}</h1>
                        </a>
                        <a href={item.readme_link} target="_blank" rel="noopener noreferrer">
                        <p>{item.text}</p>
                
                        </a>
                        </div>
                <div  className={slide === idx ? 'div-right' : 'div-right-hidden'}>
                    <img src={item.src}
                    alt={item.alt}
                    className='slide' />
                    </div>
                   
                        </div> 
           ) )}
           
            < BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide} />

            <span className='indicators'>
                {data.map((_, idx) => {
                    return <button
                        key={idx}
                        onClick={() => setSlide(idx)}
                        className={
                            slide === idx ? "indicator" : "indicator indicator-inactive"
                        }></button>
                })}

            </span>
        </div>
    )
}