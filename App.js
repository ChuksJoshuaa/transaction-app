import React, { useCallback, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Expo imports
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Navigation imports
import AppNavigator from "./navigation/AppNavigator";

// App component
const App = () => {
  const [fontsLoaded] = useFonts({
    ...Ionicons.font,
    "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
    ionicon: require("./assets/fonts/Ionicons.ttf"),
  });

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
        <AppNavigator />
      </SafeAreaProvider>
  );
};

export default App;
