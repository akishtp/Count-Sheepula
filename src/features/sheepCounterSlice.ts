import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface sheepValueState {
  value: string;
  status: "idle" | "loading" | "failed";
}

const initialState: sheepValueState = {
  value: "",
  status: "idle",
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
  },
});
export const { addKeyPress, removeKey } = sheepCounterSlice.actions;

export default sheepCounterSlice.reducer;
