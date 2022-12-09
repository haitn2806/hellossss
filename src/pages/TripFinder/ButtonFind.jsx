import React,{useState} from 'react';


const ButtonFind = ({data,value,click}) => {
    
    const [act,setact] = useState('btn-normal');
    const Act = (e) => {
        act=='btn-normal'?setact('btn-active'):setact('btn-normal');
        click(e);
    }


  return (
    <button className={`${act} full`} onClick={(e)=>Act(e)} value={value}>{data}</button>
  )
}

export default ButtonFind