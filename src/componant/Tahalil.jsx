import React, { useEffect, useState } from 'react';
import style from '../styles/tahalil.module.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Tahalil = () => {
    const[tahalil,setTahalil]=useState([])
    useEffect(()=>{
axios.get("https://fake-data-oj4s.onrender.com/patiants/0")
.then((res) => {
    setTahalil(res.data.done_tahalil);
  })
  .catch((err) => console.log(err));
    },[])
    return (
        <>
        {Array.isArray(tahalil)?
         <div className={`${style.tahalil}`}>
         <table class="table table-dark table-striped table-hover" style={{direction:"ltr"}}>
<thead>
 <tr className='text-center'>
     <th>#</th>
     <th>name</th>
     <th>Date</th>
     <th>Doctor</th>
     <th>Result</th>
 </tr>
</thead>
<tbody>
 {tahalil&&Array.isArray(tahalil)&&tahalil.map((el,index)=>{
     return(
         <tr key={index} className='text-center'>
             <td>{index +1}</td>
             <td>{el.name}</td>
             <td>{el.doctor}</td>
             <td>{el.date}</td>
             <td><Link to='/'>{el.result}</Link></td>
         </tr>
     )
 })}
</tbody>
</table>
     </div>
        :  <div className='text-center position-relative mt-5'>
        <div className="spinner-border text-primary text-center d-block position-absolute start-50 " role="status" style={{top:"-30px"}}>
       
    </div>
         <span >جارى تحميل البيانات....</span>
         </div>}
       
        </>
    );
};

export default Tahalil;