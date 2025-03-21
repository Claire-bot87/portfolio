import './TitleComponent.css';
import { Link } from 'react-router'

const TitleComponent = () => {
  return (

   
    <div className="title">
      <div className='logo'></div>
      <Link to='/' className="title-link">
        <h1 className='title-text'>Claire Tosse</h1>
      </Link>
    </div>
  );
}

export default TitleComponent;