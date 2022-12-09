import React from 'react';
import axios from 'axios';
import { useState } from 'react';

 export const CallAPI = async({url}) => {

  const [Data, setData] = useState([])

     const response = await axios({
         method: 'post',
         url: {url},
         type: 'json'
     });

     if(response.status === 200){
         setData(response.data.Object)
     }    
    
  return [Data,response]
}

