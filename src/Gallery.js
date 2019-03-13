import React from "react";
import imageData from "./image-data";

class Gallery extends React.Component {
  render() {
    const imgTile = imageData.map((temp, index) => {
      return (
        <div className="imgBox" key={index}>
          <img src={temp.src} alt={temp.alt} title={temp.title} />
        </div>
      );
    });
    return <div className="container">{imgTile}</div>;
  }
}

export default Gallery;
