import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { SliderProductItem } from "./SliderProductItem";
import { Text } from "./Text";
export const HorizontalSlider = ({ products, title }) => {
  return (
    <>
      <Text style={styles.headline}>{title}</Text>
      {products && (
        <FlatList
          style={styles.list}
          horizontal
          data={products}
          renderItem={({ item }) => <SliderProductItem item={item} />}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    marginHorizontal: 20,
  },
  headline: {
    marginTop: 20,
    fontSize: 20,
    color: "#ffffff",
    marginLeft: 24,
    textTransform: "uppercase",
  },
});
