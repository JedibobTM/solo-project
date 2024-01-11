import './CreatePost.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function CreatePost() {

    const [inputName, setInputName] = useState('');
    const [urlInput, setUrlInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Handling CreatePost submit");
        console.log(inputName, urlInput, descriptionInput, "stuff");
        dispatch({
            type: 'SAGA/CREATE_ANIMAL',
            payload: {name: inputName, 
                imgUrl: urlInput, 
                description: descriptionInput}
        })
        history.push('/profile');
    }
    return (
        <>
        <section className='create-section'>
            <form className='create-form'>
                <div className='input-group'>
                    <input
                        type='text'
                        onChange={(event) => setInputName(event.target.value)}
                        value={inputName}
                        className='animal-name'
                        name='animal-name'
                    />
                    <label for="animal-name">Name of Animal</label>
                </div>
                <div className='input-group'>
                    <input
                        type='text'
                        onChange={(event) => setUrlInput(event.target.value)}
                        value={urlInput}
                        className='img-url'
                        name='image-url'
                    />
                    <label for="img-url">Image</label>
                </div>
                <div className='input-group'>
                    <textarea
                        type='text'
                        onChange={(event) => setDescriptionInput(event.target.value)}
                        value={descriptionInput}
                        className='input-description'
                        name='description'
                    ></textarea>
                    <label for="input-description">Description</label>
                </div>
                <button 
                    className='create-button'
                    type='submit'
                    onClick={handleSubmit}
                    >Submit</button>
            </form>
        </section>
        </>
    )
}