import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductDetailScreen } from "../Screens/ProductDetailScreen";
import { FavoriteItemsScreen } from "../Screens/FavoriteItemsScreen";

const Stack = createNativeStackNavigator();

export const FavoriteStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="FavoriteItemsScreen"
        component={FavoriteItemsScreen}
      />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
};
