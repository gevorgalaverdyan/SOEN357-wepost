import { useState } from "react";
import { TextField, Grid } from "@mui/material";
import {
  PackageDetails as OrderPackageDetails,
  savePackageDetails,
} from "../../features/DeliveryOrder/deliveryOrderSlice";
import { store } from "../../state/store";
import { Button } from "../ui/button";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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
          <Button type="button" onClick={onModifyAddress} >
            <GrCaretPrevious className="mr-1"/> PREVIOUS 
          </Button>
          <Button type="submit" style={{width: "7rem"}}>
            NEXT <GrCaretNext className="ml-1" />
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default PackageDetails;
