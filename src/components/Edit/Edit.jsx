import './Edit.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Edit() {
    const history = useHistory();
    const dispatch = useDispatch();
    const animal = useSelector((store) => store.selectedAnimal.selectedAnimal)

    const handleChange = (value, fieldName) => {
        console.log("handling change")
        console.log('value:', value, 'fieldName:', fieldName);
        dispatch({
            type: 'EDIT_FORM',
            payload: {
                newValue: value,
                newFieldName: fieldName
            }
        })
    }

    const applyEdits = (e) => {
        e.preventDefault();

        dispatch({
            type: 'SUBMIT_FORM_EDIT',
            payload: animal
        })
        history.push(`/api/animals/${animal}`);
    }

    return (
        <>
            <h1>{animal.animal}</h1>
                <input value={animal.animal} onChange={(e) => handleChange(e.target.value, 'animal')} />
                <input value={animal.image} onChange={(e) => handleChange(e.target.value, 'image')}/>
                <textarea onChange={(e) => handleChange(e.target.value, 'description')} placeholder={animal.description}></textarea>
            <button onClick={applyEdits}>Submit</button>
        </>
    )
}




