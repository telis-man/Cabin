import { Link } from "react-router-dom";
import { ImgGallery } from "./styled/gallery.styled";

const imageContext = require.context(
  "../assets/images",
  false,
  /\.(jpg|jpeg|png)$/
);

export const Gallery = () => {
  const images = imageContext.keys().map(imageContext);

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <ImgGallery
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
        ></ImgGallery>
      ))}
    </div>
  );
};

export default Gallery;
