import SignInForm from "../../SignInForm/SignInForm";
import P from "../../SimpleComponents/P";
import PopUp from "../PopUp";

export default ({ setShow }: { setShow: any }) => (
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
        <div style={{ display: "flex" }}>
          <P style={{ alignSelf: "center", marginLeft: "10px" }}>
            ليس لديك حساب ؟
          </P>
          <h4 style={{ alignSelf: "center" }}>تسجيل حساب جديد</h4>
        </div>
        <P>نسيت كلمة المرور</P>
      </div>
    }
  />
);
