import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

type VoteScreenRouteProp = RouteProp<RootStackParamList, 'Vote'>;
type VoteScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Vote'>;

interface Props {
  route: VoteScreenRouteProp;
  navigation: VoteScreenNavigationProp;
}

const VoteScreen: React.FC<Props> = ({ route, navigation }) => {
  const { gameId } = route.params;

  return (
    <View>
      <Text>Vote Screen for Game ID: {gameId}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default VoteScreen;
