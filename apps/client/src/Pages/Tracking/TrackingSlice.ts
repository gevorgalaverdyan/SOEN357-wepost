import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deliveryData: {},
};

const trackingSlice = createSlice({
  name: "tracking",
  initialState,
  reducers: {
    saveTrackingData: (state, action) => {
      state.deliveryData = action.payload;
    },
    clear: () => initialState,
  },
});

export const { saveTrackingData } = trackingSlice.actions;

export default trackingSlice;
