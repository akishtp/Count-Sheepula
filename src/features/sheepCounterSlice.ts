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
      state.value += action.payload;
    },
    removeKey: (state) => {
      state.value = state.value.substring(0, state.value.length - 1);
    },
    resetSheepValue: (state) => {
      state.value = "";
    },
  },
});
export const { addKeyPress, removeKey, resetSheepValue } =
  sheepCounterSlice.actions;

export default sheepCounterSlice.reducer;
