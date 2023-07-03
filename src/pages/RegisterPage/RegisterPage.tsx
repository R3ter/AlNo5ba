import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroTitle from "../../components/Hero/HeroTitle/HeroTitle";
import MainButton from "../../components/MainButton/MainButton";
import RegistrationForm from "../../components/RegistrationForm.tsx/RegistrationForm";
import StudentsReviews from "../../components/StudentsReviews/StudentsReviews";

export default () => {
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
          <RegistrationForm />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MainButton
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
