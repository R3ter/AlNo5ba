import { useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroTitle from "../../components/Hero/HeroTitle/HeroTitle";
import MainButton from "../../components/MainButton/MainButton";
import RegistrationForm from "../../components/RegistrationForm.tsx/RegistrationForm";
import StudentsReviews from "../../components/StudentsReviews/StudentsReviews";

interface IErrors {
  password: string;
  email: string;
}
export default () => {
  const form = useRef<any>({});
  const [errors, setErrors] = useState<IErrors>({
    password: "",
    email: "",
  });
  useEffect(() => {
    window.scrollTo(0, 800);
  }, [errors]);
  return (
    <div>
      <Header size="secondary" headerContent={<HeroTitle text="تسجيل" />} />
      <StudentsReviews />
      <div
        style={{
          marginBottom: "100px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "20px", width: "100%" }}>
          <RegistrationForm formValue={form.current} error={errors} />

          {/* {Object.keys(errors).map((key) => {
            if (errors[key as keyof IErrors]) {
              return (
                <p
                  style={{
                    direction: "rtl",
                    color: "red",
                    margin: "15px",
                    alignSelf: "center",
                  }}
                >
                  <BiSolidErrorCircle
                    style={{
                      alignSelf: "center",
                      marginLeft: "10px",
                    }}
                  />
                  {errors[key as keyof IErrors]}
                </p>
              );
            }
            return "";
          })} */}

          <div style={{ display: "flex", justifyContent: "center" }}>
            <MainButton
              onClick={(setLoading) => {
                setErrors({
                  email: "البريد الالكتروني غير صحيح",
                  password: "كلمة السر غير مطابقة",
                });
                setLoading(true);
              }}
              text={"تسجيل"}
              style={{
                marginTop: "30px",
                paddingRight: "160px",
                paddingLeft: "160px",
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
