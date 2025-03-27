import { Carousel } from '../../components/Carousel/Carousel.jsx'
import { slides } from '../../data/carouselData.json'
import './Portfolio.css'

export default function Portfolio(){
    return (
        <>

<div className='portfolio'>

< Carousel data={slides}/>
</div>

{/* <div>
Project 1 - Snake Game - ReadMe - 1 week
Solo project - Built a snake game using Javascript, HTML, CSS. I cemented my Javascript fundamental skills. 

</div>

<div>
Project 2 Relaxation API - ReadMe - 1 week 
Solo project -Built an app to give suggestions for relaxation. Used Javascript, Express, EJS, MongoDb and Mongoose. Built a database of relaxation suggestions with full CRUD functionality.

</div>

<div>
Project 3 StickyPopcorn API - ReadMe - 1 week 
Group project -Built an app to review films. Used Javascript, Express, React, MongoDb and Mongoose. Built a site where you can review films, add them to favourites and give them ratings. You could also add a film to your watchlist. with full CRUD functionality.
 
</div>

<div>
Project 4 Biscuitology API - ReadMe 1 week
Solo project - Built an app to rate biscuits Used Javascript, Express, React, MongoDb and Mongoose. You can add biscuits, give them a rating based on a number of factors, and view metrics about those biscuits. with full CRUD functionality.


</div> */}
</>
    )
}