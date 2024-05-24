import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './Screens/LandingPage';
import ResultsPage from './Screens/ResultsPage';
import PatternsPage from './Screens/PatternsPage';
import ConfigPage from './Screens/ConfigPage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={LandingPage} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='Config'
      screenOptions={{
        tabBarStyle: { backgroundColor: '#292929' },
        tabBarActiveTintColor: '#B427F1',
        tabBarInactiveTintColor: '#F6F7F8',
      }}
    >
      <Tab.Screen
        name="Config"
        component={ConfigPage}
        options={{ headerShown: false,
          tabBarLabel: 'Create',
        }}
      />
      <Tab.Screen
        name="Patterns"
        component={PatternsPage}
        options={{ headerShown: false,
          tabBarLabel: 'Patterns',
        }}
      />
       <Tab.Screen
        name="Results"
        component={ResultsPage}
        options={{ headerShown: false,
          tabBarLabel: 'Results',
        }}
      />
    </Tab.Navigator>
  );
}

export default App;