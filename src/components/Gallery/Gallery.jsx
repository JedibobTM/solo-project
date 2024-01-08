import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './Gallery.css';

export default function Gallery() {

    const history = useHistory();
    const dispatch = useDispatch();
    const animals = useSelector(store => store.animals);


    return (
        <>
            <div>
                <h1>Gallery</h1>
            </div>
        </>
    )
}