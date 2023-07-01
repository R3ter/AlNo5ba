import MainField from "../Feild/MainField";
import P from "../SimpleComponents/P";

export default () => {
  return (
    <div>
      <MainField text="البريد الالكتروني" type="email" />
      <MainField text="الاسم" type="email" />
      <MainField text="رقم الهاتف" type="email" />
      <MainField text="كلمة المرور" type="email" />
      <MainField text="تاكيد كلمة المرور" type="email" />
    </div>
  );
};
