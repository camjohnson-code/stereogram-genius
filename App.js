import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './Screens/LandingPage'
import NewScreen from './Screens/NewScreen'
import ResultsPage from './Screens/ResultsPage';
import PatternsPage from './Screens/PatternsPage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ResultsPage">
        <Stack.Screen options={{ headerShown: false }} name="Home" component={LandingPage} />
        <Stack.Screen options={{ headerShown: false }} name="NewScreen" component={NewScreen} />
        <Stack.Screen options={{headerShown: false }} name="ResultsPage" component={ResultsPage} />
        <Stack.Screen options={{headerShown: false }} name="PatternsPage" component={PatternsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;