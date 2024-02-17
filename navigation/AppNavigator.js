import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TransactionStackNavigator from "./DrawerNavigation";
import { SignIn, SignUp, TransactionInformation } from "../screens";

const Stack = createStackNavigator();

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255, 45, 85)",
  },
};

function AppNavigator() {
  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={TransactionStackNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TransactionInformation"
          component={TransactionInformation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
