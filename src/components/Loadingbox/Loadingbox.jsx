import React from 'react';
import {ThreeDots} from  'react-loader-spinner';
import IMG from '../Header/logo-alt.png';
import './style.css';

const Loadingbox = () => {
  return (
    <div className='loading-container'>
    <div className='loading-box'>
       <img src={IMG}  className='loading-logo'/>
      <ThreeDots 
      height="80" 
      width="80" 
      radius="9"
      color="#4fa94d" 
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
      />
      </div> 
      </div>
  )
}

export default Loadingbox