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
      // state.error = null;
      state.value += action.payload;
    },
    removeKey: (state) => {
      // state.error = null;
      state.value = state.value.substring(0, state.value.length - 1);
    },
    tooManySheeps: (state) => {
      state.error = "We don't have that many sheeps. Try again!";
      state.value = "";
    },
    noError: (state) => {
      state.error = null;
    },
    submitValue: (state) => {
      console.log(state.value + " sended" + state.randNum);
      if (state.value === state.randNum.toString()) {
        state.randNum = Math.floor(Math.random() * 10 + 1);
        state.points += 1;
      }
      state.value = "";
    },
  },
});

export const { addKeyPress, removeKey, tooManySheeps, noError, submitValue } =
  sheepCounterSlice.actions;

export default sheepCounterSlice.reducer;
