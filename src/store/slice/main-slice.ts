import { createSlice } from "@reduxjs/toolkit";
import { mergeRight } from "ramda";

import { RootState } from "../store";

const initialState = {
  theme: "dark",
  snack: {
    message: "Test",
    visible: false,
  },
};

export const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSnack: (state, { payload }) => {
      return mergeRight(state, { snack: mergeRight(state.snack, payload) });
    },
    showSnack: (state, { payload }) => {
      state.snack.visible = true;
      state.snack.message = payload;
    },
  },
});

export const appActions = {
  setSnack: slice.actions.setSnack,
  showSnack: slice.actions.showSnack,
};

export const selectTheme = (state: RootState) => state.main.theme;

export default slice.reducer;
