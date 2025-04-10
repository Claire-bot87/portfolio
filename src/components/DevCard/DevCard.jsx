import './DevCard.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import devData from '../../data/DevData.json'

export const DevCard = ({ devs = devData }) => {
    console.log("devs:", devs);
    console.log("Type of devs:", typeof devs);
    return (
        
        <div className='dev-card-div'>
            <h1>Personal Development</h1>
            <br></br>
    {devs.map((dev, idx) => (        
        <div key={idx}> 


<div className = 'progress-bar-div'>
    <h5>{dev.name}</h5>
<ProgressBar className= 'progress-bar'
// className='my-progress'
key={idx}
animated 
variant={dev.variant} 
label={dev.name}
now={dev.progress}
style={{ backgroundColor: 'transparent',border: '1px solid white' }}
/>
</div>
</div>
) )}


</div>
    )
}



export default DevCard