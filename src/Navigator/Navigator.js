import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackNavigator } from "../StackNavigator/HomeStackNavigator";
import { FavoriteStackNavigator } from "../StackNavigator/FavoriteStackNavigator";
import { MaterialIcons } from "@expo/vector-icons";
import { CartScreen } from "../Screens/CartScreen";
const Tab = createBottomTabNavigator();

export const Navigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: () => {
        let iconName = "";
        switch (route.name) {
          case "FavoriteStackNavigator":
            iconName = "favorite";
            break;
          case "HomeStackNavigator":
            iconName = "home";
            break;
          case "CartScreen":
            iconName = "shopping-bag";
            break;
        }
        return <MaterialIcons name={iconName} size={30} color="#E58C8A" />;
      },
      headerShown: false,
      tabBarShowLabel: false,
    })}
  >
    <Tab.Screen
      name="HomeStackNavigator"
      options={{ title: "Home" }}
      component={HomeStackNavigator}
    />
    <Tab.Screen
      name="FavoriteStackNavigator"
      options={{ title: "Favorites" }}
      component={FavoriteStackNavigator}
    />
    <Tab.Screen
      name="CartScreen"
      options={{ title: "Cart" }}
      component={CartScreen}
    />
  </Tab.Navigator>
);
