import { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import {
  DeliveryAddress as OrderAddress,
  saveOrderAddress,
} from "../../features/DeliveryOrder/deliveryOrderSlice";
import { store } from "../../state/store";

const DeliveryAddress = ({
  onAddressConfirm,
}: {
  onAddressConfirm: () => void;
}) => {
  console.log(store.getState());
  const [formData, setFormData] = useState<OrderAddress>(
    store.getState().deliveryOrder.deliveryAddress
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const confirmAddress = (e: any) => {
    e.preventDefault();
    store.dispatch(saveOrderAddress(formData));
    onAddressConfirm();
  };

  return (
    <form onSubmit={confirmAddress}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            label="Address Line"
            name="addressLine"
            value={formData.addressLine}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            label="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            label="Postal Code"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </Grid>
        <Grid item container justifyContent="flex-end" mt={1} xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Next
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default DeliveryAddress;
