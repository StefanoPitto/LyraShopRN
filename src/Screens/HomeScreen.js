import React from "react";
import {
  View,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
} from "react-native";

import { Text } from "../Components/Text";
import { useProducts } from "../Hooks/useProducts";
import { LinearGradient } from "expo-linear-gradient";
import { HorizontalSlider } from "../Components/HorizontalSlider";

export const HomeScreen = () => {
  const { loading, products } = useProducts();

  const getRandomElements = (array, numberOfElements) => {
    let randomElements = [];
    for (let i = 0; i < numberOfElements; i++) {
      randomElements.push(array[Math.floor(Math.random() * array.length)]);
    }
    return randomElements;
  };

  return (
    <LinearGradient
      // Button Linear Gradient
      colors={["#E58C8A", "#EEC0C6"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ marginVertical: 20 }}
        >
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
              <ActivityIndicator style={{ marginTop: 260 }} color="#ffffff" />
            ) : (
              <>
                <HorizontalSlider
                  products={getRandomElements(products, 10)}
                  title="Trending"
                />
                <HorizontalSlider
                  products={products.filter(
                    (item) => item.productType === "shoes"
                  )}
                  title="Shoes"
                />
                <HorizontalSlider
                  products={products.filter(
                    (item) => item.productType === "tops"
                  )}
                  title="Tops & T-Shirts"
                />
                <HorizontalSlider
                  products={products.filter(
                    (item) => item.productType === "pants"
                  )}
                  title="Pants"
                />
              </>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};
