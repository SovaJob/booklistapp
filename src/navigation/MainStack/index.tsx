/* REACT */
import React from "react";

/* COMPONENTS */
import { createStackNavigator } from "@react-navigation/stack";

/* CUSTOM COMPONENTS */
import MainScreen from "src/screens/MainScreen";

/* MODELS */
import {
  TRootStackParamList
} from "src/models"

const Stack = createStackNavigator<TRootStackParamList>();

const MainStack = () => (
  <Stack.Navigator initialRouteName="MainScreen">
    <Stack.Screen name="MainScreen" component={MainScreen} options={{ title: "", headerShown: false }} />
  </Stack.Navigator>
);
export default MainStack;
