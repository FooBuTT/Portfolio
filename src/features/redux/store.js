import { configureStore } from "@reduxjs/toolkit";
import cameraSlice from "./slices/cameraSlice";
import MonitoreRefSlice from "./slices/MonitoreRefSlice";

export const store = configureStore({
  reducer: {
    camera: cameraSlice,
    monitor: MonitoreRefSlice,
  },
});
