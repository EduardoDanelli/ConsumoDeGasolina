
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Calculo from "./src/calculo";
import Resultado from "./src/resultado";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="calculo"
          component={Calculo}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="resultado"
          component={Resultado}
          options={{
            title: "",
            headerTitleAlign: "left",
            headerTitleStyle: {
              fontSize: 18,
              marginLeft: -30,
              marginBottom: 2,
            },
            headerStyle: {
              elevation: 0,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}