import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import React from "react";
import { Image, View } from "react-native";
import gradell from "../assets/AppIcon/splash.png";
import {
  ATMlocator,
  AlertNotification,
  Logout,
  PayBills,
  SettingsScreen,
  Support,
  Transaction,
  TransactionInformation,
  Transfer,
} from "../screens";

import AppNavigator from "./AppNavigator"

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          height: 150,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={gradell} style={{ width: 120, height: 120 }} />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const TransactionStackNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerActiveTintColor: "orange",
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Dashboard" component={AppNavigator} />
      <Drawer.Screen name="TRANSACTIONS" component={Transaction} />
      <Drawer.Screen name="TRANSFER" component={Transfer} />
      <Drawer.Screen name="PAYBILLS" component={PayBills} />
      <Drawer.Screen name="ATMLOCATOR" component={ATMlocator} />
      <Drawer.Screen
        name="TRANSACTIONINFO"
        component={TransactionInformation}
      />
      <Drawer.Screen name="SUPPORT" component={Support} />
      <Drawer.Screen name="ALERTSNOTIFICATION" component={AlertNotification} />
      <Drawer.Screen name="SETTINGS" component={SettingsScreen} />
      <Drawer.Screen name="LOGOUT" component={Logout} />
    </Drawer.Navigator>
  );
};

export default TransactionStackNavigator;
