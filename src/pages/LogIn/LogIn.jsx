import React from "react";
import "./LogIn.css";
import logo from "../../components/Logo/logo-alt.png";
import { UserContext } from "../../components/Layout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import { toastError, toastSuccess } from "../../utils/toastr";

function LogIn() {
  const User = useContext(UserContext);
  const [username, setUsername] = useState();
  const [pass, setPass] = useState();
  const navigate = useNavigate();
  const [showFPass, setShowFPass] = useState("hidden");
  const handleShowFP = () => {
    {
      showFPass == "show" ? setShowFPass("hidden") : setShowFPass("show");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    callApi();
  };
  const callApi = async () => {
    const response = await axios({
      method: "post",
      url: "https://vnxpedia.3i.com.vn/TravelAPI/LoginXpedia",
      data: qs.stringify({
        UserName: username,
        Password: pass,
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });

    if (response.data.Error === true) {
      console.log("response",response);
      toastError("Có lỗi xảy ra!");
    } else {
      User.change(response.data);
      toastSuccess("Đăng nhập thành công");
      localStorage.setItem("VNXUser", JSON.stringify(response.data));
      navigate("/", { replace: true });
    }
  };
  const [emailforgot, setemailforgot] = useState("");
  const callApiForgotPass = async () => {
    const response = await axios({
      method: "post",
      url: "https://vnxpedia.3i.com.vn/TravelAPI/ForgotPassword",
      data: qs.stringify({
        Email: emailforgot,
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });
    console.log(response.data);
    console.log(emailforgot);
    if (response.data.Error) {
      toast.error("Error!");
    } else toast.success("Please check your mail!");
  };
  const handleSubmitFP = () => {
    callApiForgotPass();
  };

  return (
    <div className="wrapper">
      <div className="log-in">
        <img className="logo" src={logo} alt="logo"></img>

        <form className="form" id="form-1" onSubmit={(e) => handleLogin(e)}>
          <h3 className="heading">Welcome back</h3>
          <p className="desc">Please log into your account</p>

          <div className="spacer"></div>

          <div className="form-group">
            <label for="mail" className="form-label">
              User Name
            </label>
            <input
              id="mail"
              name="mail"
              type="text"
              placeholder="username"
              className="form-control"
              onChange={(event) => setUsername(event.target.value)}
            />
            <span className="form-message"></span>
          </div>

          <div className="form-group">
            <label for="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className="form-control"
              onChange={(event) => setPass(event.target.value)}
            />
            <span className="form-message"></span>
          </div>

          <div className="form-report">
            {/* <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <span className="slider-remem">Remember Me</span> */}
            <a className="forget-pass" onClick={() => handleShowFP()}>
              Forget password?
            </a>
          </div>
          <div className={`form-change ${showFPass}`}>
            <input
              type="mail"
              placeholder="email"
              className="form-control full"
              onChange={(e) => setemailforgot(e.target.value)}
            ></input>
            <p className="btn-active" onClick={() => handleSubmitFP()}>
              Send mail
            </p>
          </div>

          <button className="form-submit">Login</button>

          {/* <span className="form-options">
            <hr className="log-hr" />
            Or log in with
            <hr className="log-hr" />
          </span>

          <div className="form-option-group">
            <button className="form-option">Facebook</button>
            <button className="form-option">Google</button>
            <button className="form-option">Firebase</button>
            <button className="form-option">Twiter</button>
          </div> */}

          <span className="form-regis">
            Don't Have An Account? <Link to="/SignUp">Registion</Link>
          </span>
        </form>
        <Link to="/" className="go-home">
          Go to home page
        </Link>
      </div>

      {/* <div>
                <img className="image" src={logo} alt="logo"></img>
            </div> */}
    </div>
  );
}

export default LogIn;
