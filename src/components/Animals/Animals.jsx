import './Animals.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';

export default function Animals() {
    const animal = useSelector((store) => store.selectedAnimal.selectedAnimal);
    const user = useSelector((store) => store.user)
    const history = useHistory();
    const dispatch = useDispatch();

    console.log("Selected animal is: ", animal);

    const handleEdit = () => {
        console.log("Sending to edit page");
        
        history.push(`/edit/${animal.id}`);
    }

    const handleDelete = () => {
        console.log("Delete request sent");
        dispatch({
            type: "SAGA/REMOVE_PAGE",
            payload: animal.id
        })

        history.push('/gallery');
    }

    return (
        <>
            <div className='info-container'>
                <h1 className='animal-header'>{animal.animal}</h1>
                <img src={animal.image} className='animal-image' id="pageImg"/>
                <div className='info'>
                    <p className='animal-description'>{animal.description}</p>
                </div>
                {user.id === animal.user_id ? <button onClick={handleEdit}>Edit</button> : <></>}
                {user.id === animal.user_id ? <button onClick={handleDelete} className="delet-btn">Delete</button> : <></>}
                <Link to="/gallery">
                    <h3 className='back-button'>Back to gallery</h3>
                </Link>
            </div>
        </>
    )
}
