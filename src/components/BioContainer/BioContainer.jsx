import SkillsCard from '../../components/SkillsCard/SkillsCard.jsx'
import DevCard from '../../components/DevCard/DevCard.jsx'
import AboutMeCard from '../../components/AboutMeCard/AboutMeCard.jsx'
import React from 'react'
import devData from '../../data/DevData.json'

import './BioContainer.css'

export default function BioContainer({ devs = devData}){
    return (
        <> 


    <div className="profile-container">
    <div className="profile-card">
    
        <div
          className="profile-image"
        />
        
  
        
     
      </div>
      <div className='components-container'>
      < AboutMeCard />
< DevCard data={ devs }/>
< SkillsCard />
</div>
        <div className="profile-links">
          <a href="https://www.linkedin.com/in/cb1987/">LinkedIn</a>
          <a href="https://github.com/Claire-bot87">GitHub</a>
      </div>
    </div>



</>
    )
}