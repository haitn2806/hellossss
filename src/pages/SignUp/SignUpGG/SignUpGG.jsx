// import React, { useEffect } from "react";

// import { FaRegUserCircle } from "react-icons/fa";
// import { GoogleLogin, GoogleLogout } from "react-google-login";

// import { gapi } from "gapi-script";

// const SignUpGG = () => {
//   const responseGoogle = (response) => {
//     console.log(response);
//   };

//   useEffect(() => {
//     function start() {
//       gapi.client.init({
//         clientId:
//           "100265178983-o3ltq5l507i4hjdh4rfg576896gksn37.apps.googleusercontent.com",
//         scope: "email",
//       });
//     }

//     gapi.load("client:auth2", start);
//   }, []);

//   const googleSuccess = (response) => {
//     // setUser(response.profileObj);
//     // setIsUser(true);
//   };
//   return (
//     <div className="signup-social">
//       <p>or Connect With Social Media</p>
//       <GoogleLogin
//         clientId="100265178983-o3ltq5l507i4hjdh4rfg576896gksn37.apps.googleusercontent.com"
//         render={(renderProps) => (
//           <button className="signup-gg" onClick={renderProps.onClick}>
//             <FaRegUserCircle fontSize={24} /> &emsp; Đăng nhập
//           </button>
//         )}
//         onSuccess={googleSuccess}
//         onFailure={responseGoogle}
//         cookiePolicy="single_host_origin"
//         style={{
//           width: 50,
//           height: 50,
//           color: "blue",
//         }}
//       />{" "}
//     </div>
//   );
// };

// export default SignUpGG;
