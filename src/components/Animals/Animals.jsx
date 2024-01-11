import './Animals.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';

export default function Animals() {
    const animal = useSelector(store => store.selectedAnimal.selectedAnimal);
    console.log("Selected animal is: ", animal);

    return (
        <>
            <div className='info-container'>
                <h1 className='animal-header'>{animal.animal}</h1>
                <img src={animal.image} className='animal-image' alt={animal.description} id="pageImg"/>
                <div className='info'>
                    <p className='animal-description'>{animal.description}</p>
                </div>
                <Link to="/gallery">
                    <h3 className='back-button'>Back to gallery</h3>
                </Link>
            </div>
        </>
    )
}