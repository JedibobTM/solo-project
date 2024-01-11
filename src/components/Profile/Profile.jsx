import './Profile.css';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import React, { useEffect } from 'react';

export default function Profile() {
    const user = useSelector((store) => store.user);
    const history = useHistory();

    const handleSubmit = () => {
        console.log("Sending to create page");
        history.push('/create-post')
    }
    return (
        <>
            <h1 className='profile-name'>{user.username}'s Profile</h1>
            <h2 className='subtitle'>My Posts</h2>
            <div className='profile-gallery'>

            </div>
            <div>
                <h3 className='create-post' onClick={handleSubmit}>Create Post</h3>
            </div>
        </>
    )
}