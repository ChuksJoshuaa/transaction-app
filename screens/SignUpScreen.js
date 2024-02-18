import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DateTimePicker from "@react-native-community/datetimepicker";
import Loader from "../components/Loader";
import { useNavigation } from "@react-navigation/native";
const { width: WIDTH } = Dimensions.get("window");

const SignUp = () => {
  const navigation = useNavigation();
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    bvn: "",
    password: "",
    showPass: true,
    press: false,
    isVisible: false,
    chosenDate: "",
    loading: false,
    firstNameError: "",
    lastNameError: "",
    bvnError: "",
    passwordError: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setState((prevState) => ({ ...prevState, loading: false }));
    }, 3000);
  }, []);

  const handleDatePicker = (date) => {
    setState((prevState) => ({
      ...prevState,
      isVisible: false,
      chosenDate: moment(date).format("MMMM, Do YYYY"),
    }));
  };

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    // Format the date and update the state as needed
    handleDatePicker(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const validateBvn = (bvn) => {
    const bvnPattern = /^[0-9]+$/;
    if (!bvn) {
      setState((prevState) => ({
        ...prevState,
        bvnError: "bvn is required",
      }));
      return false;
    } else if (!bvnPattern.test(bvn)) {
      setState((prevState) => ({
        ...prevState,
        bvnError: "Invalid bvn",
      }));
      return false;
    } else if (bvn.length < 10) {
      setState((prevState) => ({
        ...prevState,
        bvnError: "Bvn must be at least 10 characters",
      }));
      return false;
    }
    setState((prevState) => ({ ...prevState, bvnError: "" }));
    return true;
  };

  const validateFirstName = (firstName) => {
    if (!firstName) {
      setState((prevState) => ({
        ...prevState,
        firstNameError: "First name is required",
      }));
      return false;
    }
    setState((prevState) => ({ ...prevState, firstNameError: "" }));
    return true;
  };

  const validateLastName = (lastName) => {
    if (!lastName) {
      setState((prevState) => ({
        ...prevState,
        lastNameError: "Last name is required",
      }));
      return false;
    }
    setState((prevState) => ({ ...prevState, lastNameError: "" }));
    return true;
  };

  const handleInputChange = (name, value) => {
    setState((prevState) => ({ ...prevState, [name]: value }));
    if (name === "bvn") {
      validateBvn(value);
    } else if (name === "firstName") {
      validateFirstName(value);
    } else if (name === "lastName") {
      validateLastName(value);
    }
  };

  const handleSubmit = () => {
    const isBvnValid = validateBvn(state.bvn);
    const isFirstNameValid = validateFirstName(state.firstName);
    const isLastNameValid = validateFirstName(state.lastName);

    if (!state.chosenDate) return alert("Date is required");

    if (isBvnValid && isFirstNameValid && isLastNameValid) {
      navigation.navigate("Main");
    }
  };

  return (
    <ImageBackground style={styles.backgroundContainer}>
      <Loader loading={state.loading} />
      <KeyboardAwareScrollView>
        <View style={[styles.logoContainer, { marginTop: 50 }]}>
          <Text style={styles.WelcomeText}>
            Welcome to your customer's bank
          </Text>
          <Text style={styles.introText}>
            Let's set up your account real quick!
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome
            name={"bank"}
            size={25}
            color={"white"}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            value={state.bvn}
            placeholder={"Enter your BVN"}
            placeholderTextColor={"white"}
            underlineColorAndroid="transparent"
            onChangeText={(text) => handleInputChange("bvn", text)}
          />
          {state.bvnError ? (
            <Text style={styles.errorText}>{state.bvnError}</Text>
          ) : null}
        </View>
        <Text style={styles.tipText}>
          Quick Tip: Dial *565*0# on your registered mobile number to get your
          BVN.
        </Text>
        <View style={styles.inputContainer}>
          <Ionicons
            name={"person"}
            size={25}
            color={"white"}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            value={state.firstName}
            placeholder={"First Name"}
            placeholderTextColor={"white"}
            underlineColorAndroid="transparent"
            onChangeText={(text) => handleInputChange("firstName", text)}
          />
          {state.firstNameError ? (
            <Text style={styles.errorText}>{state.firstNameError}</Text>
          ) : null}
        </View>
        <View style={styles.inputContainer}>
          <Ionicons
            name={"person"}
            size={25}
            color={"white"}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            value={state.lastName}
            placeholder={"Last Name"}
            placeholderTextColor={"white"}
            underlineColorAndroid="transparent"
            onChangeText={(text) => handleInputChange("lastName", text)}
          />
          {state.lastNameError ? (
            <Text style={styles.errorText}>{state.lastNameError}</Text>
          ) : null}
        </View>
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
          <Text style={styles.dateText}>Date of birth</Text>
          <Text style={styles.dateText}>{state.chosenDate}</Text>
        </TouchableOpacity>
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
        <TouchableOpacity style={styles.btnLogin} onPress={handleSubmit}>
          <Text style={styles.text}>Continue</Text>
        </TouchableOpacity>
        <Text
          style={styles.tipText}
          onPress={() => navigation.navigate("SignIn")}
        >
          Already have an account? Signin
        </Text>
      </KeyboardAwareScrollView>
    </ImageBackground>
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
    marginTop: 40,
  },
  errorText: {
    color: "#fff",
    fontSize: 14,
    paddingHorizontal: 25,
    paddingTop: 5,
    textAlign: "left",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 25,
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
    marginTop: 50,
    padding: 5,
  },
  introText: {
    color: "white",
    fontSize: 15,
    marginTop: 10,
    padding: 5,
  },
  tipText: {
    color: "#fcbb16",
    fontSize: 15,
    marginTop: 5,
    padding: 10,
    textDecorationLine: "underline",
    marginHorizontal: 25,
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
  dateText: {
    color: "white",
    fontSize: 15,
    marginTop: 14,
    paddingLeft: 70,
  },
  dateContainer: {
    borderColor: "black",
    borderWidth: 1,
  },
  inputIcon: {
    position: "absolute",
    top: 10,
    left: 37,
  },
  inputContainer: {
    marginTop: 5,
    marginHorizontal: 25,
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
    marginHorizontal: 25,
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
};

export default SignUp;
