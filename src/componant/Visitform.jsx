import React from "react";
import style from "../styles/visitform.module.css";
const Visitform = () => {
  return (
    <div className={`${style.visit_info} container py-4 radius-3`}>
      <h3 className="text-center fw-bold">إضافة زيارة</h3>
      <form action="" className="col-12 col-sm-10 col-md-10  container ">
        <div className="py-3">
          <form action="">
            <div className="">
              <div className="mb-3">
                <div className="mb-1">
                  {" "}
                  <label htmlFor="medicine-name">اسم الدواء</label>
                </div>
                <input
                  className="w-100"
                  type="text"
                  id="medicine-name"
                  placeholder="ادخل اسم الدواء"
                />
              </div>
              <div>
                <div className="mb-1">
                  {" "}
                  <label htmlFor="description">الوصف</label>
                </div>
                <input
                  className="w-100"
                  type="text"
                  id="description"
                  placeholder="ادخل الجرعة ومواعيد التناول"
                />
              </div>
            </div>
            <div className="text-center">
              {" "}
              <button type="submit" className="btn btn-dark btn-sm mt-3">
                إضافة
              </button>
            </div>
          </form>
        </div>

        <div className="py-3 ">
          <form action="">
            <div>
              <div className="mb-1">
                {" "}
                <label htmlFor="tahlil">التحاليل</label>
              </div>
              <input
                className="w-100"
                type="text"
                id="tahlil"
                placeholder="ادخل التحاليل المطلوبة"
              />
            </div>
            <div className="text-center">
              {" "}
              <button type="submit" className="btn btn-dark btn-sm mt-3">
              إضافة
              </button>
            </div>
          </form>
        </div>
        <div className="py-3 ">
          <form action="">
            <div>
              <div className="mb-1">
                <label htmlFor="ashea">الاشعة</label>
              </div>
              <input
                className="w-100"
                type="text"
                id="ashea"
                placeholder="أدخل الاشعة المطلوبة"
              />
            </div>
            <button type="submit" className="btn btn-dark btn-sm mt-3">
            إضافة
            </button>
          </form>
        </div>
        <div>
          <form action="">
            <div>
              <label htmlFor="text-area"> التقرير</label>
            </div>
            <textarea
              name=""
              id="text-area"
              cols="30"
              rows="7"
              className="w-100 "
            ></textarea>
          </form>
        </div>

        <div className="text-center">
          {" "}
          <button type="submit" className="btn btn-success ">
            حفظ
          </button>
        </div>
      </form>
    </div>
  );
};

export default Visitform;
