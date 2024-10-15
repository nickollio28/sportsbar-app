import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { RouteProp } from '@react-navigation/native';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

interface Game {
  id: string;
  name: string;
  status: string;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    // Fetch games from your backend or API service
    const fetchGames = async () => {
      const fetchedGames = [
        { id: '1', name: 'Game 1', status: 'live' },
        { id: '2', name: 'Game 2', status: 'upcoming' },
      ];
      setGames(fetchedGames);
    };
    fetchGames();
  }, []);

  return (
    <View>
      <Text>Home Screen</Text>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Button
              title="Vote"
              onPress={() => navigation.navigate('Vote', { gameId: item.id })}
            />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
