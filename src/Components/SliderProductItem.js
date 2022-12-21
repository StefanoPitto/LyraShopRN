import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "./Text";
import { useNavigation } from "@react-navigation/native";

export const SliderProductItem = ({ item }) => {
  const navigator = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigator.push("ProductDetailScreen", item);
      }}
      style={styles.outerContainer}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: item.imageURL }} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>{item.productName}</Text>
          <Text>${item.productPrice}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    marginHorizontal: 4,
  },
  container: {
    width: 300,
    marginTop: 10,
    marginHorizontal: 20,
    paddingVertical: 20,
    marginRight: "auto",
    marginLeft: "auto",
    backgroundColor: "#a8edf599",
    borderRadius: 10,
  },
  imageContainer: {
    width: 180,
    height: 180,
    marginRight: "auto",
    marginLeft: "auto",
  },
  image: {
    widht: 180,
    height: 180,
    resizeMode: "contain",
  },
  textStyle: {
    textAlign: "left",
    color: "#ffffff",
    fontSize: 16,
  },
  textContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
});
