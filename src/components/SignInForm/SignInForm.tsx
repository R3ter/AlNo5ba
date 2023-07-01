import MainField from "../Feild/MainField";

export default () => {
  return (
    <div>
      <MainField text="البريد الالكتروني" type="email" />
      <MainField text="كلمة المرور" type="password" />
    </div>
  );
};
