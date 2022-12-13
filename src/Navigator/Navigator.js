import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackNavigator } from "../StackNavigator/HomeStackNavigator";
import { FavoriteStackNavigator } from "../StackNavigator/FavoriteStackNavigator";
import { MaterialIcons } from "@expo/vector-icons";

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
        }
        return <MaterialIcons name={iconName} size={30} color="#E58C8A" />;
      },
      headerShown: false,
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
  </Tab.Navigator>
);
