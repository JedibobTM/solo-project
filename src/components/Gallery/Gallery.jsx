import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './Gallery.css';
import { HashRouter as Router } from 'react-router-dom';

export default function Gallery() {

    const history = useHistory();
    const dispatch = useDispatch();
    const animals = useSelector(store => store.animal.animal);
    const selectedAnimal = useSelector(store => store.animal.selectedAnimal);


    useEffect(() => {
        dispatch({type:'FETCH_ANIMALS'});
    }, [])

    const handleSubmit = (chosenAnimal) => {
        console.log('Handling submit');
        dispatch({
            type: 'SELECT_ANIMAL',
            payload: chosenAnimal
        })
        console.log('Payload: ', chosenAnimal);
        history.push(`/api/animals/${chosenAnimal.id}`);
    }

    return (
        <>
            <h1>Animals</h1>
            <section className='animals'>
                {animals.map(animal => {
                    return (
                        <div className="animal-container" onClick={() => handleSubmit(animal)} key={animal.id}>
                            <div className='card'>
                                <div className='img-box'>
                                    <img src={animal.image} alt={animal.description} />
                                </div>
                                <div className='species-name'>
                                    <h3>{animal.animal}</h3>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>
        </>
    )
}