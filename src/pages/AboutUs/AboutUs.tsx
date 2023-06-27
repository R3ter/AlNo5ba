import Facts from "../../components/Facts/Facts";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroTitle from "../../components/Hero/HeroTitle/HeroTitle";
import Majors from "../../components/Majors/Majors";
import Numbers from "../../components/Numbers/Numbers";
import WhoAreWe from "../../components/WhoAreWe/WhoAreWe";

export default () => {
  return (
    <div>
      <Header size="secondary" headerContent={<HeroTitle text="من نحن" />} />
      <WhoAreWe />
      <Majors />
      <Numbers />
      <Facts />
      <Footer />
    </div>
  );
};
