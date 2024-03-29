import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <>
      <form className="formPanel" onSubmit={login}>
        <div className='contents'>
          <div className='login-header'>
            <h2>Login</h2>
          </div>
          {errors.loginMessage && (
            <h3 className="alert" role="alert">
              {errors.loginMessage}
            </h3>
          )}
          <div className='username'>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                required
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </label>
          </div>
          <div className='password'>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
          </div>
          <div className='login-button'>
            <input className="btn" type="submit" name="submit" value="Log In" />
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
