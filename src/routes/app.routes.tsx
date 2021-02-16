import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import TabRoutes from './tab.routes';
import PlantDetail from '../pages/PlantDetail';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <App.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={TabRoutes}
      />
      <App.Screen
        options={{
          headerShown: false,
        }}
        name="PlantDetail"
        component={PlantDetail}
      />
    </App.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
