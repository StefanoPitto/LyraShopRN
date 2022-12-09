import React from "react";
import {
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from "react-native";
import { Text } from "../Components/Text";
import { useProducts } from "../Hooks/useProducts";
import { LinearGradient } from "expo-linear-gradient";
import { ProductItem } from "../Components/ProductItem";
export const HomeScreen = () => {
  const { loading, products } = useProducts();

  return (
    <LinearGradient
      // Button Linear Gradient
      colors={["#E58C8A", "#EEC0C6"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
        <View>
          <Text
            style={{
              fontSize: 40,
              color: "#ffffff",
              textAlign: "center",
              letterSpacing: 4,
              marginTop: 20,
            }}
          >
            LYRASHOP
          </Text>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              contentContainerStyle={style.list}
              data={products}
              style={style.list}
              numColumns="2"
              renderItem={({ item }) => <ProductItem item={item} />}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  list: {
    marginLeft: 12,
    marginBottom: 100,
  },
});
