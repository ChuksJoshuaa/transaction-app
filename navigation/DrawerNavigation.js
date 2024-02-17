import React from "react";
import { Image, View } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import sunbank from "../assets/images/sunbank.png";
import  {
  ATMlocator,
  AlertNotification,
  TransactionInformation,
  Transaction,
  Support,
  Transfer,
  PayBills,
  Logout,
  SettingsScreen,
} from "../screens"

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
        <Image source={sunbank} style={{ width: 120, height: 120 }} />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const TransactionStackNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerActiveTintColor: "orange",
        }}
      >
        <Drawer.Screen name="TRANSACTIONS" component={Transaction} />
        <Drawer.Screen name="TRANSFER" component={Transfer} />
        <Drawer.Screen name="PAYBILLS" component={PayBills} />
        <Drawer.Screen name="ATMLOCATOR" component={ATMlocator} />
        <Drawer.Screen
          name="TRANSACTIONINFO"
          component={TransactionInformation}
        />
        <Drawer.Screen name="SUPPORT" component={Support} />
        <Drawer.Screen
          name="ALERTSNOTIFICATION"
          component={AlertNotification}
        />
        <Drawer.Screen name="SETTINGS" component={SettingsScreen} />
        <Drawer.Screen name="LOGOUT" component={Logout} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default TransactionStackNavigator;
