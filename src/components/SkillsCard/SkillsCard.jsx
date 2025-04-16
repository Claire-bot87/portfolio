import './SkillsCard.css'

export default function SkillsCard() {

   const data = [
      {
         "name": "HTML",
         "type": "Front End",
         "image": "https://res.cloudinary.com/dpv0j8frj/image/upload/v1744273992/html-logo_zzzoyr.png"
      },
      {
         "name": "CSS",
         "type": "Front End",
         "image": "https://res.cloudinary.com/dpv0j8frj/image/upload/v1744273992/css_logo_w8hbsu.png"
      },
      {
         "name": "Javascript",
         "type": "Front End",
         "image": "https://res.cloudinary.com/dpv0j8frj/image/upload/v1744273993/javascript-39424_vkmacb.png"
      },
      {
         "name": "React",
         "type": "Front End",
         "image": "https://res.cloudinary.com/dpv0j8frj/image/upload/v1744273993/React_a6wt6e.png"
      },
      {
         "name": "Node.js",
         "type": "Back End",
         "image": "https://res.cloudinary.com/dpv0j8frj/image/upload/v1744273993/nodejs_y9ozud.png"
      },
      {
         "name": "MongoDB",
         "type": "Back End",
         "image": "https://res.cloudinary.com/dpv0j8frj/image/upload/v1744277925/mongodb-logo_hxdqps.png"
      },
      {
         "name": "Express",
         "type": "Back End",
         "image": "https://res.cloudinary.com/dpv0j8frj/image/upload/v1744275378/express_fcah0i.png"
      },
      {
         "name": "GitHub",
         "type": "",
         "image": "https://res.cloudinary.com/dpv0j8frj/image/upload/v1744273992/github-logo1_k3tvge.png"
      },
      {
         "name": "Heroku",
         "type": "",
         "image": "https://res.cloudinary.com/dpv0j8frj/image/upload/v1744273992/heroku_bfeceo.png"
      },
      {
         "name": "Django",
         "type": "",
         "image": "https://res.cloudinary.com/dpv0j8frj/image/upload/v1744276138/django_rd4kx6.png"
      },
      {
         "name": "PostgreSQL",
         "type": "",
         "image": "https://res.cloudinary.com/dpv0j8frj/image/upload/v1744276138/postgresql_kss696.png"
      },
      {
         "name": "Postman",
         "type": "",
         "image": "https://res.cloudinary.com/dpv0j8frj/image/upload/v1744276139/postman_va7sq1.png"
      },
      {
         "name": "Python",
         "type": "",
         "image": "https://res.cloudinary.com/dpv0j8frj/image/upload/v1744277925/python_rg9tml.png"
      },
      {
         "name": "Netlify",
         "type": "",
         "image": "https://res.cloudinary.com/dpv0j8frj/image/upload/v1744273992/netlify_j6gwer.png"
      },

   ]

   return (
      <>

         <div className='skills-card-div'>
            <h1>Skills</h1>





            <h4>Languages</h4>
            <div className='languages-div'>

               <div className='skill-div'>French (fluent)</div>
               <div className='skill-div'>Spanish (competent)</div>
            </div>

            <h4>Soft</h4>
            <div className='soft-div'>

               <div className='skill-div'>Organisation</div>
               <div className='skill-div'>Communication</div>
               <div className='skill-div'>Collaboration</div>
            </div>

            <h4>Tech</h4>
            <ul className='skills-wrap'>
               {data.map((skill, idx) => (
                  <li key={idx}><div className='skill-div'>{skill.name}
                     <img src={skill.image}

                        className='image' />
                  </div></li>


               ))}
            </ul>

         </div>
      </>
   )
}