import { StackNavigator } from 'react-navigation';
import LoginScreen from './screens/Login';
import CaptureScreen from './screens/Capture';

const RootNavigator = StackNavigator({
    Login: {
        screen: LoginScreen,
    },
    Capture: {
        screen: CaptureScreen,
    },
}, {
    initialRouteName: 'Login',
});

export default RootNavigator;

