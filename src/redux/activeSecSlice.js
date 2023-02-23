import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeSec: "header",
};

const activeSecSlice = createSlice({
  name: "activeSec",
  initialState,
  reducers: {
    setActiveSec: (state, action) => {
      state.activeSec = action.payload;
    },
  },
});

export const { setActiveSec } = activeSecSlice.actions;
export default activeSecSlice.reducer;
