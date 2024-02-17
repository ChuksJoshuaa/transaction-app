import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Body, Button, Header, Icon, Left, Right, Title } from 'native-base';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const SettingsScreen = () => {
  const navigation = useNavigation()
  return (
    <React.Fragment>
      <Header>
        <Left style={{ flex: 1 }}>
          <Button transparent>
            <Icon name="menu" onPress={() => navigation.openDrawer()} />
          </Button>
        </Left>
        <Body style={styles.headerText}>
          <Title>SETTINGS</Title>
        </Body>
        <Right style={{ flex: 1 }}>
        </Right>
      </Header>
      <ScrollView style={styles.container}>

      </ScrollView>
    </React.Fragment>
  );
};

SettingsScreen.navigationOptions = {
  drawerIcon: ({ tintColor }) => (
    <MaterialCommunityIcons name="settings-outline" style={{ fontSize: 24, color: tintColor }} />
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  headerText: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default SettingsScreen;