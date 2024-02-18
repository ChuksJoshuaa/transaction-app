import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { HeaderContainer } from "../components/Header";

const Support = () => {
  Support.navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <FontAwesome name="support" style={{ fontSize: 24, color: tintColor }} />
    ),
  };

  return (
    <React.Fragment>
      <HeaderContainer text={"SUPPORT"} />
      <ScrollView style={styles.container}></ScrollView>
    </React.Fragment>
  );
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

export default Support;
