import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { SliderProductItem } from "./SliderProductItem";
import { Text } from "./Text";
import uuid from "react-native-uuid";
export const HorizontalSlider = ({ products, title }) => {
  return (
    <>
      <Text style={styles.headline}>{title}</Text>
      {products && (
        <FlatList
          style={styles.list}
          horizontal
          data={products}
          keyExtractor={() => uuid.v4()}
          renderItem={({ item }) => (
            <SliderProductItem item={item} key={uuid.v4()} />
          )}
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
