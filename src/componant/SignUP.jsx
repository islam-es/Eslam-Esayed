import React, { useEffect, useState } from "react";
import style from "../styles/sign.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUP = () => {
  const [gov, setGov] = useState("");
  const [index, setIndex] = useState();
  let [flag, setFlag] = useState(false);
  const handleCity = (e) => {
    setGov(e.target.value);
    setFlag(true);
    const selectedOption = e.target.options[e.target.selectedIndex];
    setIndex(selectedOption.getAttribute("index"));
    console.log("Index of selected option:", index);
  };
  const Government = () => {
    axios
      .get("https://atfawry.fawrystaging.com/ECommerceWeb/api/lookups/govs")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    Government();
  }, []);
  const [city, setCity] = useState([
    ["ahmed", "ali"],
    [10, 30],
    [2],
    [3],
    [4],
    [5],
    [6],
    [7],
    [8],
    [9],
    [10],
      [
      "شبين الكوم",
      "الباجور",
      "الشهداء",
      "قويسنا",
      "منوف",
      "سرس الليان",
      "بركه السبع",
      "تلا",
      ],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]);
  return (
    <div className={`${style.body}`}>
      <div className={`container p-4`}>
        <div className={`${style.foir} container col-lg-8 col-sm-12 py-3 bg-white rounded-4 `}>
          <h2 className="text-center mb-4">انشاء حساب</h2>
            <div className={`text-center`}>
              <span></span>
              <span></span>
    </div>
          <form class="row g-3 col-md-10 mx-auto"> <div class="col-md-6"> <label for="validationDefault01" class="form-label">الاسم الاول</label> 
            <input type="text" class={`form-control ${style.inputChange}`} placeholder="الاسم الاول" id="validationDefault01" onInvalid={(e) => e.target.setCustomValidity("برجاء ادخال الاسم صحيح")} onInput={(e) => e.target.setCustomValidity("")} required/></div>
            <div class="col-md-6"> <label for="validationDefault02" class="form-label">اسم العائلة</label>
            <input type="text" class={`form-control ${style.inputChange}`} id="validationDefault02" placeholder="اسم العائلة" required/>
      </div>
            <div class="col-md-12"> <label for="email" class="form-label">الايميل</label> <input type="email" class={`form-control ${style.inputChange}`} name="email" id="email" placeholder="Example@gmail.com" aria-describedby="inputGroupPrepend2" required/></div>
            <div class="col-md-12"> <label for="id" class="form-label">الرقم القومى</label>
            <input type="number" class={`form-control ${style.inputChange}`} id="id" name="id" placeholder="ادخل 14 رقم" required/></div>
            <div class="col-md-12"> <label for="phone" class="form-label">الهاتف</label>
            <input type="tel" class={`form-control ${style.inputChange}`} name="phone" id="phone" placeholder="ادخل رقم الهاتف المحمول" required/></div>
            
            <div class="col-6"> <label for="gov" class="form-label">المحافظة </label>
              <select class="form-select" id="gov" onChange={handleCity} required value={gov} name="government">
                <option selected disabled value="">اختر المحافظة</option>
                <option value="القاهرة" index={0}> القاهرة</option>
                <option value="الإسكندرية" index={1}>الإسكندرية</option>
                <option value="الجيزة" index={2}>الجيزة</option>
                <option value="الشرقية" index={3}>الشرقية</option>
                <option value="الدقهلية" index={4}>الدقهلية</option>
                <option value="البحر الأحمر" index={5}>البحر الأحمر</option>
                <option value="الغربية" index={6}>الغربية</option>
                <option value="الفيوم" index={7}> الفيوم</option>
                <option value="الإسماعيلية" index={8}>الإسماعيلية</option>
                <option value="كفر الشيخ" index={9}>كفر الشيخ</option>
                <option value="مطروح" index={10}>مطروح</option>
                <option value="المنوفية" index={11}>المنوفية</option>
                <option value="قنا" index={12}>قنا</option>
                <option value="الأقصر" index={13}>الأقصر</option>
                <option value="أسوان" index={14}>أسوان</option>
                <option value="سوهاج" index={15}>سوهاج</option>
                <option value="بني سويف" index={16}> بني سويف</option>
                <option value="الوادي الجديد" index={17}>الوادي الجديد</option>
                <option value="البحيرة" index={18}>البحيرة</option>
                <option value="شمال سيناء" index={19}>شمال سيناء</option>
                <option value="جنوب سيناء" index={20}>جنوب سيناء</option>
                <option value="السويس" index={21}> السويس</option>
                <option value="المنيا" index={22}>المنيا</option>
                <option value="دمياط" index={23}>دمياط</option>
                <option value="الشرقية" index={24}>الشرقية</option>
                <option value="البحر الأحمر" index={25}>البحر الأحمر</option>
                <option value="الوادي الجديد" index={26}>الوادي الجديد</option>
              </select>
            </div>
              <div class="col-6"> <label for="city" class="form-label">المدينة</label>
                  <select class="form-select" id="city" disabled={!flag} required>
                    <option selected disabled value="">إختر المدينة</option>
                      {flag ? city[index].map((el) => { return <option>{el}</option>;}) : null}
                      </select>
              </div>
                    <div class="col-sm-12"> <label for="validationDefault03" class="form-label">إسم الشارع ورقم المنزل</label>
                    <input type="text" class={`form-control round-1 ${style.inputChange}`} id="validationDefault03" placeholder="إسم الشارع" required/>
                    </div>
                          <div class="col-md-12"> <label for="gender1" class="form-label">النوع</label> 
                          <div class="col-sm-6"> <input class="form-check-input" type="radio" name="gender" id="gender1"/> <label class="form-check-label me-1" for="gender1">ذكر</label></div>
                          <div class="col-sm-6"> <input class="form-check-input" type="radio" name="gender" id="gender2"/> <label class="form-check-label me-1" for="gender2">انثى</label></div>
                          </div>
                            <div class="col-12  text-center"> <button class="btn btn-dark" type="submit">إنشاء حساب</button></div>
                              <div className="text-center">لديك حساب بالفعل ؟{" "}<span><Link to="/signin">تسجيل الدخول</Link></span></div>
                          </form>
                        </div>
                      </div>
                    </div>
                  );
                }; 
              export default SignUP;
