import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider } from "./FavoriteContext";

const FavoriteContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFavorites();
  }, []);

  const getFavorites = async () => {
    try {
      let data = await AsyncStorage.getItem("Favorites");
      if (data === null) return;
      setLoading(false);
      setFavorites(JSON.parse(data));
    } catch (error) {
      console.log(error);
    }
  };

  const addToFavorites = async (item) => {
    console.log("Add To Favorites");
    if (favorites.includes(item)) return;

    setFavorites([...favorites, item]);
    try {
      await AsyncStorage.setItem("Favorites", JSON.stringify(favorites));
    } catch (error) {
      // Error saving data
    }
    console.log(favorites);
  };

  const removeFromFavorites = async (item) => {
    try {
      const updatedFavorites = favorites.filter((f) => f.id !== item.id);
      setFavorites(updatedFavorites);
      await AsyncStorage.setItem("Favorites", JSON.stringify(updatedFavorites));
    } catch (error) {
      // Error saving data
    }
  };

  const isInFavorites = (item) => {
    let array = favorites.filter((element) => element.id === item);
    return array.length > 0;
  };

  return (
    <Provider
      value={{
        favorites,
        loading,
        addToFavorites,
        removeFromFavorites,
        isInFavorites,
      }}
    >
      {children}
    </Provider>
  );
};

export default FavoriteContextProvider;
