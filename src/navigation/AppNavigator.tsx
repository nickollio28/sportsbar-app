import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import VoteScreen from '../screens/VoteScreen';

export type RootStackParamList = {
  Home: undefined;
  Vote: { gameId: string }; // You can pass parameters like gameId
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Vote" component={VoteScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
