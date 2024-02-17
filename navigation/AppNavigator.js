import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TransactionStackNavigator } from "./DrawerNavigation";
import { SignIn, SignUp, TransactionInformation } from "../screens";

const Stack = createStackNavigator();

const SignUpNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
);

const SignInStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="SignIn" component={SignIn} />
  </Stack.Navigator>
);

const TransactionInfoNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="TransactionInformation"
      component={TransactionInformation}
    />
  </Stack.Navigator>
);

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
