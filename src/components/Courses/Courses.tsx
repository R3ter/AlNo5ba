import H1 from "../SimpleComponents/H1";
import P from "../SimpleComponents/P";

export default () => {
  const courses = [
    {
      name: "dawadw",
      image:
        "https://www.responsiveclassroom.org/wp-content/uploads/2016/04/DSC_2388-500x333.jpg",
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Aliquam asperiores vitae qui cum repellendus magnam culpa
        laudantium. Ut temporibus excepturi maiores totam! Reprehenderit
        quis sit sapiente dolores quidem, molestiae ut.`,
    },
    {
      name: "dawadw",
      image:
        "https://www.responsiveclassroom.org/wp-content/uploads/2016/04/DSC_2388-500x333.jpg",
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Aliquam asperiores vitae qui cum repellendus magnam culpa
        laudantium. Ut temporibus excepturi maiores totam! Reprehenderit
        quis sit sapiente dolores quidem, molestiae ut.`,
    },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ maxWidth: "1000px", marginBottom: "100px" }}>
        <H1>الكورسات</H1>
        <div style={{ gap: 60, display: "flex", flexDirection: "column" }}>
          {courses.map(({ name, image, description }) => {
            return (
              <div style={{ display: "flex", gap: 60 }}>
                <div>
                  <H1>{name}</H1>
                  <P>{description}</P>
                </div>
                <img
                  style={{
                    borderRadius: "5px",
                    width: "500px",
                    height: "200px",
                  }}
                  src={image}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
