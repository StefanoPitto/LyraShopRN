import React, { useState } from "react";
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

export const ProductDetailScreen = ({ route, navigation }) => {
  const { imageURL, productName, productPrice } = route.params;
  const [selectedValue, setSelectedValue] = useState();
  const sizes = [
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
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={["#E58C8A", "#EEC0C6"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
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
              onPress={() => console.log("Added to favorites.")}
              style={styles.favoriteBtn}
            >
              <MaterialIcons name="favorite-outline" size={24} color="black" />
              {/* <MaterialIcons name="favorite" size={30} color="black" /> */}
            </Pressable>
          </View>
          <View>
            <Image style={styles.image} source={{ uri: imageURL }} />
          </View>
          <View style={styles.headTextContainer}>
            <Text style={styles.nameText}>{productName}</Text>
            <Text style={styles.priceText}>$ {productPrice}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.sizeHeadline}>Size</Text>
            <FlatList
              data={sizes}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <Pressable
                    style={[
                      styles.sizeBtn,
                      selectedValue === item ? styles.selectedSizeBtn : "",
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
          </View>
          <TouchableOpacity style={styles.addToCartBtn}>
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