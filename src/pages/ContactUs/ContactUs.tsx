import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroTitle from "../../components/Hero/HeroTitle/HeroTitle";
import H1 from "../../components/SimpleComponents/H1";
import P from "../../components/SimpleComponents/P";
import ContactForm from "./ContactComponents/ContactForm";
import ContactInfo from "./ContactComponents/ContactInfo";
import GoogleMaps from "../../components/GoogleMaps/GoogleMaps";

export default () => {
  return (
    <div>
      <Header size="secondary" headerContent={<HeroTitle text="اتصل بنا" />} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ float: "right", margin: "50px", maxWidth: "1500px" }}>
          <H1>يسعدنا تواصلك معنا</H1>
          <P>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus quia
            quod tenetur, repellat non culpa rem incidunt magni dolorum totam
            ipsam quis eaque beatae modi harum similique accusamus dolor
            distinctio!
          </P>
          <div
            style={{
              display: "flex",
              marginTop: "50px",
              marginBottom: "50px",
              gap: 50,
            }}
          >
            <ContactForm />
            <ContactInfo />
          </div>
          <GoogleMaps />
        </div>
      </div>
      <Footer />
    </div>
  );
};
