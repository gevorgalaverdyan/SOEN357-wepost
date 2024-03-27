import { createSlice } from "@reduxjs/toolkit";

type DeliveryAddress = {
  addressLine: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
};

type PackageDetails = {
  weight: string;
  length: string;
  width: string;
  height: string;
};

export interface DeliveryOrder {
  deliveryAddress: DeliveryAddress;
  packageDetails: PackageDetails;
  orderTotal?: number;
}

const initialState: DeliveryOrder = {
  deliveryAddress: {
    addressLine: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  },
  packageDetails: {
    weight: "",
    length: "",
    width: "",
    height: "",
  },
};

const deliveryOrderSlice = createSlice({
  name: "delivery order",
  initialState,
  reducers: {
    saveOrderAddress: (state, action) => {
      state.deliveryAddress = action.payload;
    },
    savePackageDetails: (state, action) => {
      state.packageDetails = action.payload;
    },
    saveOrderTotal: (state, action) => {
      state.orderTotal = action.payload;
    },
    clear: () => initialState,
  },
});

export const { saveOrderAddress, savePackageDetails, saveOrderTotal } =
  deliveryOrderSlice.actions;

export default deliveryOrderSlice;

export type { DeliveryAddress, PackageDetails };
