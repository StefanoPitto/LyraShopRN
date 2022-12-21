import React, { useContext } from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  ActivityIndicator,
} from "react-native";
import { ProductItem } from "../Components/ProductItem";
import { Text } from "../Components/Text";
import FavoriteContext from "../Context/FavoriteContext/FavoriteContext";
import { LinearGradient } from "expo-linear-gradient";
export const FavoriteItemsScreen = () => {
  const { favorites, loading } = useContext(FavoriteContext);

  return (
    <LinearGradient
      // Button Linear Gradient
      colors={["#E58C8A", "#EEC0C6"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
        <Text style={style.headline}>Favorites</Text>
        <View>
          {loading ? (
            <ActivityIndicator />
          ) : favorites.length > 0 ? (
            <FlatList
              data={favorites}
              style={style.list}
              renderItem={({ item }) => <ProductItem item={item} />}
            />
          ) : (
            <Text style={style.alternativeText}>No favorite items...</Text>
          )}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  headline: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 40,
    letterSpacing: 4,
    marginTop: 20,
  },
  list: {
    marginBottom: 100,
  },
  alternativeText: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 200,
    color: "#ffffff",
  },
});
