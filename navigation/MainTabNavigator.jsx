import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import TabBarIcon from "../components/TabBarIcon";
import { SettingsScreen, TransactionInformation, Transfer } from "../screens";

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "TRANSACTIONS") {
            iconName = focused
              ? "information-circle"
              : "information-circle-outline";
          } else if (route.name === "TRANSFER") {
            iconName = "link";
          } else if (route.name === "SETTINGS") {
            iconName = "options";
          }
          return <TabBarIcon name={iconName} focused={focused} />;
        },
        tabBarActiveTintColor: "#008CFE",
        tabBarInactiveTintColor: "#828282",
      })}
      initialRouteName="TRANSACTIONS"
    >
      <Tab.Screen name="TRANSACTIONS" component={TransactionInformation} />
      <Tab.Screen name="TRANSFER" component={Transfer} />
      <Tab.Screen name="SETTINGS" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
