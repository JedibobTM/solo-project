import './Animals.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Animals() {
    const animal = useSelector((store) => store.selectedAnimal.selectedAnimal);
    const user = useSelector((store) => store.user)
    const history = useHistory();

    console.log("Selected animal is: ", animal);

    const handleSubmit = () => {
        console.log("Sending to edit page");
        history.push('/edit/:id');
    }

    return (
        <>
            <div className='info-container'>
                <h1 className='animal-header'>{animal.animal}</h1>
                <img src={animal.image} className='animal-image' alt={animal.description} id="pageImg"/>
                <div className='info'>
                    <p className='animal-description'>{animal.description}</p>
                </div>
                {user.id === animal.user_id ? <h3 onClick={handleSubmit}>Edit</h3> : <></>}
                {user.id === animal.user_id ? <h3 onClick={handleSubmit}>Delete</h3> : <></>}
                <Link to="/gallery">
                    <h3 className='back-button'>Back to gallery</h3>
                </Link>
            </div>
        </>
    )
}