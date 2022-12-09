import React,{useState,useEffect} from 'react';
import './style.css';
import {BiEdit} from 'react-icons/bi';
import axios from 'axios';



const TourTable = ({edit,print,data}) => {
   
  ///////// API booking
      // const [Bookingdata, setBookingdata] = useState([]);

    
      // const CallApi =async()=>{

    
      //    const response = await axios({
      //        method: 'post',
      //        url: ' https://vnxpedia.3i.com.vn/TravelAPI/BookingTable?usercode=nguyenphu123',
      //        type: 'json'
      //    });
    
      //    if(response.status === 200){
      //        setBookingdata(response.data.Object)
      //    }     
      //   }
      //   console.log(Bookingdata);
      //   useEffect(()=>{
      //     CallApi();
      //   },[])
    
      
  return (
    <div className='table-booking'>
    {/* <Table columns={columns} dataSource={data1} onChange={onChange} /> */}
    <table className='table-booking-main'>
  <tr>
    <th>Ex</th>
    <th>Tour</th>
    <th>Customer</th>
    <th>StartDate</th>
    <th>BookingDate</th>
    <th>Number</th>
    <th>Status</th>
    <th>Price</th>
    <th>Edit</th>
  </tr>
  {data.length>0&&data.map((d,index)=><tr className='tr' >
    <td className='td-ex' onClick={()=>print(d)}>{index+1}</td>
    <td className='td-title' onClick={()=>print(d)}>{d.TourCode} <br/><p>{d.TourName[0].TourName}</p></td>
    <td className='td-name' onClick={()=>print(d)}>{d.FullName}</td>
    <td className='td-start' onClick={()=>print(d)}>{d.StartDate} <br/><p>even 15 days</p></td>
    <td className='td-book' onClick={()=>print(d)}>{d.Date}</td>
    <td  onClick={()=>print(d)}>{d.Adult} Adult {d.Children} Children</td>
    <td className={d.statuss} onClick={()=>print(d)}>{d.Status}</td>
    <td className='td-price' onClick={()=>print(d)}>{d.Price} $</td>
    <td className='td-edit'><BiEdit className='td-edit-icon' onClick={()=>edit(d)}/></td>
  </tr>)}

</table>

    </div>
  )
}

export default TourTable