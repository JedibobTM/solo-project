import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import "./UserPage.css"

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <>
    <section>
      <div className="container">
        <h2>Welcome, {user.username}</h2>
        {/* <p>Your ID is: {user.id}</p> */}
      </div>
      <div id="background-wrap">
        <div class="x1">
          <div class="cloud"></div>
        </div>
        <div class="x2">
          <div class="cloud"></div>
        </div>
        <div class="x3">
          <div class="cloud"></div>
        </div>
        <div class="x4">
          <div class="cloud"></div>
        </div>
      </div>
    </section>

    <section class="water">
      <div class="wave wave1"></div>
      <div class="wave wave2"></div>
      <div class="wave wave3"></div>
      <div class="wave wave4"></div>
    </section>

    <section class="info">
      
    </section>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
