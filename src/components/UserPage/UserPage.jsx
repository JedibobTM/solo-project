import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import "./UserPage.css"

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();

  const handleSubmit = () => {
    history.push('/gallery');
  }
  return (
    <>
    <section className='userpage-section'>
      <div className="container">
        <h1 className='welcome-name'>Welcome, {user.username}</h1>
        <div className='button-class'>
          <button id="buttonExplore" onClick={handleSubmit}>
            Explore
          </button>
        </div>
      </div>
    </section>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
