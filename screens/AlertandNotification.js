import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { HeaderContainer } from "../components/Header";

const AlertNotification = () => {
  return (
    <React.Fragment>
      <HeaderContainer text={"NOTIFICATION"} />
      <ScrollView style={styles.container}></ScrollView>
    </React.Fragment>
  );
};

AlertNotification.navigationOptions = {
  drawerIcon: ({ tintColor }) => (
    <Ionicons name="notifications" style={{ fontSize: 24, color: tintColor }} />
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

export default AlertNotification;
