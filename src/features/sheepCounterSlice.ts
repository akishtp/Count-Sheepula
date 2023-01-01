import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface sheepValueState {
  value: string;
  status: "idle" | "loading" | "failed";
  error: null | string;
  points: number;
  randNum: number;
}

const initialState: sheepValueState = {
  value: "",
  status: "idle",
  error: null,
  points: 0,
  randNum: 1,
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
      state.error = "We don't have that many sheeps. Try again!";
      state.value = "";
    },
    submitValue: (state) => {
      if (state.value === state.randNum.toString()) {
        state.points += 1;
        state.value = "";
      }
    },
  },
});

export const { addKeyPress, removeKey, tooManySheeps, submitValue } =
  sheepCounterSlice.actions;

export default sheepCounterSlice.reducer;
