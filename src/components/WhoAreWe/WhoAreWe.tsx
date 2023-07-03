import MainButton from "../MainButton/MainButton";
import H1 from "../SimpleComponents/H1";
import "./style.scss";
export default () => {
  return (
    <div className="whoAreWe">
      <div className="galleryWho">
        <div className="text">
          <H1>من نحن</H1>
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
        <div className="images">
          <div className="imageGroup">
            <img
              style={{ marginBottom: "20px", marginTop: "20px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxELxHjXiVKfNX5i6fHyJV7UPRRggj0SvaV42qt6KtqaHvkcW3"
            />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxELxHjXiVKfNX5i6fHyJV7UPRRggj0SvaV42qt6KtqaHvkcW3" />
          </div>
          <div className="imageGroup">
            <img
              style={{ marginBottom: "20px", marginTop: "10px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxELxHjXiVKfNX5i6fHyJV7UPRRggj0SvaV42qt6KtqaHvkcW3"
            />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxELxHjXiVKfNX5i6fHyJV7UPRRggj0SvaV42qt6KtqaHvkcW3" />
          </div>
        </div>
      </div>
    </div>
  );
};
