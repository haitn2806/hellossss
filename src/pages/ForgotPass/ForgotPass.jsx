import React from "react";
import "./Password.css";
import logo from "../../components/Logo/logo-alt.png";
import { UserContext } from "../../components/Layout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toastSuccess } from "../../utils/toastr";

function ForgotPass() {
  const User = useContext(UserContext);
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const navigate = useNavigate();

  //   console.log(email ,pass);
  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      email: `${email}`,
      password: `${pass}`,
    };
    User.change(user);
    //    console.log(User.username);
  toastSuccess("🦄 Login complete!")
    navigate("/UserInfor", { replace: true });
  };

  return (
    <div className="wrapper">
      <div className="log-in reset-password">
        <img className="logo" src={logo} alt="logo"></img>

        <form className="form" id="form-1" onSubmit={(e) => handleLogin(e)}>
          <h3 className="heading">Reset Password</h3>

          <div className="spacer"></div>

          <div className="form-group">
            <label for="mail" className="form-label">
              Email
            </label>
            <input
              id="mail"
              name="mail"
              type="text"
              placeholder="Enter your email."
              className="form-control"
              onChange={(event) => setEmail(event.target.value)}
            />
            <span className="form-message"></span>
          </div>

          <div className="form-group">
            <label for="password" className="form-label">
              New Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter new password"
              className="form-control"
              onChange={(event) => setPass(event.target.value)}
            />
            <span className="form-message"></span>
          </div>
          <div className="form-group">
            <label for="password" className="form-label">
              Confirm Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Retype Password"
              className="form-control"
              onChange={(event) => setPass(event.target.value)}
            />
            <span className="form-message"></span>
          </div>

          <button className="form-submit">Confirm</button>
        </form>
        <Link to="/" className="password-go-home">
          Go to home page
        </Link>
      </div>

      {/* <div>
                <img className="image" src={logo} alt="logo"></img>
            </div> */}
    </div>
  );
}
// password update

export default ForgotPass;