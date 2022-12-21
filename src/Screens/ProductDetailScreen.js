import React, { useContext, useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from "../Components/Text";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import FavoriteContext from "../Context/FavoriteContext/FavoriteContext";
import Toast from "react-native-toast-message";
import CartContext from "../Context/CartContext/CartContext";

const shoesSizes = [
  "7",
  "7.5",
  "8",
  "8.5",
  "9",
  "9.5",
  "10",
  "10.5",
  "11",
  "11.5",
  "12",
];

const otherSizes = ["XS", "S", "M", "L", "XL", "XXL"];
export const ProductDetailScreen = ({ route, navigation }) => {
  const { favorites, addToFavorites, removeFromFavorites, isInFavorites } =
    useContext(FavoriteContext);
  const { addToCart, removeFromCart, isInCart } = useContext(CartContext);
  const [item, setItem] = useState();
  const [selectedValue, setSelectedValue] = useState();
  const [isFavorite, setIsFavorite] = useState(false);
  const [sizes, setSizes] = useState();
  const { id, productPrice, productName, productType, imageURL } = route.params;

  useEffect(() => {
    handleItem();
  }, []);

  const handleItem = () => {
    setItem(id, productPrice, productName, productType, imageURL);
    if (productType === undefined) return;
    productType === "shoes" ? setSizes(shoesSizes) : setSizes(otherSizes);
  };
  useEffect(() => {
    handleFavorite();
  }, [addToFavorites, removeFromFavorites, favorites]);

  const handleFavorite = () => {
    const value = isInFavorites(id);
    setIsFavorite(value);
  };

  const handleIsInCart = () => {
    const value = isInCart(id);
  };

  const showSizeToast = () => {
    Toast.show({
      type: "error",
      text1: "Something it's wrong!",
      text2: "Please choose your size before adding to cart.",
    });
  };

  const showAddToCartToast = () => {
    Toast.show({
      type: "success",
      text1: "Yay!",
      text2: "Product was added to cart.",
    });
  };

  const handleAddBtn = () => {
    if (!selectedValue) {
      showSizeToast();
      return;
    }
    showAddToCartToast();
    addToCart({ id, imageURL, productName, productPrice, size: selectedValue });
  };

  const handleRemoveBtn = () => {
    removeFromCart({ id, productName, productPrice, imageURL });
  };
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={["#E58C8A", "#EEC0C6"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <View style={{ display: "flex", margin: 0, zIndex: 20 }}>
          <Toast />
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.iconsContainer}>
            <Pressable
              onPress={() => {
                navigation.goBack();
              }}
              style={styles.goBackBtn}
            >
              <AntDesign name="arrowleft" size={36} color="white" />
            </Pressable>
            <Pressable
              onPress={() => {
                isFavorite
                  ? removeFromFavorites({
                      id,
                      imageURL,
                      productName,
                      productPrice,
                      productType,
                    })
                  : addToFavorites({
                      id,
                      imageURL,
                      productName,
                      productPrice,
                      productType,
                    });
              }}
              style={styles.favoriteBtn}
            >
              {isFavorite ? (
                <MaterialIcons name="favorite" size={24} color="#E58C8A" />
              ) : (
                <MaterialIcons
                  name="favorite-outline"
                  size={24}
                  color="black"
                />
              )}
            </Pressable>
          </View>
          {item && (
            <>
              <View>
                <Image style={styles.image} source={{ uri: imageURL }} />
              </View>
              <View style={styles.headTextContainer}>
                <Text style={styles.nameText}>{productName}</Text>
                <Text style={styles.priceText}>$ {productPrice}</Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.sizeHeadline}>Size</Text>
                {sizes && (
                  <FlatList
                    data={sizes}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                      return (
                        <Pressable
                          style={[
                            styles.sizeBtn,
                            selectedValue === item
                              ? styles.selectedSizeBtn
                              : "",
                          ]}
                          onPress={() => {
                            setSelectedValue(item);
                          }}
                        >
                          <Text
                            style={
                              selectedValue === item
                                ? styles.selectedSizeBtnText
                                : styles.sizeBtnText
                            }
                          >
                            {item}
                          </Text>
                        </Pressable>
                      );
                    }}
                  />
                )}
              </View>
            </>
          )}
          <TouchableOpacity style={styles.addToCartBtn} onPress={handleAddBtn}>
            <Text style={styles.btnText}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    marginLeft: "auto",
    marginRight: "auto",
  },
  headTextContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  sizeHeadline: {
    marginTop: 20,
    fontSize: 20,
    margin: 10,
  },
  nameText: {
    textAlign: "center",
    fontSize: 26,
    color: "#ffffff",
  },
  priceText: {
    textAlign: "center",
    fontSize: 26,
    color: "#000000",
  },
  addToCartBtn: {
    backgroundColor: "#000000",
    width: 300,
    height: 60,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 120,
    borderRadius: 10,
  },
  btnText: {
    color: "#ffffff",
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },
  mainContainer: {
    position: "relative",
    paddingHorizontal: 10,
  },
  goBackBtn: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  sizeBtn: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    margin: 4,
    borderRadius: 5,
  },
  sizeBtnText: {
    textAlign: "center",
    fontSize: 18,
    marginTop: "auto",
    marginBottom: "auto",
  },
  selectedSizeBtn: {
    backgroundColor: "#8FB8ED",
  },
  selectedSizeBtnText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    marginTop: "auto",
    marginBottom: "auto",
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  favoriteBtn: {
    backgroundColor: "#ffffff",
    borderRadius: 100,
    padding: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
});
