import { Ionicons } from "@expo/vector-icons";
import { Body, Button, Header, Icon, Left, Right, Title } from "native-base";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";

const AlertNotification = (props) => {
  return (
    <React.Fragment>
      <Header>
        <Left style={{ flex: 1 }}>
          <Button transparent>
            <Icon name="menu" onPress={() => props.navigation.openDrawer()} />
          </Button>
        </Left>
        <Body style={styles.headerText}>
          <Title>NOTIFICATION</Title>
        </Body>
        <Right style={{ flex: 1 }}></Right>
      </Header>
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
