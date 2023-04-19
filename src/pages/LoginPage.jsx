import React, { useState } from 'react';
import admin from '../utils/admin.js';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import { useDispatch } from 'react-redux';
import { changeLogin } from '../store/loginSlice.js';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const submitHandle = (event) => {
    event.preventDefault();
    if (login === admin.login && password === admin.pass) {
      dispatch(changeLogin());
      navigate('/', { replace: true });
    } else {
      alert('Неверный логин или пароль');
    }
    setLogin('');
    setPassword('');
  };
  return (
    <>
      <div className="background">
        <div id="wrapper">
          <h1 className='formName'>Sign In Form</h1>
          <form onSubmit={submitHandle} id="signin" autoComplete="off">
            <input
              id="user"
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="username"
            />
            <input
              id="pass"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
            <button type="submit">&#xf0da;</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
