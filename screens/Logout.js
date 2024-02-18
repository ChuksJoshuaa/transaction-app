import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { HeaderContainer } from "../components/Header";
import { validateEmail } from "../utils";

const { width: WIDTH } = Dimensions.get("window");

const Logout = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const handleLogout = () => {
    if (!email.trim()) {
      alert("Please enter an email address.");
      return;
    }
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    navigation.navigate("SignIn");
  };
  return (
    <React.Fragment>
      <HeaderContainer text={"LOGOUT"} />
      <ImageBackground style={styles.backgroundContainer}>
        <KeyboardAwareScrollView>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}></Text>
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
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder={"Email"}
              placeholderTextColor={"white"}
              underlineColorAndroid="transparent"
            />
          </View>

          <TouchableOpacity style={styles.btnLogin} onPress={handleLogout}>
            <Text style={styles.text}>Logout</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </React.Fragment>
  );
};

Logout.navigationOptions = {
  drawerIcon: ({ tintColor }) => (
    <MaterialCommunityIcons
      name="logout"
      style={{ fontSize: 24, color: tintColor }}
    />
  ),
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
  btnLogin: {
    display: "flex",
    width: WIDTH - 55,
    height: 45,
    borderRadius: 45,
    backgroundColor: "#fcbb16",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 25,
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
    marginTop: 5,
  },
};

export default Logout;
