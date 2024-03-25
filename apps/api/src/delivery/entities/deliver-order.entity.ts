import mongoose, { Schema } from 'mongoose';

export interface Package {
  width: number;
  height: number;
  length: number;
  weight: number;
}

export interface DeliveryOrder extends Document {
  package: Package[];
  userId: string;
  address: Address;
  trackingId: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

const PackageSchema: Schema = new Schema({
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  length: { type: Number, required: true },
  weight: { type: Number, required: true },
});

const AddressSchema: Schema = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
});

const DeliveryOrderSchema: Schema = new Schema({
  package: { type: [PackageSchema], required: true },
  address: { type: AddressSchema, required: true },
  userId: { type: String, required: true },
  trackingId: { type: String, required: true },
});

export default mongoose.model<DeliveryOrder>(
  'DeliveryOrder',
  DeliveryOrderSchema,
);
