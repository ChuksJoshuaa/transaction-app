import moment from "moment";
import { Body, Button, Header, Icon, Left, Right, Title } from "native-base";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Block, Card, Text } from "../components";
import * as theme from "../constants/theme";
import { TransactionData } from "../utils";
import { useNavigation } from "@react-navigation/native";

const TransactionInformation = () => {
  const navigation = useNavigation()
  
  return (
    <React.Fragment>
      <Header>
        <Left style={{ flex: 1 }}>
          <Button transparent>
            <Icon
              name="menu"
              onPress={() => navigation.openDrawer()}
            />
          </Button>
        </Left>
        <Body style={styles.headerText}>
          <Title>TRANSACTION INFORMATION</Title>
        </Body>
        <Right style={{ flex: 1 }}></Right>
      </Header>
      <SafeAreaView style={styles.overview}>
        <ScrollView contentContainerStyle={{ paddingVertical: 25 }}>
          <Card
            title="TRANSACTION INFORMATION"
            style={[styles.margin, { marginTop: 18 }]}
          >
            {TransactionData.map((item) => (
              <Block style={styles.driver} activeOpacity={0.8} key={item.id}>
                <Block row center>
                  <Block flex={2}>
                    <Text h4>{item.name}</Text>
                    <Text paragraph color="gray">
                      {item.bank}
                    </Text>
                  </Block>
                  <Block>
                    <Text paragraph right color="black">
                      {item.amount}
                    </Text>
                    <Text paragraph right color="gray">
                      {moment(item.timestamp).format("MMM DD")} -{" "}
                      {moment(item.timestamp).format("LTS")}
                    </Text>
                  </Block>
                </Block>
              </Block>
            ))}
          </Card>
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  overview: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: theme.colors.white,
  },
  margin: {
    marginHorizontal: 25,
  },
  driver: {
    marginBottom: 11,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  headerText: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TransactionInformation;