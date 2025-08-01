import SkillsCard from '../../components/SkillsCard/SkillsCard.jsx'
import DevCard from '../../components/DevCard/DevCard.jsx'
import AboutMeCard from '../../components/AboutMeCard/AboutMeCard.jsx'
import BooksCard from '../../components/BooksCard/BooksCard.jsx'
import React from 'react'
import devData from '../../data/DevData.json'

import './BioContainer.css'

export default function BioContainer({ devs = devData}){
    return (
        <> 


    <div className="profile-container">
    <div className="profile-card">
      
      
      <div className = 'top-div'>
        <h1>Software Developer</h1>
      <div
          className="profile-image"
        />
      </div>
      <div className='components-container'>
        <div className='left-div'>
        < AboutMeCard />
        </div>
        <div className='centre-div'>
        < DevCard data={ devs }/>
        </div>
        <div className='right-div'>
        < SkillsCard />
        </div>
        
        </div>
        <div className='bottom-div'>
        <BooksCard />
        </div>

</div>

        <div className="profile-links">
          <a href="https://www.linkedin.com/in/clairetosse/" className='linkedin-ref'>
          <div className='linkedin'></div>
          </a>
          <a href="https://github.com/Claire-bot87"className='github-ref'>
          <div className='github'></div>
          </a>
      </div>
    </div>



</>
    )
}