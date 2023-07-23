import { useContext, useRef, useState } from "react";
import MainField from "../Feild/MainField";
import isEmail from "validator/lib/isEmail";
import MainButton from "../MainButton/MainButton";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../gql/login";
import { PopupContext } from "../Context/PopUpContext";
import { setLoginCredentials } from "../../func/Cookies";
import { useNavigate } from "react-router-dom";

export default () => {
  const form = useRef({ email: "", password: "" });
  const [error, setError] = useState("");
  const [mutate] = useMutation(LOGIN);
  const { closePopup } = useContext(PopupContext);
  const navigate = useNavigate();
  const loginSucc = ({
    token,
    firstName,
    lastName,
    id,
  }: {
    token: string;
    firstName: string;
    lastName: string;
    id: string;
  }) => {
    setLoginCredentials({ token, firstName, lastName, id });
    closePopup();
  };
  return (
    <div>
      <MainField
        value={form.current}
        keyForm="email"
        text="البريد الالكتروني"
        type="email"
      />
      <MainField
        value={form.current}
        keyForm="password"
        text="كلمة المرور"
        type="password"
        style={{ marginBottom: "50px" }}
      />

      {error && (
        <p style={{ color: "red", marginTop: "30px", marginBottom: "0px" }}>
          {error}
        </p>
      )}
      <MainButton
        onClick={(setLoading) => {
          setLoading(true);
          setError("");
          if (!isEmail(form.current.email)) {
            setError("الرجاء ادخال الايميل بشكل صحيح");
            return;
          }
          if (form.current.password == "") {
            setError("الرجاء ادخال كلمة المرور");
            return;
          }
          mutate({
            onCompleted(data) {
              if (!data.login.result) setError("كلمة المرور غير صحيحة");
              if (data.login.result) {
                loginSucc(data.login.credentials);
                setError("");
                navigate(0);
              }
              setLoading(false);
            },
            variables: {
              data: {
                email: form.current.email,
                password: form.current.password,
              },
            },
          });
        }}
        full
        text={"تسجيل"}
      />
    </div>
  );
};
