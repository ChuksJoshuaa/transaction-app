import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { HeaderContainer } from "../components/Header";

const ATMlocator = () => {
  return (
    <React.Fragment>
      <HeaderContainer text={"ATM"} />
      <ScrollView style={styles.container}></ScrollView>
    </React.Fragment>
  );
};

ATMlocator.navigationOptions = {
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons
      name="local-atm"
      style={{ fontSize: 24, color: tintColor }}
    />
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

export default ATMlocator;
