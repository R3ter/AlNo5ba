import MainField from "../Feild/MainField";

interface IFormValue {
  [key: string]: string;
}

export default ({
  error,
  formValue,
}: {
  error?: string;
  formValue: IFormValue;
}) => {
  return (
    <div>
      <MainField
        value={formValue}
        keyForm="email"
        text="البريد الالكتروني"
        type="email"
      />
      <MainField
        value={formValue}
        keyForm="password"
        text="كلمة المرور"
        type="password"
      />
      {error && (
        <p style={{ color: "red", marginTop: "30px", marginBottom: "0px" }}>
          {error}
        </p>
      )}
    </div>
  );
};
