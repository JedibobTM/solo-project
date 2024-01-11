import './Profile.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function Profile() {
    const user = useSelector((store) => store.user);
    const animals = useSelector((store) => store.animal.animal)
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch
    })

    const handleSubmit = () => {
        console.log("Sending to create page");
        history.push('/create-post')
    }


    return (
        <>
            <h1 className='profile-name'>{user.username}'s Profile</h1>
            <h2 className='subtitle'>My Posts</h2>
            <div>
                <h3 className='create-post' onClick={handleSubmit}>Create Post</h3>
            </div>
            <section>
                {animals.map(animal => {
                    if (animal.user_id === user.id)
                    return (
                        <div className="profile-container" onClick={() => handleSubmit(animal)} key={animal.id}>
                            <div className='profile-card'>
                                <div className='profile-gallery-box'>
                                    <img src={animal.image} alt={animal.description} />
                                </div>
                                <div className='pcreature-name'>
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