
import { useState } from "react";
import style from "../styles/record.module.css";
import Navbar from "./Navbar";
import Rosheta from "./Rosheta";
import { Link, Outlet } from "react-router-dom";
const Record = () => {
const [flag,setFlag]=useState(true)
  return (
    <>
   
    <section className={`${style.record} `}>
      <div className="container py-4">
        <h3 className="text-center py-3 fw-bold fs-2">السجل الطبى</h3>
        <div className={`${style.content_Box } `}>
<div className={`${style.side_bar} text-center`}>
    <ul className="d-flex justify-content-center p-0">
    <li>
  <Link className={`${style.active} fw-medium`} to="rosheta">الزيارات</Link>
 
</li>
<li>
<Link className={`fw-medium`} to="tahalil">التحاليل</Link>
 
</li>
<li>
<Link className={`fw-medium`} to="ashea">الاشعة</Link>
</li>
    </ul>
</div>
<div className="">
<Outlet/>
  
  
  </div>
        </div>
       
      </div>
    </section>
    </>
  );
};

export default Record;
