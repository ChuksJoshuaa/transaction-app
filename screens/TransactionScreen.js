import moment from "moment";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Block, Card, Label, Text } from "../components";
import { HeaderContainer } from "../components/Header";
import * as theme from "../constants/theme";
import { TransactionData } from "../utils";

const TransactionScreen = () => {
  return (
    <React.Fragment>
      <HeaderContainer text={"TRANSACTIONS"} />
      <SafeAreaView style={styles.overview}>
        <ScrollView contentContainerStyle={{ paddingVertical: 25 }}>
          <Card row middle style={styles.margin}>
            <Block flex={1.2} center middle style={{ marginRight: 0 }}>
              <Text light height={43} size={26} spacing={-0.45}>
                Chuck Mbanaso
              </Text>
              <Text ligth caption center style={{ marginTop: 3 }}>
                Account Number: 0078675640
              </Text>
              <Text ligth caption center style={{ marginTop: 3 }}>
                BVN: 2233456881
              </Text>
            </Block>
          </Card>

          <Card row middle style={[styles.margin, { marginTop: 18 }]}>
            <Block flex={1.2} center middle style={{ marginRight: 0 }}>
              <Text light height={43} size={36} spacing={-0.45}>
                #1, 800.00
              </Text>
              <Text ligth caption center style={{ marginTop: 3 }}>
                AVAILABLE BALANCE
              </Text>
            </Block>
          </Card>

          <Card row middle style={[styles.margin, { marginTop: 18 }]}>
            <Block flex={1.2} center middle style={{ marginRight: 0 }}>
              <Text light height={43} size={36} spacing={-0.45}>
                #1, 800.00
              </Text>
              <Text ligth caption center style={{ marginTop: 3 }}>
                SPENT
              </Text>
            </Block>
          </Card>

          <Block row style={[styles.margin, { marginTop: 18 }]}>
            <Card middle style={{ marginRight: 7 }}>
              {/* <IconImage vehicle /> */}
              <Text h2 style={{ marginTop: 17 }}>
                1,428
              </Text>
              <Text paragraph color="gray">
                Vehicles on track
              </Text>
            </Card>

            <Card middle style={{ marginLeft: 7 }}>
              {/* <IconImage distance /> */}
              <Text h2 style={{ marginTop: 17 }}>
                158.3
              </Text>
              <Text paragraph color="gray">
                Distance driven
              </Text>
            </Card>
          </Block>

          <Card
            title="TODAY'S TRIPS"
            style={[styles.margin, { marginTop: 18 }]}
          >
            <Block row right>
              <Block flex={2} row center right>
                <Label blue />
                <Text paragraph color="gray">
                  Today
                </Text>
              </Block>
              <Block row center right>
                <Label purple />
                <Text paragraph color="gray">
                  Yesterday
                </Text>
              </Block>
            </Block>
            <Block>
              <Text>Chart</Text>
            </Block>
          </Card>

          <TouchableOpacity>
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
          </TouchableOpacity>

          <Card
            title="TRIPS BY TYPE"
            style={[styles.margin, { marginTop: 18 }]}
          >
            <Block>
              <Text>Chart</Text>
            </Block>
            <Block row space="between" style={{ marginTop: 25 }}>
              <Block>
                <Text h2 light>
                  1,744
                </Text>
                <Block row center>
                  <Label blue />
                  <Text paragraph color="gray">
                    Confort
                  </Text>
                </Block>
              </Block>
              <Block>
                <Text h2 light>
                  2,312
                </Text>
                <Block row center>
                  <Label purple />
                  <Text paragraph color="gray">
                    Premium
                  </Text>
                </Block>
              </Block>
            </Block>
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

export default TransactionScreen;
