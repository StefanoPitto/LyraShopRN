import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackNavigator } from "../StackNavigator/HomeStackNavigator";

const Tab = createBottomTabNavigator();

export const Navigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="HomeStackNavigator"
      options={{ title: "Home" }}
      component={HomeStackNavigator}
    />
  </Tab.Navigator>
);
