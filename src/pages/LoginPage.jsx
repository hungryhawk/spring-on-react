import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../store/auth/authSlice";

function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const dispatch = useDispatch();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message[0].msg);
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
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
      username,
      password,
    };

    dispatch(login(userData));
  };

  return (
    <>
      <div className="login">
        <div className="login_wrapper">
          <div className="login_wrap">
            <div className="login_1">
              <h1>Sign In Form</h1>
            </div>

            <div className="login_2">
              <div className="login_wrap_2">
                <form onSubmit={onSubmit} autoComplete="off">
                  <div className="input_wrap">
                    <input
                      type="text"
                      name="username"
                      value={username}
                      onChange={onChange}
                      placeholder="username"
                      required
                    />
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={onChange}
                      placeholder="password"
                      required
                    />
                  </div>
                  <button type="submit" className="blue_btn">
                    Log In
                  </button>
                </form>
                <div className="sign_splitter"></div>
                <Link to="/signup" className="blue_btn">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
