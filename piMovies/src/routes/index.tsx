import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import List from '../pages/List';
import Detail from '../pages/Detail';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {color: '#fff6ff'},
          headerTintColor: '#fff6ff',
          headerTransparent: true,
          cardStyle: {
            backgroundColor: '#312e38',
          },
        }}>
        <Stack.Screen
          name="List"
          component={List}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerBackTitle: ' ',
            headerTitle: ' ',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
