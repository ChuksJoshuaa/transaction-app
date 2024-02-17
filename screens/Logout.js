import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { Body, Button, Header, Icon, Left, Right, Title } from 'native-base';
import React from 'react';
import { Dimensions, Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import logo from '../assets/images/sunbank.png';
import { useNavigation } from "@react-navigation/native";

const { width: WIDTH } = Dimensions.get('window');

const Logout = (props) => {
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
          <Title>LOGOUT</Title>
        </Body>
        <Right style={{ flex: 1 }}>
        </Right>
      </Header>
      <ImageBackground style={styles.backgroundContainer}>
        <KeyboardAwareScrollView>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.logoText}>Logout</Text>
          </View>
          <View style={styles.inputContainer}>
            <Entypo name={'email'} size={25} color={'white'} 
            style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder={'Email'}
              placeholderTextColor={'white'}
              underlineColorAndroid='transparent'
            />
          </View>

          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.text} onPress={() => props.navigation.navigate('SignIn')}>Logout</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </React.Fragment>
  );
};

Logout.navigationOptions = {
  drawerIcon: ({ tintColor }) => (
    <MaterialCommunityIcons name="logout" style={{ fontSize: 24, color: tintColor }} />
  )
};

const styles = {
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
    backgroundColor: '#062b50'
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30
  },
  logo: {
    width: 120,
    height: 190
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 70,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'white',
    marginHorizontal: 25
  },
  inputIcon: {
    position: 'absolute',
    top: 10,
    left: 37
  },
  inputContainer: {
    marginTop: 10
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#fcbb16',
    justifyContent: 'center',
    marginTop: 20
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  headerText: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default Logout;