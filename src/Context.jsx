import React, { useState, useEffect } from "react";
const Context = React.createContext("");

const ContextProvider = (props) => {
  // Setting state
  const [images, setImages] = useState(() => []);
  const [cart, setCart] = useState(() => []);
  const [query, setQuery] = useState(() => "");
  const [page, setPage] = useState(() => 1);
  const [favoriteImages, setFavoriteImages] = useState(() => []);
  const [photographer, setPhotographer] = useState(() => "");
  const [screenSize, setScreenSize] = useState(() => false);

  // Declaring a state for the Search components background
  const [searchBg, setSearchBg] = useState(() => "");

  //State to hold queried photos
  const [photos, setPhotos] = useState(() => []);

  // Create a state to update searchBg every hour
  const [hour, setHour] = useState(() => new Date().getHours());

  // Getting API data and passing to state

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/random/?query=${query}&page=${page}&count=30&client_id=hjRE5t2RVXBqp561CfadH4aoW5oMSuEhDXsDxFJJ_nU`
    )
      .then((response) => response.json())
      .then((data) => {
        const photosArray = data.map((datum) => ({
          ...datum,
          isFavorite: false,
          price: getPrice(), // Add price
        }));

        //Setting images when query is falsy
        setImages((prev) => {
          if (!query) {
            return prev.concat(photosArray);
          } else {
            return prev;
          }
        });

        //Setting photos when query is truthy
        setPhotos((prev) => {
          if (query) {
            return prev.concat(photosArray);
          } else {
            return [];
          }
        });
      });
  }, [query, page]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHour((prev) => new Date().getHours());
    }, 60000);
    fetch(
      `https://api.unsplash.com//photos/random/?query=nature&orientation=landscape&client_id=hjRE5t2RVXBqp561CfadH4aoW5oMSuEhDXsDxFJJ_nU`
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchBg((prev) => data.urls.regular);
        setPhotographer((prev) => (
          <span>
            {data.user.first_name} {data.user.last_name}
          </span>
        ));
      });
    return () => clearInterval(interval);
  }, [hour]);

  // Increment page number
  const incrementPageNum = () => {
    setPage((prev) => prev + 1);
  };

  // Setting query
  function updateQuery(word) {
    setQuery((prev) => {
      if (word.trim() === "") {
        return "";
      } else {
        return word.trim();
      }
    });
  }


  // Setting the screenSize state to the window width and cleanup 
   ;

   useState(() => {
     window.addEventListener("resize", () => {
       setScreenSize(window.innerWidth);
     });
     return () =>
       window.removeEventListener("resize", () => {
         setScreenSize(window.innerWidth);
       });
   }, []);

  // const handleQuery = (e) => {
  //   const {value, name} = e.target
  //   setQuery(prev => ({...prev, [name]: value}))
  // }

  // Dynamically setting random price
  const getPrice = () => {
    let price = Math.floor(Math.random() * 5) + 3.99;
    return price;
  };

  // Favorite/like an image
  const favorite = (id) => {
    const arr = query !== "" ? photos : images;
    const photosArray = arr.map((img) => {
      if (img.id === id) {
        return {
          ...img,
          isFavorite: !img.isFavorite,
          likes: !img.isFavorite ? img.likes + 1 : img.likes - 1,
        };
      } else {
        return img;
      }
    });
    setImages((prev) => photosArray);
    setPhotos((prev) => photosArray);
  };

  const getFavImages = () => {
    const favImages = images.filter((img) => img.isFavorite);
    setFavoriteImages((prev) => favImages);
  };

  // console.log(favoriteImages);

  // Add image to cart
  const addToCart = (id) => {
    const arr = query ? photos : images;
    const photo = arr.find((img) => img.id === id);

    setCart((prev) => [...prev, photo]);
  };

  // Remove image from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((img) => img.id !== id));
  };

  // Empty cart
  const emptyCart = () => setCart([]);

  return (
    <Context.Provider
      value={{
        images,
        cart,
        query,
        photos,
        hour,
        favoriteImages,
        searchBg,
        photographer,
        screenSize,
        favorite,
        addToCart,
        removeFromCart,
        updateQuery,
        emptyCart,
        incrementPageNum,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
