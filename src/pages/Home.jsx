import React, {useContext} from 'react';
import Img from "../components/Img";
import {Context} from "../Context";
import Masonry from "react-masonry-css";

const Home = (props) => {

    const {images, incrementPageNum} = useContext(Context);
    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1,
    };

// Mapping over images to display them on Home page
    const allImages = images.map(img => (<Img key={img.id} img={img} />) );
    return (
      <div style={{ textAlign: "center", padding: "1em 0" }}>
        <div className="home-page container">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {allImages}
          </Masonry>
        </div>
        <span className="load-more" onClick={incrementPageNum}>
          Load more
        </span>
      </div>
    );
}

export default Home