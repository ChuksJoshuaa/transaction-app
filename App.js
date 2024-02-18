import React, { useCallback, useEffect } from "react";
import { LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
// Expo imports
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Navigation imports
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/DrawerNavigation";

// App component
const App = () => {
  LogBox.ignoreLogs([
    "Sending `onAnimatedValueUpdate` with no listeners registered",
    "ViewPropTypes will be removed from React Native, along with all other PropTypes."
  ]);

  const [fontsLoaded] = useFonts({
    ...Ionicons.font,
    "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
    ionicon: require("./assets/fonts/Ionicons.ttf"),
  });


const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255, 45, 85)",
  },
};

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    onLayoutRootView();
  }, [onLayoutRootView]);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <NavigationContainer theme={AppTheme}>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
