import React from 'react';
import { useEffect,useState,useContext } from 'react';
import { UserContext } from '../../components/HeadFoot';
import axios from 'axios';
import Sellitem from '../../components/Sellitem';

const Rentfind = () => {
  const filerObj = useContext(UserContext).filtervalue;
  console.log(filerObj);
  const [rentList, setRentList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
    
  
      const callApi =async()=>{
          setIsLoading(true);
   
           const response = await axios({
               method: 'get',
               url: 'https://server-real-estate.herokuapp.com/api/v1/posts',
               type: 'json'
           });
   
           if(response.status === 200){
               setRentList(response.data.filter(d => d.sale_or_rent =='rent').filter(d => d.city == filerObj.local1))
           }
           
           setIsLoading(false);     
       }
   
       useEffect(()=>{
           callApi();  
        },[]);
        console.log(rentList);

  return (
    <div>
        <h3>Nhà đất cho thuê {filerObj.local1} {filerObj.cost1}</h3>
        { rentList.length >0 ? 
       
       (rentList.filter(d=>d.status==true).map((item,index) => (
      <Sellitem item={item}/>
       )))
     
  
    : (<h5>List empty</h5>)}
    </div>
  )
}

export default Rentfind