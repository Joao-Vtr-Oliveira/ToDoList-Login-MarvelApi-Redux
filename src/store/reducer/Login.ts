import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { Data } from "../../types/Data";

interface DataLogin {
  data: {
    user: string;
    password: string;
  };
}

const initialState: DataLogin = {
  data: {
    user: "",
    password: "",
  }
};

const slice = createSlice({
  name: "login",
  initialState,
  reducers: {
    cleanInfo: (state) => {
      state.data = {
        user: "",
        password: "",
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchToken.pending, () => {
        
      })
      .addCase(fetchToken.fulfilled, (state, action: PayloadAction<Data>) => {
        state.data = action.payload;
      })
  },
});

export const {cleanInfo} = slice.actions;

export const fetchToken = createAsyncThunk(
  "login/fetchToken",
  async (user: Data) => {
    try {
      const response = await fetch(
        "https://run.mocky.io/v3/49bf0d3b-a77b-4bad-8648-98e9560e12ef",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      const data = await response.json();
      return data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
);

export default slice.reducer;