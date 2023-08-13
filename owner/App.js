import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet, View, Image } from "react-native";
import SignUp from "./screens/SignUp";
import MainPage from "./screens/MainPage";
import FindPw from "./screens/FindPw";
import WritingEventPage from "./screens/WritingEventPage";
import EventPage from "./screens/EventPage";
import ShopInformation from "./screens/ShopInformation";
import { DefaultTheme } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="WritingEventPage"
      >
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="FindPw" component={FindPw} />
        <Stack.Screen name="WritingEventPage" component={WritingEventPage} />
        <Stack.Screen name="EventPage" component={EventPage} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ShopInformation" component={ShopInformation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "white",
    },
  },
});
