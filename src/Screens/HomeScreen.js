import React from "react";
import { View, SafeAreaView, ActivityIndicator } from "react-native";

import { Text } from "../Components/Text";
import { useProducts } from "../Hooks/useProducts";
import { LinearGradient } from "expo-linear-gradient";
import { HorizontalSlider } from "../Components/HorizontalSlider";

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
            <HorizontalSlider products={products} title="Shoes" />
          )}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};
