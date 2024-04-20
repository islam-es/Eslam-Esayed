import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import style from '../styles/rosheta.module.css'
const Rosheta = () => {
    const [visition_info, setVisition_info] = useState({});
    useEffect(() => {
      axios
        .get("https://fake-data-oj4s.onrender.com/patiants/0")
        .then((res) => {
          setVisition_info(res.data.visite);
        })
        .catch((err) => console.log(err));
    }, []);
    return (
      <>
       {Array.isArray(visition_info)?
        <div className={`${style.Box} d-flex flex-wrap justify-content-between mt-3`}>
       
        { visition_info &&Array.isArray(visition_info)&&
          visition_info.map((el, index) => {
            return (
              <div className={`${style.box} mb-3 col-5`} key={index}>
                <div className={`${style.doctor_info} p-3 w-fit-content`}>
                  <div>الدكتور</div>
                  <h3>{el.doctor}</h3>
                  <div>{el.dep}</div>
                  <div>{el.info?.phone}</div>
                  <div className={`${style.date}`}>
                  <span>{el.date?.day}/</span>
                  <span>{el.date?.monthe}/</span>
                  <span>{el.date?.year}</span>
                  </div>
                 
                </div>
                <div className={`${style.main_content} text-center container py-4`}>
                  <h4>الروشته</h4>
                  <div>
                    {el &&
                      el.rosheta &&
                      el.rosheta.map((el, index) => {
                        return (
                          <p key={index}>
                            <div>{el.name}</div>
                            <div>{el.description}</div>
                          </p>
                        );
                      })}
                  </div>
                  <h4>التحاليل</h4>
                  <div>
                    {el &&
                      el.tahlil &&
                      el.tahlil.map((el, index) => {
                        return <p key={index}>{el}</p>;
                      })}
                  </div>
                  <h4>الاشعه</h4>
                  <div>
                    {el &&
                      el.ashea &&
                      el.ashea.map((el, index) => {
                        return <p key={index}>{el}</p>;
                      })}
                  </div>
                </div>
              </div>
            );
          })}


      </div>
        :
        <div className='text-center position-relative mt-5'>
        <div className="spinner-border text-primary text-center d-block position-absolute start-50 " role="status" style={{top:"-30px"}}>
       
    </div>
         <span >جارى تحميل البيانات....</span>
         </div>
        }
    
      </>
    );
};

export default Rosheta;