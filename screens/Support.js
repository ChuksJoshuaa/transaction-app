import { FontAwesome } from '@expo/vector-icons';
import { Body, Button, Header, Icon, Left, Right, Title } from 'native-base';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const Support = (props) => {
  const navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <FontAwesome name="support" style={{ fontSize: 24, color: tintColor }} />
    ),
  };

  return (
    <React.Fragment>
      <Header>
        <Left style={{ flex: 1 }}>
          <Button transparent>
            <Icon name="menu" onPress={() => props.navigation.openDrawer()} />
          </Button>
        </Left>
        <Body style={styles.headerText}>
          <Title>SUPPORT</Title>
        </Body>
        <Right style={{ flex: 1 }}></Right>
      </Header>
      <ScrollView style={styles.container}></ScrollView>
    </React.Fragment>
  );
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
  },
});

export default Support;