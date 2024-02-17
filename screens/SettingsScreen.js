import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { HeaderContainer } from "../components/Header";

const SettingsScreen = () => {
  return (
    <React.Fragment>
      <HeaderContainer text={"SETTINGS"} />
      <ScrollView style={styles.container}></ScrollView>
    </React.Fragment>
  );
};

SettingsScreen.navigationOptions = {
  drawerIcon: ({ tintColor }) => (
    <MaterialCommunityIcons
      name="settings-outline"
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

export default SettingsScreen;
