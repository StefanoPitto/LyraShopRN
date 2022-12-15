import React, { useContext } from "react";
import {
  TouchableOpacity,
  View,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Text } from "./Text";
import CartContext from "../Context/CartContext/CartContext";
export const CartItem = ({ item, id }) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.innerContainer}>
        <Image style={styles.image} source={{ uri: item.imageURL }} />
        <Text>{item.productName}</Text>
        <Text>{item.size}</Text>
        <Text>$ {item.productPrice}</Text>
        <Pressable
          style={{ zIndex: 10 }}
          onPress={() => {
            console.log("PRESSED");
            removeFromCart({ id, productPrice: item.productPrice });
          }}
        >
          <FontAwesome name="times" size={24} color="red" />
        </Pressable>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "#f1f3f5",
  },
  innerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
