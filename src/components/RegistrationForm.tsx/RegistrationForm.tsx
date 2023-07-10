import isEmail from "validator/lib/isEmail";
import MainField from "../Feild/MainField";

interface IFormValue {
  [key: string]: string;
}
interface IError {
  email: string;
  password: string;
}

export default ({
  formValue,
  error,
}: {
  formValue?: IFormValue;
  error?: IError;
}) => {
  return (
    <div>
      <MainField
        keyForm="email"
        value={formValue}
        text="البريد الالكتروني"
        type="email"
        pushErrorMsg={error?.email}
        errorMsg="البريد الالكتروني غير صحيح"
        validate={(input) => {
          const valid = isEmail(input);
          return valid;
        }}
      />
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          gap: "30px",
        }}
      >
        <MainField
          text="الاسم الاخير"
          validate={(e) => {
            return e.length > 3 && e.length < 40;
          }}
          errorMsg="يجب ان يتكون من 3 احرف على الاقل"
          type="text"
        />
        <MainField
          text="الاسم الاول"
          validate={(e) => {
            return e.length > 3 && e.length < 40;
          }}
          errorMsg="يجب ان يتكون من 3 احرف على الاقل"
          type="text"
        />
      </div>
      <MainField text="رقم الهاتف" type="number" />
      <MainField
        keyForm="password"
        value={formValue}
        text="كلمة المرور"
        type="password"
      />
      <MainField
        validate={(e) => {
          return e === formValue?.password;
        }}
        pushErrorMsg={error?.password}
        errorMsg="كلمة السر غير مطابقة"
        text="تاكيد كلمة المرور"
        type="password"
      />
    </div>
  );
};
