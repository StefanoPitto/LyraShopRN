import React, { useState } from "react";
import * as Font from "expo-font";
import { Text as RNText } from "react-native";
import { StyleSheet } from "react-native";

export const Text = ({ children, style }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  (async () => {
    await Font.loadAsync({
      Alexandria: require("../../assets/fonts/Alexandria-Regular.ttf"),
    });

    setFontsLoaded(true);
  })();
  return (
    <>
      {fontsLoaded ? (
        <RNText
          style={{
            fontFamily: "Alexandria" ? "Alexandria" : "",
            ...style,
          }}
        >
          {children}
        </RNText>
      ) : (
        <></>
      )}
    </>
  );
};
