import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "home",
};

const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentPage } = cameraSlice.actions;
export default cameraSlice.reducer;
