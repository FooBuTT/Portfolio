import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uuid: null,
};

const bombSlice = createSlice({
  name: "bomb",
  initialState,
  reducers: {
    setBombRef: (state, action) => {
      state.uuid = action.payload;
    },
  },
});

export const { setBombRef } = bombSlice.actions;
export default bombSlice.reducer;
