import React, { useState } from 'react';
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
  const [inputText, setInputText] = useState('');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <NavigationContainer>
      <StatusBar barStyle='dark' />
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Home' component={LandingPage} />
        <Stack.Screen name='TabNavigator'>
          {(props) => (
            <TabNavigator
              {...props}
              inputText={inputText}
              setInputText={setInputText}
              selectedPhoto={selectedPhoto}
              setSelectedPhoto={setSelectedPhoto}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigator({
  inputText,
  setInputText,
  selectedPhoto,
  setSelectedPhoto,
}) {
  return (
    <>
      <StatusBar backgroundColor='#161616' barStyle='light-content' />
      <Tab.Navigator
        initialRouteName='Config'
        screenOptions={{
          tabBarStyle: { backgroundColor: '#292929' },
          tabBarActiveTintColor: '#B427F1',
          tabBarInactiveTintColor: '#F6F7F8',
        }}
      >
        <Tab.Screen
          name='Config'
          options={{
            tabBarLabel: 'Config',
            headerShown: false,
          }}
        >
          {(props) => (
            <ConfigPage
              {...props}
              inputText={inputText}
              setInputText={setInputText}
            />
          )}
        </Tab.Screen>
        {/* <Tab.Screen
          name='Patterns'
          options={{
            tabBarLabel: 'Patterns',
            headerShown: false,
          }}
        >
          {(props) => (
            <PatternsPage
              {...props}
              selectedPhoto={selectedPhoto}
              setSelectedPhoto={setSelectedPhoto}
            />
          )}
        </Tab.Screen> */}
        <Tab.Screen
          name='Result'
          options={{
            tabBarLabel: 'Result',
            headerShown: false,
          }}
        >
          {(props) => <ResultsPage {...props} inputText={inputText} />}
        </Tab.Screen>
      </Tab.Navigator>
    </>
  );
}

export default App;
