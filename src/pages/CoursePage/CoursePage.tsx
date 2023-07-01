import BestTeachers from "../../components/BestTeachers/BestTeachers";
import CourseGallery from "../../components/CourseGallery/CourseGallery";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroTitle from "../../components/Hero/HeroTitle/HeroTitle";
import H1 from "../../components/SimpleComponents/H1";
import P from "../../components/SimpleComponents/P";
import UserGallery from "../../components/UserGallery/UserGallery";

export default () => {
  return (
    <div>
      <Header size="secondary" headerContent={<HeroTitle text="كورس" />} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 100,
            margin: "50px",
            maxWidth: "1500px",
          }}
        >
          <div>
            <H1>اسم الكورس</H1>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              natus fuga minima maxime doloribus? Dolores harum quod maiores sit
              commodi dignissimos soluta rerum quos nulla architecto, fugit,
              provident veniam voluptas. Delectus debitis quisquam maxime eos
              veritatis laboriosam, labore, laborum itaque maiores modi magnam?
              Soluta, veniam adipisci, odit eligendi doloribus voluptatem
              asperiores numquam quas nemo repellat iusto. At velit obcaecati
              numquam. Non ipsa provident laborum officia commodi doloribus,
              doloremque animi temporibus esse nulla, eaque officiis sequi
              laboriosam, recusandae sed facilis iste sit quos. Explicabo
              labore, optio sint ipsam dolore velit. Quos? Deleniti nostrum
              impedit corrupti facilis. Delectus adipisci sit similique eveniet
              omnis ullam sapiente? Incidunt optio numquam fugit, aperiam illo
              magnam consectetur veritatis quod facere a, officia enim tempore
              eos vero? Molestias eum explicabo reiciendis dicta assumenda
              nesciunt laboriosam, corrupti vitae neque dolorem, sit, harum
              labore suscipit? Eaque perferendis inventore nesciunt odit,
              tempore aperiam sit, officia nihil corrupti quia accusamus hic.
              Nihil quas delectus veritatis blanditiis neque debitis id suscipit
              nulla quia repellat temporibus harum illum, quibusdam ab Nostrum?
            </P>
          </div>
          <div style={{ alignSelf: "center" }}>
            <CourseGallery />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: "1200px" }}>
          <H1>الشهدات</H1>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            minus expedita, eos totam adipisci quam nisi, architecto tenetur non
            recusandae maiores mollitia et maxime consectetur debitis, suscipit
            eum dicta necessitatibus?
          </P>
        </div>
      </div>
      <BestTeachers />
      <H1 style={{ textAlign: "center" }}>اراء الطلاب</H1>
      <UserGallery />
      <Footer />
    </div>
  );
};
