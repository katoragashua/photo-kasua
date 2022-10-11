import React, { useContext } from "react";
import Img from "../components/Img";
import { Context } from "../Context";

const Photos = (props) => {
  const { photos, incrementPageNum } = useContext(Context);

  const allImages = photos.map((img) => <Img key={img.id} img={img} />);

  return (
    <div style={{ textAlign: "center", padding: "1em 0" }}>
      <div className="photos-page container">{allImages}</div>
      <span className="load-more" onClick={incrementPageNum}>
        Load more
      </span>
    </div>
  );
};

export default Photos;
