import { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";
import {
  PackageDetails as OrderPackageDetails,
  savePackageDetails,
} from "../../features/DeliveryOrder/deliveryOrderSlice";
import { store } from "../../state/store";

const PackageDetails = ({
  onModifyAddress,
  onPackageConfirm,
}: {
  onModifyAddress: () => void;
  onPackageConfirm: () => void;
}) => {
  const [formData, setFormData] = useState<OrderPackageDetails>(
    store.getState().deliveryOrder.packageDetails
  );

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const confirmPackageDetails = (e) => {
    e.preventDefault();
    store.dispatch(savePackageDetails(formData)), onPackageConfirm();
    onPackageConfirm();
  };

  return (
    <form onSubmit={confirmPackageDetails}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            required
            type="number"
            name="weight"
            label="Weight (in kg)"
            variant="outlined"
            value={formData.weight}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            type="number"
            name="length"
            label="Length (in cm)"
            variant="outlined"
            value={formData.length}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            type="number"
            name="width"
            label="Width (in cm)"
            variant="outlined"
            value={formData.width}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            required
            type="number"
            name="height"
            label="Height (in cm)"
            variant="outlined"
            value={formData.height}
            onChange={handleChange}
          />
        </Grid>
        <Grid item container justifyContent="space-between" xs={12}>
          <Button
            variant="contained"
            color="primary"
            type="button"
            onClick={onModifyAddress}
            sx={{
              mr: 5,
            }}
          >
            Previous
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Next
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default PackageDetails;
