import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import {MdArrowForwardIos} from 'react-icons/md';


const Crumb = ({data}) => {

    const Datalink = data.slice(0,(data.length-1));
    console.log(Datalink);

  return (

    <div className='crumb'>
        {Datalink.map(d=><div className='div-crumb'><Link className='link-crumb'>{d}</Link><MdArrowForwardIos/></div>)}
        
        <div className='div-crumb'><Link className='link-crumb'><span>{data[data.length-1]}</span></Link></div>
        </div>
  )
}

export default Crumb