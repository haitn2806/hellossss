import React, { useState, useContext } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { useNavigate } from "react-router-dom";
import "./style.css";

const UserContext = React.createContext({});

const Layout = ({ children }) => {
  const [username, setUsername] = useState(null);
  const [shoped, setShoped] = useState({});
  const navigate = useNavigate();
  const [lang,setlang] = useState('en_US');

  const change = (d) => {
    setUsername(d);
  };
  const Shoping = (d) => {
    setShoped(d);
  };
  const Changelang = (d) => {
    setlang(d);
    console.log(lang);
  }

  // console.log(username);
  return (
    <UserContext.Provider value={{ username, change, shoped, setShoped ,lang,setlang}}>
      <Header />
      {/* <div className="empty"></div> */}
      {children}
      <Footer />
    </UserContext.Provider>
  );
};

export { UserContext };

export default Layout;
