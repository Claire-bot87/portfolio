import { Carousel } from '../../components/Carousel/Carousel.jsx'
import { slides } from '../../data/carouselData.json'
import './Portfolio.css'

export default function Portfolio(){
    return (
        <>

<div className='portfolio'>

< Carousel data={slides}/>
</div>

</>
    )
}