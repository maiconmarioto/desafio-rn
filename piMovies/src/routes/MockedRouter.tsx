import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

interface Props {
  component: React.FC;
  params?: {any: any};
}

const MockedRouter: React.FC<Props> = ({component, params = {}}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MockedScreen"
          component={component}
          initialParams={params}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MockedRouter;
