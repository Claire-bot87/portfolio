import './SkillsCard.css'

export default function SkillsCard() {

    const data = [

        'Front end',
        'HTML',
        'CSS',
        'Javascript',
        'React',

        'Back end',
        'Node.js',
        'MongoDB',
        'Express',
        'Packages',
        'Npm',
        'Pipenv',

        'Version controls',
        'GitHub',

        'Storage',
        'Heroku',
        'Languages',
        'English (native)',
        'French (fluent)',
        'Spanish (competent)',

        'Soft',
        'Organisation',
        'Communication',
        'Collaboration'
    ]

    return (
        <>

            <div className='skills-card-div'>
                <h1>Skills</h1>
                <br></br>
                <ul className='skills-wrap'>
                    {data.map((skill, idx) => (
                        <li key={idx}><div className='skill-div'>{skill}</div></li>


                    ))}
                </ul>
            </div>
        </>
    )
}