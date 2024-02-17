import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Platform } from "react-native";
import TabBarIcon from "../components/TabBarIcon";
import { HomeScreen, LinksScreen, SettingsScreen } from "../screens";

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? "information-circle"
              : "information-circle-outline";
          } else if (route.name === "Links") {
            iconName = "link";
          } else if (route.name === "Settings") {
            iconName = "options";
          }

          // You can return any component that you like here!
          return (
            <TabBarIcon
              name={
                Platform.OS === "ios" ? `ios-${iconName}` : `md-${iconName}`
              }
              focused={focused}
            />
          );
        },
        tabBarActiveTintColor: "#008CFE",
        tabBarInactiveTintColor: "#828282",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Links" component={LinksScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
