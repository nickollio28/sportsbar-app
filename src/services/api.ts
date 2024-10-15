import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Update to your API endpoint

export const getGames = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/games`);
    return response.data;
  } catch (error) {
    console.error('Error fetching games:', error);
    throw error;
  }
};

export const voteForGame = async (gameId: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/vote`, { gameId });
    return response.data;
  } catch (error) {
    console.error('Error voting for game:', error);
    throw error;
  }
};
