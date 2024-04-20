import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import style from '../styles/ashea.module.css'
import { Link } from 'react-router-dom';
const Ashea = () => {
    const[ashea,setAshea]=useState([])
    useEffect(()=>{
axios.get("https://fake-data-oj4s.onrender.com/patiants/0")
.then((res) => {
    setAshea(res.data.done_ashea);
  })
  .catch((err) => console.log(err));
    },[])
    return (
        <div className={`${style.ashea}`}>
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
{ashea&&Array.isArray(ashea)&&ashea.map((el,index)=>{
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
    );
};

export default Ashea;