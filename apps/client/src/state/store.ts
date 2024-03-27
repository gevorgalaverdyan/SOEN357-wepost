import deliveryOrderSlice from "../features/DeliveryOrder/deliveryOrderSlice";
import authSlice from "../features/Auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import trackingSlice from "../Pages/Tracking/TrackingSlice";

export const store = configureStore({
  reducer: {
    deliveryOrder: deliveryOrderSlice.reducer,
    tracking: trackingSlice.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
