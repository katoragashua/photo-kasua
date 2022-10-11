import { useContext } from "react";
import { Context } from "../Context";

const Favorites = (props) => {
  const { favoriteImages } = useContext(Context);
  console.log(favoriteImages);

  return <div className="favorites-page"></div>;
};

export default Favorites;
