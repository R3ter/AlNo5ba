import Courses from "../../components/Courses/Courses";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroTitle from "../../components/Hero/HeroTitle/HeroTitle";
import StudentsReviews from "../../components/StudentsReviews/StudentsReviews";

export default () => {
  return (
    <div>
      <Header size="secondary" headerContent={<HeroTitle text="الكورسات" />} />

      <StudentsReviews />
      <Courses />

      <Footer />
    </div>
  );
};
