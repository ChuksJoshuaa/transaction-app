import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons/";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  ImageBackground,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { HeaderContainer } from "../components/Header";
import Loader from "../components/Loader";
const { width: WIDTH } = Dimensions.get("window");

const Transfer = () => {
  const navigation = useNavigation();
  const [state, setState] = useState({
    accountFrom: "",
    accountTo: "",
    transferAmount: "",
    showPass: true,
    press: false,
    isVisible: false,
    chosenDate: "",
    loading: true,
    accountFromError: "",
    accountToError: "",
    transferAmountError: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        loading: false,
      }));
    }, 3000);
  }, [state.loading]);


  const handleDatePicker = (datetime) => {
    setState((prevState) => ({
      ...prevState,
      isVisible: false,
      chosenDate: moment(datetime).format("MMMM, Do YYYY HH:mm"),
    }));
  };

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    handleDatePicker(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const handleReset = () => {
    setState({
      accountFrom: "",
      accountTo: "",
      transferAmount: "",
      showPass: true,
      press: false,
      isVisible: false,
      chosenDate: "",
      loading: false,
      accountFromError: "",
      accountToError: "",
      transferAmountError: "",
    });
  };

  const setError = (fieldName, errorMessage) => {
    setState((prevState) => ({
      ...prevState,
      [`${fieldName}Error`]: errorMessage,
    }));
  };

  const validateAccount = (account, fieldName) => {
    if (!account) {
      setError(fieldName, "This field is required");
      return false;
    }
    
    const accountPattern = /^[a-z0-9]+$/i;
    if (!accountPattern.test(account)) {
      setError(fieldName, "Invalid account format");
      return false;
    }
    setError(fieldName, ""); 
    return true;
  };

  const validateTransferAmount = (amount) => {
    if (!amount) {
      setError("transferAmount", "Amount is required");
      return false;
    }
    const amountNumber = parseFloat(amount);
    if (isNaN(amountNumber) || amountNumber <= 0) {
      setError("transferAmount", "Invalid amount");
      return false;
    }
    setError("transferAmount", ""); 
    return true;
  };

  const handleInputChange = (name, value) => {
    setState((prevState) => ({ ...prevState, [name]: value }));
    if (name === "accountFrom" || name === "accountTo") {
      validateAccount(value, name);
    } else if (name === "transferAmount") {
      validateTransferAmount(value);
    }
  };

  const handleSubmit = () => {
    const isAccountFromValid = validateAccount(state.accountFrom);
    const isAccountToValid = validateAccount(state.accountTo);
    const isTransferAmountValid = validateTransferAmount(state.firstName);

    if (isAccountFromValid && isAccountToValid && isTransferAmountValid) {
      navigation.navigate("Main");
    }
    else {
      alert('Please fill all required fields')
    }
    handleReset();
  };

  return (
    <React.Fragment>
      <HeaderContainer text={"TRANSFER"} />
      <ImageBackground style={styles.backgroundContainer}>
        <Loader loading={state.loading} />
        <KeyboardAwareScrollView>
          <View style={[styles.logoContainer, { marginTop: 50 }]}></View>
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
              value={state.accountFrom}
              placeholder={"Add Account"}
              placeholderTextColor={"white"}
              underlineColorAndroid="transparent"
              onChangeText={(text) => handleInputChange("accountFrom", text)}
            />
            {state.accountFromError ? (
              <Text style={styles.errorText}>{state.accountFromError}</Text>
            ) : null}
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
              value={state.accountTo}
              placeholder={"Add Account"}
              placeholderTextColor={"white"}
              underlineColorAndroid="transparent"
              onChangeText={(text) => handleInputChange("accountTo", text)}
            />
            {state.accountToError ? (
              <Text style={styles.errorText}>{state.accountToError}</Text>
            ) : null}
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
              value={state.transferAmount}
              placeholder={"Transfer Amount"}
              placeholderTextColor={"white"}
              underlineColorAndroid="transparent"
              onChangeText={(text) => handleInputChange("transferAmount", text)}
            />
            {state.transferAmountError ? (
              <Text style={styles.errorText}>{state.transferAmountError}</Text>
            ) : null}
          </View>

          <Text ligth caption center style={styles.tranText}>
            Transfer Date:
          </Text>
          <TouchableOpacity
            style={styles.inputContainer}
            onPress={showDatepicker}
          >
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
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>

          <TouchableOpacity style={styles.btnLogin} onPress={handleSubmit}>
            <Text style={styles.text}>TRANSFER</Text>
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
  errorText: {
    color: "#fff",
    fontSize: 14,
    paddingHorizontal: 25,
    paddingTop: 5,
    textAlign: "left",
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
