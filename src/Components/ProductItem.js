import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text } from "./Text";
export const ProductItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.imageURL }} />
      <Text style={styles.textStyle}>{item.productName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: 180, marginTop: 80 },
  image: {
    widht: 180,
    height: 180,
    resizeMode: "contain",
  },
  textStyle: {
    textAlign: "left",
    marginTop: 40,
    color: "#ffffff",
    fontSize: 16,
  },
});
