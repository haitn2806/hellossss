import "./SignUp.css";
import { set, useForm } from "react-hook-form";
import SignUpGG from "./SignUpGG/SignUpGG";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import qs from "qs";
import { signUp } from "../../api/User";
import { toastError, toastSuccess } from "../../utils/toastr";
import Loadingbox from "../../components/Loadingbox/Loadingbox";

export default function SignUp() {
  const callApi = async (data) => {
    const response = await axios({
      method: "post",
      url: "https://vnxpedia.3i.com.vn/TravelAPI/InsertAccount",
      data: qs.stringify({
        UserName: data.UserName,
        Password: data.Password,
        GivenName: data.GivenName,
        Email: data.Email,
        PhoneNumber: data.PhoneNumber,
        Picture: data.Picture,
        Gender: data.Gender,
      }),
      headers: {
        "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });
    return response
  };

  const [load,isLoading] = useState(false)
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    isLoading(true)
    console.log(data);
    try {
      const datas = await callApi(data);
      
      console.log("datas", datas);
      if (datas.data.Error === true) {
        toastError(`${datas.data.Title}`);
      }
      if (datas?.data?.Error === false) { 
        
        toastSuccess(`${datas.data?.Title}`);
        navigate("/logIn")
      }
   
    } catch (error) {
      toastError(`${error.message}`);
    }
    
  };

  return (
    
    <div className="wrapper">
     
     {load === true && <Loadingbox/> }
     {load === false && 
      <div className="sign-up">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-signup"
          id="form-1"
        >
          <h3 className="heading">Create new Account</h3>
          <p className="desc">Hi My Friends</p>
          <div className="spacer"></div>
          <div className="form-group">
            <label for="username" className="form-label">
              User name
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="VD: Nguyen A"
              className="form-control"
              {...register("UserName", { required: true })}
            />
            {errors.UserName && errors.UserName.type === "required" && (
              <span className="error-message">Username cannot be empty !</span>
            )}
            <span className="form-message"></span>
          </div>
          <div className="form-group">
            <label for="fullname" className="form-label">
              Full name
            </label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              placeholder="VD: Nguyen A"
              className="form-control"
              {...register("GivenName", { required: true })}
            />
            {errors.GivenName && errors.GivenName.type === "required" && (
              <span className="error-message">Fullname cannot be empty !</span>
            )}
            <span className="form-message"></span>
          </div>
          <div className="form-group">
            <label for="mail" className="form-label">
              Email
            </label>
            <input
              id="mail"
              name="mail"
              type="text"
              placeholder="VD: NguyenA@gmail.com"
              className="form-control"
              {...register("Email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
              })}
            />
            {errors.Email && errors.Email.type === "required" && (
              <span className="error-message">Email cannot be empty !</span>
            )}
            {errors.Email && errors.Email.type === "pattern" && (
              <span className="error-message">Invalid email</span>
            )}

            <span className="form-message"></span>
          </div>
          <div className="form-group">
            <label for="phone" className="form-label">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="number"
              placeholder="VD: 0123456789"
              className="form-control"
              {...register("Phone", {
                required: true,
                maxLength: 10,
                minLength: 10,
                valueAsNumber: false,
              })}
            />
            {errors.Phone && errors.Phone.type === "required" && (
              <span className="error-message">
                Phone number cannot be empty !
              </span>
            )}
            {errors.Phone && errors.Phone.type === "maxLength" && (
              <span className="error-message">Invalid phone number</span>
            )}
            {errors.Phone && errors.Phone.type === "minLength" && (
              <span className="error-message">Invalid phone number</span>
            )}
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
              autoComplete="on"
              {...register("Password", {
                required: true,
                minLength: 6,
                maxLength: 30,
              })}
            />
            {errors.Password && errors.Password.type === "required" && (
              <span className="error-message">Password cannot be empty !</span>
            )}
            {errors.Password && errors.Password.type === "minLength" && (
              <span className="error-message">Weak password</span>
            )}
            {errors.Password && errors.Password.type === "maxLength" && (
              <span className="error-message">
                Password up to 30 characters
              </span>
            )}
            <span className="form-message"></span>
          </div>
          <div className="form-group">
            <label for="password_confirmation" className="form-label">
              Password Again
            </label>
            <input
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              placeholder="Nhập lại mật khẩu"
              className="form-control"
              autoComplete="on"
              {...register("Passwordagain", {
                required: true,
                validate: (val) => {
                  if (watch("Password") != val) {
                    return "Your passwords do no match";
                  }
                },
              })}
            />
            {errors.Passwordagain &&
              errors.Passwordagain.type === "required" && (
                <span className="error-message">
                  Password again is required
                </span>
              )}
            {errors.Passwordagain &&
              errors.Passwordagain.type === "validate" && (
                <span className="error-message">
                  re-entered password does not match
                </span>
              )}

            <span className="form-message"></span>
          </div>
          <div className="form-group">
            <label for="gender" className="form-label">
              Sex
            </label>
            <div className="form-sex">
              <div className="sex">
                <label className="sex-m" for="">
                  Male
                </label>
                <input
                  name="gender"
                  type="radio"
                  value="Male"
                  className="form-control"
                  {...register("Gender")}
                />
              </div>
              <div className="sex">
                <label className="sex-m" for="">
                  Female
                </label>
                <input
                  name="gender"
                  type="radio"
                  value="Female"
                  className="form-control"
                  {...register("Gender")}
                />
              </div>
            </div>
            <span className="form-message"></span>
          </div>
          {/* <SignUpGG /> */}
          <button className="form-submit" type="submit">
            Sign Up
          </button>
          <div className="spacer"></div>
          <Link to="/" className="go-home">
            Go to home page
          </Link>
        </form>
      </div>
}
    </div>
    
  );
}

//     if (response.data.Error) {
//       toast.error(" User exist!", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//     } else {
//       toast.success(" Create account complete!", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//       });
//       console.log(response);
//       navigate("/LogIn", { replace: true });
//     }
//
//   const callApi = async (data) => {
//     const response = await axios({
//       method: "post",
//       url: "http://117.6.131.222:8985/TravelAPI/InsertAccount",
//       data: qs.stringify({
//         UserName: data.UserName,
//         Password: data.Password,
//         GivenName: data.GivenName,
//         Email: data.Email,
//         PhoneNumber: data.PhoneNumber,
//         Picture: data.Picture,
//         Gender: data.Gender,
//       }),
//       headers: {
//         "content-type": "application/x-www-form-urlencoded;charset=utf-8",
//       },
//     });
//     console.log(response);
// };
