import React from 'react';
import './footer.css';
import LogoHome from '../Logo';
import { NavLink,Link, useNavigate, useLocation } from "react-router-dom";
import LG1 from '../../data/images/logo1.png';
import LG2 from '../../data/images/logo2.png';
import LG3 from '../../data/images/logo3.png';
import LG4 from '../../data/images/logo4.png';
import LG5 from '../../data/images/logo5.png';
import LG6 from '../../data/images/logo6.png';
import LG7 from '../../data/images/logo7.png';
import logoicon from './../Logo/logo-alt.png';
import { BsFacebook, BsGoogle, BsInstagram, BsLinkedin, BsPinterest, BsTwitter, BsWordpress, BsYoutube } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='footer'>

      {/* <div className='list-logo'>
      <div className='lg lg1'><img src={LG1} alt=''/></div>
      <div className='lg lg2'><img src={LG2} alt=''/></div>
      <div className='lg lg3'><img src={LG3} alt=''/></div>
      <div className='lg lg4'><img src={LG4} alt=''/></div>
      <div className='lg lg5'><img src={LG5} alt=''/></div>
      <div className='lg lg6'><img src={LG6} alt=''/></div>
      <div className='lg lg7'><img src={LG7} alt=''/></div>
    </div> */}

    <hr className='full'></hr>

    <div className='main-footer'> 

      <div className='list-destinations'>
        <h1 className='footer-h1'>Destinations</h1>
        <Link className='link' to="/Destination/vietnam_destination">Viet Nam</Link>
        <Link className='link' to="/Destination/laos_destination">Lao</Link>
        <Link className='link' to="/Destination/thailand_destination">ThaiLand</Link>
        <Link className='link' to="/Destination/cambodia_destination">Cambodia</Link>
      </div>
      <div className='list-company list-destinations'>
        <h1 className='footer-h1'>Company</h1>
        <Link className='link' to="/AboutUs">About Us</Link>
        <Link className='link' to="/Policy">Policys</Link>
        <Link className='link' to="/Privacy">Privacy</Link>
        <Link className='link' to="/Payment">Payment GateWay</Link>
        <Link className='link' to="/Affiliates">Affiliates</Link>
       
      </div>
      <div className='list-media list-destinations'>
        <h1 className='footer-h1'>Media</h1>
        <Link className='link' to="/Blog">Blog</Link>
        <Link className='link' to="/Feedback">FeedBack</Link>
      </div>

      <Link to="/" className='logo-icon'>
        <img src={logoicon} alt=''></img>
        <span>Work for VNXpedia</span>
        <p>
          Interested in a career in travel? For information on positions and how to apply, 
          please visit our <b><u>travel careers website</u></b>.</p>
      </Link>

    </div>

    <div className="news">
      <span>Newsletter</span>
      <p>Join our mailing list to receive the latest updates and travel inspiration</p>
       <form action="">
      <div className="news-box">
      <input type="text" placeholder='Full name' className='news-first'/>
      <input type="email" placeholder='Email'  className='news-email'/>
      <button>SUBSCRIBE</button>
      </div>
      </form>
    </div>

    <hr></hr>

    <div className='list-app'></div>

    <div className='end-footer'>
      <div className='contact'>
        <BsFacebook className='contact-option'/>
        <BsTwitter className='contact-option'/>
        <BsPinterest className='contact-option'/>
        <BsInstagram className='contact-option'/>
        <BsYoutube className='contact-option'/>
        <BsLinkedin className='contact-option'/>
        <BsWordpress className='contact-option'/>
      </div>

      <hr></hr>

      <p>Copyright @ 2022 RedQ, Inc.</p>
    </div>
    </div>
  )
}

export default Footer