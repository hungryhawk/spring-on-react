import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../store/login/loginSlice';

function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    person: '',
    password: '',
  });

  const { person, password } = formData;

  const dispatch = useDispatch();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.login
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate('/', { replace: true });
    }

    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      person,
      password,
    };

    dispatch(login(userData));
  };

  return (
    <>
      <div className="background">
        <h1>Sign In Form</h1>
        <div id="wrapper">
          <form onSubmit={onSubmit} id="signin" autoComplete="off">
            <input
              id="user"
              type="text"
              name="person"
              value={person}
              onChange={onChange}
              placeholder="username"
              required
            />
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="password"
              required
            />
            <button type="submit">&#xf0da;</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
