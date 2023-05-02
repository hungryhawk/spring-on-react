import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../store/auth/authSlice";

function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    password2: "",
    first_name: "",
    last_name: "",
    age: "",
  });

  const { username, password, password2, first_name, last_name, age } =
    formData;

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
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

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        username,
        password,
        first_name,
        last_name,
        age,
      };
      dispatch(register(userData));
    }
  };

  return (
    <>
      <div className="login">
        <div className="login_wrapper">
          <div className="login_wrap">
            <div className="login_1">
              <h1>Sign Up Form</h1>
            </div>
            <div className="login_2">
              <div className="login_wrap_2">
                <form onSubmit={onSubmit} id="signin" autoComplete="off">
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
                      type="text"
                      name="password"
                      value={password}
                      onChange={onChange}
                      placeholder="password"
                      required
                    />
                    <input
                      type="password2"
                      name="password2"
                      value={password2}
                      onChange={onChange}
                      placeholder="repeat password"
                      required
                    />
                    <input
                      type="text"
                      name="first_name"
                      value={first_name}
                      onChange={onChange}
                      placeholder="first_name"
                      required
                    />
                    <input
                      type="text"
                      name="last_name"
                      value={last_name}
                      onChange={onChange}
                      placeholder="last_name"
                      required
                    />
                    <input
                      type="number"
                      name="age"
                      value={age}
                      onChange={onChange}
                      placeholder="age"
                      required
                    />
                  </div>
                  <button type="submit" className="blue_btn">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
