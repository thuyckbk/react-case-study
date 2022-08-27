import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik } from 'formik';
import './Login.css';


function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({ username: "", password: "" });
  const REGEX = {
    username: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  };


  const userlogined = useSelector(state => state.userlogined);
  const setValueForUser = (key, value) => {
    const newVal = { ...user, [key]: value };
    setUser(newVal);
  };
  function handleSubmit() {
    dispatch({ type: "LOGIN", payload: user });
  };
  useEffect(() => {
    if (userlogined.username) {
      alert("Login in successfully!")
      navigate("/TestList");
    }
  }, [userlogined, navigate]);

  function handleValidate() {
    const errors = {};
    if (!user.username) {
      errors.username = "Required";
    } else if (!REGEX.username.test(user.username)) {
      errors.username = "Invalid email address";
      console.log("code");
    }
    if (!user.password) {
      errors.password = "Required";
    }
    return errors;
  }

  return (
    <div>
      <Formik
        initialValues={user}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div
              className={`custom-input ${errors.username ? "custom-input-error" : ""
                }`}
            >
              <h1>Dành cho Học Sinh</h1>
              <label>User name</label>
              <input
                id="username"
                name="username"
                onChange={e => setValueForUser("username", e.target.value)}
                type="text"
              />
              <p className="error">{errors.username}</p>
            </div>
            <div
              className={`custom-input ${
                errors.password ? "custom-input-error" : ""
              }`}
            >
            <label>Password</label>
            <input
              id="password"
              name="password"
              onChange={e => setValueForUser("password", e.target.value)}
              type="password"
            />
            <p className="error">{errors.password}</p>
            </div>
            <button

            >
              Login
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
export default Login;