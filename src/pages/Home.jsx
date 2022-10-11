import React, {useContext} from 'react';
import Img from "../components/Img";
import {Context} from "../Context";

const Home = (props) => {

    const {images, incrementPageNum} = useContext(Context);

// Mapping over images to display them on Home page
    const allImages = images.map(img => (<Img key={img.id} img={img} />) );
    return (
      <div style={{textAlign: 'center', padding: "1em 0"}}  >
        <div className="home-page container">{allImages}</div>
        <span className="load-more" onClick={incrementPageNum}>Load more</span>
      </div>
    );
}

export default Home