import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SignInStackNavigator, SignUpNavigator, TransactionInfoNavigator  } from "./StackNavigator";
import { TransactionStackNavigator } from "./DrawerNavigation";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="SignUp"
          component={SignUpNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInStackNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={TransactionStackNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TransactionInformation"
          component={TransactionInfoNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
