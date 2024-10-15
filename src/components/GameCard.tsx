import React from 'react';
import { View, Text, Button } from 'react-native';

interface GameCardProps {
  name: string;
  status: string;
  onPress: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ name, status, onPress }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>Status: {status}</Text>
      <Button title="Vote" onPress={onPress} />
    </View>
  );
};

export default GameCard;
