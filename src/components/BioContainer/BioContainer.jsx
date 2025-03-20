import SkillsCard from '../../components/SkillsCard/SkillsCard.jsx'
import DevCard from '../../components/DevCard/DevCard.jsx'
import AboutMeCard from '../../components/AboutMeCard/AboutMeCard.jsx'
import React from 'react'
import './BioContainer.css'

export default function BioContainer(){
    return (
        <> 


    <div className="profile-container">
    <div className="profile-card">
    <h2 className="profile-name">Claire Tosse</h2>
        <div
          className="profile-image"
        />
        
  
        
     
      </div>
      <div className='components-container'>
      < AboutMeCard />
< DevCard />
< SkillsCard />
</div>
        <div className="profile-links">
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
      </div>
    </div>



</>
    )
}