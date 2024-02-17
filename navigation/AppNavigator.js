import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { TransactionStackNavigator } from './DrawerNavigation';
import { SignInStackNavigator, SignUpNavigator, TransactionInfo } from './StackNavigator';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    SignUp: SignUpNavigator,
    SignIn: SignInStackNavigator,
    Main: TransactionStackNavigator, 
    TransactionInformation: TransactionInfo 
  },
  {
    initialRouteName: 'SignIn'
  })
);
