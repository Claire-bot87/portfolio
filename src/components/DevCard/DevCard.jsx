import './DevCard.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function DevCard(){
    return (
        <div className='dev-card-div'>
            
<h1>Personal Development</h1>
<br></br>
<ProgressBar 
animated 
variant="info" 
now={45}
style={{ backgroundColor: 'transparent',border: '1px solid white' }}
/>
<ProgressBar 
animated 
variant="warning" 
now={45}
style={{ backgroundColor: 'transparent',border: '1px solid white' }}
 />
<p>
TypeScript
Next js
Sass
</p>
</div>
    )
}