import RegistrationForm from "../../RegistrationForm.tsx/RegistrationForm";
import P from "../../SimpleComponents/P";
import PopUp from "../PopUp";

export default ({ setShow }: { setShow: any }) => (
  <PopUp
    setShow={setShow}
    form={<RegistrationForm />}
    submitText="تسجيل"
    title="تسجيل حساب جديد"
    extra={
      <div
        style={{
          display: "flex",
          direction: "rtl",
          justifyContent: "center",
        }}
      >
        <P style={{ alignSelf: "center", margin: "10px" }}>
          لديك حساب بالفعل ؟
        </P>
        <h4 style={{ alignSelf: "center" }}>تسجيل الدخول</h4>
      </div>
    }
  />
);
