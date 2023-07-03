import MajorCard from "./MajorCard";

export default () => {
  return (
    <div
      style={{
        backgroundColor: "#f1eded",
        textAlign: "center",
        marginTop: "100px",
        paddingTop: "10px",
      }}
    >
      <h1 style={{ color: "#3b4e82", marginBottom: "0" }}>Majors</h1>
      <h2 style={{ color: "#583284", margin: "5px", marginTop: "0" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 50,
          flexWrap: "wrap",
        }}
      >
        <MajorCard
          desc="Lorem ipsum dolor sit amet consectetur adipisic"
          title="التخصص الاول"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxELxHjXiVKfNX5i6fHyJV7UPRRggj0SvaV42qt6KtqaHvkcW3"
        />
        <MajorCard
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit."
          title="التخصص الاول"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxELxHjXiVKfNX5i6fHyJV7UPRRggj0SvaV42qt6KtqaHvkcW3"
        />
        <MajorCard
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit."
          title="التخصص الاول"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxELxHjXiVKfNX5i6fHyJV7UPRRggj0SvaV42qt6KtqaHvkcW3"
        />
        <MajorCard
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consecteturالتخصص الاول"
          title="التخصص الاول"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxELxHjXiVKfNX5i6fHyJV7UPRRggj0SvaV42qt6KtqaHvkcW3"
        />
      </div>
    </div>
  );
};
