import React, { useContext } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { Text } from "../Components/Text";
import { LinearGradient } from "expo-linear-gradient";
import CartContext from "../Context/CartContext/CartContext";
import { FlatList } from "react-native-gesture-handler";
import { CartItem } from "../Components/CartItem";

export const CartScreen = () => {
  const { cartItems, totalCost } = useContext(CartContext);

  return (
    <LinearGradient
      // Button Linear Gradient
      colors={["#E58C8A", "#EEC0C6"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <View>
          <Text style={styles.headline}>Cart Items</Text>
        </View>
        {cartItems.length > 0 ? (
          <FlatList
            data={cartItems}
            keyExtractor={(item, index) => {
              return `${item.id}${index}`;
            }}
            renderItem={({ item, index }) => (
              <CartItem id={index} item={item} />
            )}
          />
        ) : (
          <Text style={styles.alternativeText}>No items on cart...</Text>
        )}
        {cartItems.length > 0 && (
          <View style={styles.costContainer}>
            <Text style={{ fontSize: 20 }}>Total cost:</Text>
            <Text style={{ fontSize: 20 }}>$ {totalCost}</Text>
          </View>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headline: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 40,
    letterSpacing: 4,
    marginTop: 20,
  },
  costContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    borderTopWidth: 4,
    borderTopColor: "black",
  },
  alternativeText: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 200,
    color: "#ffffff",
  },
});
