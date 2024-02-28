import { configureStore } from "@reduxjs/toolkit";
import cameraSlice from "./slices/cameraSlice";

import bonsaiRefSlice from "./slices/bombRefSlice";

export const store = configureStore({
  reducer: {
    camera: cameraSlice,
    bonsai: bonsaiRefSlice,
  },
});
