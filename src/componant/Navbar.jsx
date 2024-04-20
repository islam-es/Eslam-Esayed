import React from "react";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../styles/nav.module.css";
const Navbar = () => {
  const [flag, setflag] = useState(true);
  const spanRefs = useRef([]);
  const ulref = useRef();
  const handleIconClick = () => {
    setflag(!flag);
    if (flag) {
      console.log(ulref.current);
      ulref.current.style.display = "block";
      spanRefs.current[0].style.cssText =
        "width: 100%; transform-origin: right 0%; transform: rotate(-48deg);";
      spanRefs.current[1].style.opacity = "0";
      spanRefs.current[2].style.cssText =
        "width: 100%; transform-origin: right 0%; transform: rotate(45deg);";
    } else {
      ulref.current.style.display = "none";
      spanRefs.current[0].style.cssText =
        "width: 80%; transform-origin: right 0%; transform: rotate(0deg);";
      spanRefs.current[1].style.opacity = "1";
      spanRefs.current[2].style.cssText =
        "width: 80%; transform-origin: right 0%; transform: rotate(0deg);";
    }
  };
  let navigate = useNavigate();
  const ChangePath = (path) => {
    navigate(path);
  };
  return (
    <div>
      <div className={`${style.nav} `}>
        <div
          className={`${style.navContainer} container d-flex justify-content-between align-items-center`}
        >
          <div className={`${style.logo} `}>
            {" "}
                {/* <div className={`${style.logo_img} `}><img src={require("../images/@100.jpg")} alt="Thinking_img" /></div> */}
                <h3>Medi-Mind</h3>
                </div>
          <div>
            <div
              className={style.icon}
              onClick={(e) => {
                handleIconClick();
              }}
            >
              <span
                ref={(el) => (spanRefs.current[0] = el)}
                class={style.one}
              ></span>
              <span
                ref={(el) => (spanRefs.current[1] = el)}
                class={style.two}
              ></span>
              <span
                ref={(el) => (spanRefs.current[2] = el)}
                class={style.three}
              ></span>
            </div>
            <div
              className={`${style.links} col-sm-12 text-sm-center d-sm-flex align-item-center`}
              ref={ulref}
            >
              <ul className="d-flex flex-column flex-md-row text-sm-center">
                <li className=" ms-sm-1 mb-1 ">
                  {" "}
                  <Link to="/">الرئيسية</Link>
                </li>
                <li className=" ms-sm-1 mb-1">
                  {" "}
                  <Link to="/patiant">عنى</Link>
                </li>
                <li className=" ms-sm-1 mb-1">
                  {" "}
                  <Link to="/record/rosheta">السجل</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/contactus">تواصل معنا</Link>
                </li>
              </ul>
              <div className="m-4 m-sm-1">
                <button
                  onClick={() => ChangePath("/signin")}
                  className="btn btn-primary px-2 ms-1"
                >
                  تسجيل الدخول
                </button>
                <button
                  onClick={() => ChangePath("/signup")}
                  className="btn-dark btn px-2"
                >
                  {" "}
                  انشاء حساب{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
