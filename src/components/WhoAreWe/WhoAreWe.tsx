import MainButton from "../MainButton/MainButton";

export default () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          gap: 50,
          display: "flex",
          maxWidth: "1500px",
          marginRight: "50px",
          marginLeft: "50px",
        }}
      >
        <div style={{ flexDirection: "column", textAlign: "right" }}>
          <h1 style={{ color: "#273572" }}>من نحن</h1>
          <h2 style={{ color: "#273572" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            dolor unde
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            quas perspiciatis perferendis consequatur voluptatibus architecto
            corporis expedita optio eaque molestiae nemo quidem veniam vel
            impedit voluptate doloremque, et minima voluptatem! Maxime alias
            cumque rem rerum! Aperiam eius exercitationem architecto harum
            laudantium voluptatibus! Molestias, deleniti! Molestiae laudantium
            error accusantium, deleniti, a libero aliquid tempora fugiat culpa
            odit quia placeat aspernatur dicta? Sint blanditiis omnis deleniti
            culpa, voluptatum commodi pariatur explicabo dolorum nesciunt
            impedit, id vitae sequi non adipisci quo autem possimus vero
            cupiditate quod tenetur ratione a aspernatur quidem suscipit. Totam!
            Debitis saepe
          </p>
          <MainButton text={"اشترك الان"} />
        </div>
        <div style={{ display: "flex", gap: 30 }}>
          <div style={{ display: "flex", gap: 30, flexDirection: "column" }}>
            <img
              style={{ height: "240px", width: "230px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxELxHjXiVKfNX5i6fHyJV7UPRRggj0SvaV42qt6KtqaHvkcW3"
            />
            <img
              style={{ height: "240px", width: "230px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxELxHjXiVKfNX5i6fHyJV7UPRRggj0SvaV42qt6KtqaHvkcW3"
            />
          </div>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              gap: 30,
              flexDirection: "column",
            }}
          >
            <img
              style={{ height: "240px", width: "230px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxELxHjXiVKfNX5i6fHyJV7UPRRggj0SvaV42qt6KtqaHvkcW3"
            />
            <img
              style={{ height: "240px", width: "230px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxELxHjXiVKfNX5i6fHyJV7UPRRggj0SvaV42qt6KtqaHvkcW3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
