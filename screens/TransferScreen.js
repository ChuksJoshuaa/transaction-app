import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons/";
import moment from "moment";
import { Body, Button, Header, Icon, Left, Right, Title } from "native-base";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DateTimePicker from "react-native-modal-datetime-picker";
import logo from "../assets/images/sunbank.png";
import Loader from "../components/Loader";

const { width: WIDTH } = Dimensions.get("window");

const Transfer = ({ navigation }) => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
    showPass: true,
    press: false,
    isVisible: false,
    chosenDate: "",
    loading: true,
  });

  useEffect(() => {
    setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        loading: false,
      }));
    }, 3000);
  }, []);

  const handleFirstNameInput = (name) => {
    setState((prevState) => ({ ...prevState, name }));
  };

  const handleLastNameInput = (lastName) => {
    setState((prevState) => ({ ...prevState, lastName }));
  };

  const handlePhoneInput = (phone) => {
    setState((prevState) => ({ ...prevState, phone }));
  };

  const handlePasswordInput = (password) => {
    setState((prevState) => ({ ...prevState, password }));
  };

  const handleDatePicker = (datetime) => {
    setState((prevState) => ({
      ...prevState,
      isVisible: false,
      chosenDate: moment(datetime).format("MMMM, Do YYYY HH:mm"),
    }));
  };

  const hideDateTimePicker = () => {
    setState((prevState) => ({
      ...prevState,
      isVisible: false,
    }));
  };

  const showPicker = () => {
    setState((prevState) => ({
      ...prevState,
      isVisible: true,
    }));
  };

  return (
    <React.Fragment>
      <View>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" onPress={() => navigation.openDrawer()} />
            </Button>
          </Left>
          <Body style={styles.headerText}>
            <Title>TRANSFER</Title>
          </Body>
          <Right style={{ flex: 1 }}></Right>
        </Header>
      </View>
      <ImageBackground style={styles.backgroundContainer}>
        <Loader loading={state.loading} />
        <KeyboardAwareScrollView>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
          </View>
          <Text ligth caption center style={styles.tranText}>
            Transfer from:
          </Text>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons
              name={"target-account"}
              size={25}
              color={"white"}
              style={styles.inputIcon}
            />
            {/* <ion-icon name="person"></ion-icon> */}
            <TextInput
              style={styles.input}
              placeholder={"Add Account"}
              placeholderTextColor={"white"}
              underlineColorAndroid="transparent"
            />
          </View>
          <Text ligth caption center style={styles.tranText}>
            Transfer to:
          </Text>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons
              name={"account-arrow-right"}
              size={25}
              color={"white"}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder={"Add Account"}
              placeholderTextColor={"white"}
              underlineColorAndroid="transparent"
            />
          </View>

          <Text ligth caption center style={styles.tranText}>
            Transfer Amount:
          </Text>
          <View style={styles.inputContainer}>
            <FontAwesome
              name={"money"}
              size={25}
              color={"white"}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder={"Transfer Amount"}
              placeholderTextColor={"white"}
              underlineColorAndroid="transparent"
            />
          </View>

          <Text ligth caption center style={styles.tranText}>
            Transfer Date:
          </Text>
          <TouchableOpacity style={styles.inputContainer} onPress={showPicker}>
            <MaterialIcons
              name={"date-range"}
              size={25}
              color={"white"}
              style={styles.inputIcon}
            />
            <Text style={styles.dateText}>Pick a date and time</Text>
            <Text style={styles.dateText}>{state.chosenDate}</Text>
          </TouchableOpacity>

          <View style={styles.inputContainer}>
            <DateTimePicker
              isVisible={state.isVisible}
              onConfirm={handleDatePicker}
              onCancel={hideDateTimePicker}
              mode={"datetime"}
              is24Hours={false}
            />
          </View>

          <TouchableOpacity style={styles.btnLogin}>
            <Text
              style={styles.text}
              onPress={() => navigation.navigate("Main")}
            >
              TRANSFER
            </Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </React.Fragment>
  );
};

const styles = {
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: null,
    height: null,
    backgroundColor: "#062b50",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoText: {
    color: "white",
    fontSize: 25,
    fontWeight: "500",
    marginTop: 10,
    opacity: 0.5,
  },
  WelcomeText: {
    color: "white",
    fontSize: 25,
    marginTop: 5,
    padding: 5,
  },
  introText: {
    color: "white",
    fontSize: 15,
    marginTop: 5,
    padding: 5,
  },
  tipText: {
    color: "#fcbb16",
    fontSize: 15,
    marginTop: 5,
    padding: 10,
    textDecorationLine: "underline",
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 70,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    color: "white",
    marginHoriontal: 25,
  },
  inputIcon: {
    position: "absolute",
    top: 10,
    left: 36,
  },
  dateText: {
    color: "white",
    fontSize: 15,
    marginTop: 14,
    paddingLeft: 70,
  },
  inputContainer: {
    marginTop: 5,
  },
  btnEye: {
    position: "absolute",
    top: 10,
    right: 37,
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    backgroundColor: "#fcbb16",
    justifyContent: "center",
    marginTop: 20,
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  headerText: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  tranText: {
    color: "white",
    fontSize: 20,
    marginTop: 5,
    padding: 10,
  },
  dateText: {
    color: "white",
    fontSize: 15,
    marginTop: 14,
    paddingLeft: 70,
  },
};

export default Transfer;
