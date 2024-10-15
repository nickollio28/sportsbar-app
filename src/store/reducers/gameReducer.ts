import { createSlice } from '@reduxjs/toolkit';

interface GameState {
  games: { id: string; name: string }[];
}

const initialState: GameState = {
  games: [],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGames(state, action) {
      state.games = action.payload;
    },
  },
});

export const { setGames } = gameSlice.actions;
export default gameSlice.reducer;
