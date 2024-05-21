import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LandingPage from './Screens/LandingPage';
import ConfigPage from './Screens/ConfigPage';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => {
          if (props.state.index === 0) return null;

          return (
            <Tab.Navigator
              tabBarOptions={{
                activeTintColor: '#B427F1',
                inactiveTintColor: '#F6F7F8',
              }}
              screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: '#292929' },
              }}
            />
          );
        }}
        initialRouteName='Home'
      >
        <Tab.Screen
          options={{
            tabBarLabel: '',
            headerShown: false,
          }}
          name='Home'
          component={ConfigPage}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
