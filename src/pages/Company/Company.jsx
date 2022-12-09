import React from "react";
import { useState,useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";


const Company = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const [Contentdata, setContentdata] = useState();
  const Location = useLocation();
  
  const param = useParams();
    const callApi =async()=>{
         const response = await axios({
             method: 'post',
             url: 'https://vnxpedia.3i.com.vn/TravelAPI/ListPost?CurrentPage=1',
             type: 'json'
         });
 
         if(response.status === 200){
          console.log('response.data',response.data);
             setContentdata(response.data.Object.find(d=>d.title.replace(/ /g, "")==param.id));
         }      
        }
        
 
     useEffect(()=>{
         callApi();     
         console.log(Contentdata);
     },[Location]);

  return (
    <div className="aboutus">
      {Contentdata && <div>
      <div className="au-title">
        <h1 className="au-h1 main-home">{Contentdata.title}</h1>
      </div>
      <div className="au-main" data-aos="zoom-in">
        <img
          className="au-img"
          src="https://th.bing.com/th/id/R.8b040e1db190fa0e5850486d7634cb26?rik=mdk%2bRGJBZxz%2bJQ&riu=http%3a%2f%2fclipart-library.com%2fimages%2f8Txrx4LRc.jpg&ehk=IZp9PoYzTYrYOWfxgMGaSuzbQx5AY4YfhL8YFy8tvMk%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        />
        <div > {Contentdata.intro_text}</div>
        <div className="au-exceptional" dangerouslySetInnerHTML={{ __html: Contentdata.full_text }}>
          

        </div>

      </div>
      </div>}
    </div>
  );
};

export default Company;
