import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CharactersType } from "../../types/CharactersType";
import { CharacterRequestType } from "../../types/CharacterRequestType";

interface dataMarvel {
  offset: number;
  data: CharactersType | null;
  characterData: CharacterRequestType | null;
}

const initialState: dataMarvel = {
  offset: 0,
  data: null,
  characterData: null
};

const slice = createSlice({
  name: "marvel",
  initialState,
  reducers: {
    incrementOffsetByAmount: (state, action: PayloadAction<number>) => {
      state.offset = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(marvelReduxRequest.fulfilled, (state, action: PayloadAction<CharactersType>) => {
      state.data = action.payload;
    })
    builder.addCase(marvelCharacterReduxRequest.fulfilled, (state, action: PayloadAction<CharacterRequestType>) => {
      state.characterData = action.payload;
    })
  }
});

export const marvelReduxRequest = createAsyncThunk(
  "marvel/marvelReduxRequest",
  async (offset: number) => {
    try {
      const response = await fetch(
        `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=bacb409123d9363a410cc00b0231526e&hash=10aeae3787f41c0b8295e013fa721315&limit=10&offset=${offset}`
      );
      const data = await response.json();
      return data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
);

export const marvelCharacterReduxRequest = createAsyncThunk(
  "marvel/marvelCharacterReduxRequest",
  async (character: string) => {
    try {
      const response = await fetch(
        `https://gateway.marvel.com/v1/public/characters/${character}?ts=1&apikey=bacb409123d9363a410cc00b0231526e&hash=10aeae3787f41c0b8295e013fa721315`
      );
      const data = await response.json();
      return data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
);

export const { incrementOffsetByAmount } = slice.actions;

export default slice.reducer;
