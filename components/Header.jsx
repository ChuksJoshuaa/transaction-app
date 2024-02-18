import { useNavigation } from "@react-navigation/native";
import { Body, Button, Header, Icon, Left, Right, Title } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { getAndroidPlatform } from "../utils";

export const HeaderContainer = ({ text }) => {
  const navigation = useNavigation();
  return (
    <Header style={styles.containerHead}>
      <Left style={{ flex: 1 }}>
        <Button transparent>
          <Icon name="menu" onPress={() => navigation.openDrawer()} />
        </Button>
      </Left>
      <Body style={styles.headerText}>
        <Title>{text}</Title>
      </Body>
      <Right style={{ flex: 1 }}></Right>
    </Header>
  );
};

const styles = StyleSheet.create({
  containerHead: {
    marginTop: getAndroidPlatform(),
  },
  headerText: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
