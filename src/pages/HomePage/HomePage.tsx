import BestTeachers from "../../components/BestTeachers/BestTeachers";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HomeScreenHero from "../../components/HomeScreenHero/HomeScreenHero";
import Numbers from "../../components/Numbers/Numbers";
import StudentsReviews from "../../components/StudentsReviews/StudentsReviews";

export default () => {
  return (
    <div style={{ width: "fit-content" }}>
      <Header size="main" headerContent={<HomeScreenHero />} />
      <Numbers />
      <StudentsReviews />
      <BestTeachers />
      <Footer />
    </div>
  );
};
