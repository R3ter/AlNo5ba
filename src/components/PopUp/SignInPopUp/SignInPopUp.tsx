import { useNavigate } from "react-router-dom";
import SignInForm from "../../SignInForm/SignInForm";
import P from "../../SimpleComponents/P";
import PopUp from "../PopUp";
import "./style.scss";

export default ({ setShow }: { setShow: any }) => {
  const navigate = useNavigate();
  return (
    <PopUp
      setShow={setShow}
      form={<SignInForm />}
      submitText="تسجيل"
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
                  setShow.current(false);
                  navigate("/register");
                  console.log("dwawad");
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
