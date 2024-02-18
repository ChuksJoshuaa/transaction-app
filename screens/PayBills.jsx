import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { HeaderContainer } from "../components/Header";

const PayBills = () => {
  return (
    <React.Fragment>
      <HeaderContainer text={"PAYBILLS"} />
      <ScrollView style={styles.container}></ScrollView>
    </React.Fragment>
  );
};

PayBills.navigationOptions = {
  drawerIcon: ({ tintColor }) => (
    <FontAwesome name="paypal" style={{ fontSize: 24, color: tintColor }} />
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff",
  },
  headerText: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PayBills;
