import React from 'react'
import { useState, useEffect } from 'react'
import './BooksCard.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

export default function BooksCard (){
    const [slide, setSlide] = useState(0)



    const books =

       [
        {
            "src":"https://res.cloudinary.com/dpv0j8frj/image/upload/v1744279522/Good_Inside_edt9ka.jpg",
            "alt":"Good Inside Book",
            "title":"Good Inside",
        },
        {
            "src":"https://res.cloudinary.com/dpv0j8frj/image/upload/v1744279522/I_will_teach_you_to_be_rich_book_echudb.jpg",
            "alt":"I will teach you to be rich",
            "title":"I Will Teach You To Be Rich",
        },
        {
            "src":"https://res.cloudinary.com/dpv0j8frj/image/upload/v1744279522/Swallows_and_Amazons_book_nqnm6b.jpg",
            "alt":"Swallows and Amazons book",
            "title":"Swallows and Amazons",
        },
       ]

       
       const nextSlide = () => {
          setSlide(slide === books.length - 1 ? 0 : slide + 1)
          console.log(`slide ${slide}`)
      }
  
      const prevSlide = () => {
          setSlide(slide === 0 ? books.length - 1 : slide - 1)
      }

      useEffect(() => {
        const interval = setInterval(() => {
          setSlide(prev => (prev === books.length - 1 ? 0 : prev + 1))
        }, 3000) // change slide every 3 seconds
      
        return () => clearInterval(interval) // cleanup on unmount
      }, [books.length])
      
    return (
        <div className='carousel'>
             < BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide} />
        <div className='books-div'>
<p>This will include: books i am reading , ramit sethi, dr becki, favourite poems, excerpts</p>
{books.map((book,idx) => (
<div  
     key={idx}
     className={slide === idx ? 'div-wrapper' : 'div-wrapper div-hidden'}
    >
                    <img src={book.src}
                    alt={book.alt}
                    className='slide' />
                    
                    </div>

) )}

</div> 
< BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide} />
</div> 
    )
}