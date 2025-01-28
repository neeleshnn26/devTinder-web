import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [toggleform, setToggleForm] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  // Function to handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      toggleform ? handleSignUp() : handleLogin();
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">
            {toggleform ? "Sign Up" : "Login"}
          </h2>

          <div>
            {toggleform && (
              <>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">First Name</span>
                  </div>
                  <input
                    type="text"
                    value={firstName}
                    className="input input-bordered w-full max-w-xs px-2 py-1"
                    onChange={(e) => setFirstName(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                </label>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">Last Name</span>
                  </div>
                  <input
                    type="text"
                    value={lastName}
                    className="input input-bordered w-full max-w-xs px-2 py-1"
                    onChange={(e) => setLastName(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                </label>
              </>
            )}
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Email Id</span>
              </div>
              <input
                type="text"
                value={emailId}
                className="input input-bordered w-full max-w-xs px-2 py-1"
                onChange={(e) => setEmailId(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </label>

            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                value={password}
                className="input input-bordered w-full max-w-xs px-2 py-1"
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </label>
          </div>
          <p className="text-red-500 ml-4">{error}</p>
          <div className="card-actions justify-center mt-3">
            <button
              className="btn btn-primary text-bold"
              onClick={toggleform ? handleSignUp : handleLogin}
            >
              {toggleform ? "Sign Up" : "Login"}
            </button>
          </div>
          <p className="mt-5 ml-16">
            {toggleform ? "Already a user? " : "New to devTinder? "}
            <span
              className="font-bold cursor-pointer"
              onClick={() => {
                setToggleForm(!toggleform);
              }}
            >
              {toggleform ? "Login" : "Sign Up"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
