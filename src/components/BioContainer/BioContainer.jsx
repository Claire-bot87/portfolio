import SkillsCard from '../../components/SkillsCard/SkillsCard.jsx'
import DevCard from '../../components/DevCard/DevCard.jsx'
import AboutMeCard from '../../components/AboutMeCard/AboutMeCard.jsx'
import React from 'react'
import './BioContainer.css'

export default function BioContainer(){
    return (
        <> 
<h1>BioContainer</h1>
{/* < AboutMeCard />
< DevCard />
< SkillsCard /> */}
    <div className="profile-container">
      <div className="profile-card">
        <img 
          src="https://via.placeholder.com/120" 
          alt="Profile" 
          className="profile-image"
        />
        <h2 className="profile-name">Karina Savoie</h2>
        <p className="profile-bio">Creative Designer & Developer</p>
        
        <div className="profile-links">
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
          <a href="#">Portfolio</a>
        </div>
      </div>
    </div>



</>
    )
}