import MainField from "../Feild/MainField";

export default () => {
  return (
    <div>
      <MainField text="البريد الالكتروني" type="email" />
      <MainField text="الاسم" type="text" />
      <MainField text="رقم الهاتف" type="number" />
      <MainField text="كلمة المرور" type="password" />
      <MainField text="تاكيد كلمة المرور" type="password" />
    </div>
  );
};
