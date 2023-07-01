import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default () => {
  const images = [
    "https://www.responsiveclassroom.org/wp-content/uploads/2016/04/DSC_2388-500x333.jpg",
    "https://www.responsiveclassroom.org/wp-content/uploads/2016/04/DSC_2388-500x333.jpg",
    "https://www.responsiveclassroom.org/wp-content/uploads/2016/04/DSC_2388-500x333.jpg",
    "https://www.responsiveclassroom.org/wp-content/uploads/2016/04/DSC_2388-500x333.jpg",
  ];
  return (
    <div>
      <Carousel>
        {images.map((image) => (
          <div>
            <img src={image} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
