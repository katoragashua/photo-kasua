import { useState, useEffect, useContext, useRef } from "react";
import { Context } from "../Context";
import { useNavigate } from "react-router-dom";

const Search = (props) => {
  const { updateQuery, hour, query, searchBg, photographer, handleQuery } =
    useContext(Context);

  const [userSearch, setUserSearch] = useState("");

  const handleUserSearch = (e) => {
    const { value, name } = e.target;
    setUserSearch((prev) => value);
  };

  // Used to get query
  const queryRef = useRef(null);

  // Used to navigate to Photos page
  const navigate = useNavigate();

  console.log(query);
  // Creating a search input with navigation logic and query updating logic
  const searchQuery = (
    <div className="search-query">
      <input
        type="search"
        ref={queryRef}
        value={userSearch}
        onChange={handleUserSearch}
        className="search-inp"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            navigate(`./photos/${userSearch}`);
            updateQuery(userSearch);
          }
        }}
        placeholder="Search Photos"
      />
      <span
        className="enterBtn"
        onClick={() => {
          navigate(`./photos/${userSearch}`);
          updateQuery(userSearch);
        }}
      >
        Search
      </span>
    </div>
  );

  return (
    <div
      className="search"
      style={{
        backgroundImage: `url(${searchBg})`,
      }}
    >
      <h2
        style={{
          textAlign: "center",
          textShadow: "2px 2px 2px black",
          color: "white",
        }}
      >
        Download free stock photos, royalty free, or buy them in frames.
      </h2>
      <div className="container">{searchQuery}</div>
      <p
        style={{
          textAlign: "center",
          textShadow: "2px 2px 2px black",
          color: "white",
        }}
      >
        photo by {photographer}
      </p>
    </div>
  );
};

export default Search;
