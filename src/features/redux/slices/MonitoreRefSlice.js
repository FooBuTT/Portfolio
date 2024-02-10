import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uuid: null,
};

const monitorSlice = createSlice({
  name: "monitor",
  initialState,
  reducers: {
    setMonitorRef: (state, action) => {
      state.uuid = action.payload;
    },
  },
});

export const { setMonitorRef } = monitorSlice.actions;
export default monitorSlice.reducer;
