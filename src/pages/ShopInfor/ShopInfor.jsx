import Reac,{useState,useContext} from 'react';
import {UserContext} from '../../components/Layout';

const ShopInfor = () => {

    const user = useContext(UserContext);
    const EditShop = (user)=>{
        user.setShoped({
            data:user.shoped.data,
            people:user.shoped.people+1
        })
    }

  return (
    <div>
        <h1>Tour đã đặt</h1>
        <h1>{user.shoped.data.title}</h1>
        <h1>People : {user.shoped.people}</h1>
        <button onClick={()=>EditShop(user)}>Tăng người</button>
    </div>
  )
}

export default ShopInfor