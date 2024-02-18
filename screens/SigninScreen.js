import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
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
import Loader from "../components/Loader";
import { useNavigation } from "@react-navigation/native";
import { validateEmail } from "../utils";

const { width: WIDTH } = Dimensions.get("window");

const SignIn = () => {
  const navigation = useNavigation();
  const [state, setState] = useState({
    email: "",
    password: "",
    showPass: true,
    press: false,
    loading: true,
    emailError: "",
    passwordError: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setState((prevState) => ({ ...prevState, loading: false }));
    }, 3000);
  }, []);

  

  const validateEmailField = (email) => {
    if (!email) {
      setState((prevState) => ({
        ...prevState,
        emailError: "Email is required",
      }));
      return false;
    } else if (!validateEmail(email)) {
      setState((prevState) => ({
        ...prevState,
        emailError: "Invalid email format",
      }));
      return false;
    }
    setState((prevState) => ({ ...prevState, emailError: "" }));
    return true;
  };

  const validatePasswordField = (password) => {
    if (!password) {
      setState((prevState) => ({
        ...prevState,
        passwordError: "Password is required",
      }));
      return false;
    } else if (password.length < 6) {
      setState((prevState) => ({
        ...prevState,
        passwordError: "Password must be at least 6 characters",
      }));
      return false;
    }
    setState((prevState) => ({ ...prevState, passwordError: "" }));
    return true;
  };


  const handleInputChange = (name, value) => {
  // Update the input field first
    setState((prevState) => ({ ...prevState, [name]: value }));
    if (name === "email") {
      validateEmailField(value); 
    } else if (name === "password") {
      validatePasswordField(value); 
    }
  };

  const handleSubmit = () => {
    const isEmailValid = validateEmailField(state.email);
    const isPasswordValid = validatePasswordField(state.password);

    if (isEmailValid && isPasswordValid) {
      navigation.navigate("Main");
    }
  };



  return (
    <React.Fragment>
      <ImageBackground style={styles.backgroundContainer}>
        <Loader loading={state.loading} />
        <KeyboardAwareScrollView>
          <View style={[styles.logoContainer, { marginTop: 90 }]}>
            <Text style={styles.logoText}>Login with your credentials</Text>
          </View>
          <View style={styles.inputContainer}>
            <Entypo
              name={"email"}
              size={25}
              color={"white"}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder={"Email"}
              placeholderTextColor={"white"}
              underlineColorAndroid="transparent"
              value={state.email}
              onChangeText={(text) => handleInputChange("email", text)}
            />
            {state.emailError ? (
              <Text style={styles.errorText}>{state.emailError}</Text>
            ) : null}
          </View>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons
              name={"form-textbox-password"}
              size={25}
              color={"white"}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder={"Password"}
              secureTextEntry={state.showPass}
              placeholderTextColor={"white"}
              underlineColorAndroid="transparent"
              value={state.password}
              onChangeText={(text) => handleInputChange("password", text)}
            />
            <TouchableOpacity style={styles.btnEye}>
              <AntDesign name={"eye"} size={22} color={"white"} />
            </TouchableOpacity>
          </View>
          {state.passwordError ? (
            <Text style={styles.errorText}>{state.passwordError}</Text>
          ) : null}

          <TouchableOpacity style={styles.btnLogin} onPress={handleSubmit}>
            <Text style={styles.text}>Continue</Text>
          </TouchableOpacity>
          <Text
            style={styles.regText}
            onPress={() => navigation.navigate("SignUp")}
          >
            Don't have an account? Register here.
          </Text>
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
    marginBottom: 30,
  },
  logo: {
    width: 120,
    height: 190,
  },
  logoText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  regText: {
    color: "#fcbb16",
    fontSize: 15,
    fontWeight: "500",
    marginTop: 10,
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
    marginHorizontal: 25,
  },
  inputIcon: {
    position: "absolute",
    top: 10,
    left: 37,
  },
  inputContainer: {
    marginTop: 10,
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
  loaderStyle: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
};

export default SignIn;
