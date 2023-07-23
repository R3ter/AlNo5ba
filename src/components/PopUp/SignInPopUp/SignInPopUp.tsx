import { useNavigate } from "react-router-dom";
import SignInForm from "../../SignInForm/SignInForm";
import P from "../../SimpleComponents/P";
import PopUp from "../PopUp";
import "./style.scss";
import { useContext } from "react";
import { PopupContext } from "../../Context/PopUpContext";

export default () => {
  const navigate = useNavigate();
  const { closePopup } = useContext(PopupContext);
  return (
    <PopUp
      form={<SignInForm  />}
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
