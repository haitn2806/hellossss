import React, { useEffect ,useState ,useContext } from "react";
import { UserContext } from '../Layout';

const TourBox = ({data}) => {

  const user = useContext(UserContext);
  console.log(user); 
  const newshoped = (data) =>{
    const itemshoped = {
      data:data,
      people:10
     }
     user.setShoped(itemshoped);
  }

  return (
    <div className='tour-box'>
        <h1>{data.title}</h1>
        <button onClick={()=>newshoped(data)}>Buy!</button>
    </div>
  )
}

export default TourBox