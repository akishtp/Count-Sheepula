import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface sheepValueState {
  value: string;
  status: "idle" | "loading" | "failed";
  error: null | string;
}

const initialState: sheepValueState = {
  value: "",
  status: "idle",
  error: null,
};

export const sheepCounterSlice = createSlice({
  name: "sheepValue",
  initialState,
  reducers: {
    addKeyPress: (state, action: PayloadAction<string>) => {
      state.error = null;
      state.value += action.payload;
    },
    removeKey: (state) => {
      state.error = null;
      state.value = state.value.substring(0, state.value.length - 1);
    },
    tooManySheeps: (state) => {
      state.error = "We dont ave that many sheeps. Try again!";
      state.value = "";
    },
  },
});

export const { addKeyPress, removeKey, tooManySheeps } =
  sheepCounterSlice.actions;

export default sheepCounterSlice.reducer;
