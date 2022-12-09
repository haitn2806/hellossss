import React from 'react';
import {FcSearch} from 'react-icons/fc';
import './AseanMap.css';
import { useState } from 'react';
 
const AseanMap = () => {
    
    const listimg = [
        {
            img:'https://d2lwt6tidfiof0.cloudfront.net/images/otm_home/bg-map-vietnam.jpg',
            title:'Viet Nam',
            infor:'Đảng Cộng sản VN muôn năm'
        },
        {
            img:'https://d2lwt6tidfiof0.cloudfront.net/images/otm_home/bg-map-laos.jpg',
            title:'Lao',
            infor:'Xem đá bóng nhờ VN'
        },
        {
            img:'https://d2lwt6tidfiof0.cloudfront.net/images/otm_home/bg-map-cambodia.jpg',
            title:'Campuchia',
            infor:'Hơi bị cục súc'
        },
        {
            img:'https://d2lwt6tidfiof0.cloudfront.net/images/otm_home/bg-map-thailand.jpg',
            title:'Thai Lan',
            infor:'Đá bóng toàn thua VN'
        }
    ]
    const [img,setImg]= useState(listimg[0]);
    const [mapmini,setmapmini] = useState(true);



  return (
    <div className='asean-container'>
        <h1>WELLCOME TO ASEAN</h1>
        <p>At asiatours.com, we don't sell mass tour packages, every tour is privately customized & designed to suit your personal desire: budget, travel schedules, destinations, special requirements... Our Inside Travel Experts are always ready and happy to work with each customer individually to give you a dream trip.</p>
    <div className='asean-map'>
    <img src='https://d2lwt6tidfiof0.cloudfront.net/images/asia-map-h1.svg' className='map-img'/>
        <div className='map-infor'>
            <img src={img.img} className='infor-img'/>
            <h1>{img.title}</h1>
            <p>{img.infor}</p>
        </div>
        <FcSearch className='icon-s ics1' title='Viet Nam' onClick={()=>{setImg(listimg[0])}} />
        <FcSearch className='icon-s ics2' title='Lao' onClick={()=>{setImg(listimg[1])}}/>
        <FcSearch className='icon-s ics3' title='Camphuchua' onClick={()=>{setImg(listimg[2])}}/>
        <FcSearch className='icon-s ics4' title='Thai Lan' onClick={()=>{setImg(listimg[3])}}/>
        
        {(img==listimg[0])?<img src='https://simplemaps.com/static/svg/vn/vn.svg' className='vn-map' />:null}
        
    </div>
    </div>

  )
}

export default AseanMap