import { useNavigate } from "react-router-dom";
import SignInForm from "../../SignInForm/SignInForm";
import P from "../../SimpleComponents/P";
import PopUp from "../PopUp";
import "./style.scss";
import isEmail from "validator/lib/isEmail";
import MainButton from "../../MainButton/MainButton";
import { useContext, useRef, useState } from "react";
import { PopupContext } from "../../Context/PopUpContext";

export default () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const form = useRef({ email: "", password: "" });
  const { closePopup } = useContext(PopupContext);
  return (
    <PopUp
      form={<SignInForm formValue={form.current} error={error} />}
      submitButton={
        <MainButton
          onClick={(setLoading) => {
            setLoading(true);
            setError("");
            setTimeout(() => {
              setLoading(false);
              if (!isEmail(form.current.email)) {
                setError("الرجاء ادخال الايميل بشكل صحيح");
                return;
              }
              if (form.current.password == "") {
                setError("الرجاء ادخال كلمة المرور");
                return;
              }
              setError("كلمة المرور غير صحيحة");
            }, 1000);
          }}
          full
          text={"تسجيل"}
        />
      }
      title="تسجيل حساب جديد"
      extra={
        <div
          style={{
            display: "flex",
            direction: "rtl",
            justifyContent: "space-between",
          }}
        >
          <div className="loginExtra" style={{ display: "flex" }}>
            <div>
              <P
                style={{
                  alignSelf: "center",
                  marginLeft: "10px",
                }}
              >
                ليس لديك حساب ؟
              </P>
              <h4
                onClick={() => {
                  closePopup();
                  navigate("/register");
                }}
                style={{ alignSelf: "center", cursor: "pointer" }}
              >
                تسجيل حساب جديد
              </h4>
            </div>
            <p>نسيت كلمة المرور</p>
          </div>
        </div>
      }
    />
  );
};
