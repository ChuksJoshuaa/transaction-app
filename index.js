import { registerRootComponent } from "expo";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import App from "./App";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately

AppRegistry.registerComponent(appName, () => App);
registerRootComponent(App);