import {
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Box,
  Card,
} from "@mui/material";
import { store } from "../../state/store";
import { useNavigate } from "react-router-dom";
import { saveOrderTotal } from "../../features/DeliveryOrder/deliveryOrderSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setIsOrder } from "../../features/Auth/authSlice";

const Summary = ({ onModifyPackage }: { onModifyPackage: () => void }) => {
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.auth);

  const [proposedRate, setProposedRate] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    const volume =
      parseFloat(packageDetails.height) *
      parseFloat(packageDetails.weight) *
      parseFloat(packageDetails.length);

    setProposedRate(
      10 + parseFloat(packageDetails.weight) * 1.5 + volume / 100000
    );
  }, []);

  const { deliveryAddress, packageDetails } = store.getState().deliveryOrder;

  const onQuotationConfirm: () => void = () => {
    store.dispatch(saveOrderTotal(proposedRate));
    if (user.user) {
      // User is logged in
      navigate("/order");
    } else {
      navigate("/login");
      store.dispatch(setIsOrder(true));
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: "10px", marginTop: "10px" }}>
        <Typography variant="h4" mt={1} gutterBottom>
          Summary
        </Typography>
        <Grid container mt={2} spacing={2}>
          <Grid item container xs={12}>
            <Grid item xs={6}>
              <Typography variant="h5" gutterBottom>
                Delivery Address
              </Typography>
            </Grid>
            <Grid item sm={6}>
              <Typography variant="h5" gutterBottom>
                Package Details
              </Typography>
            </Grid>{" "}
          </Grid>
          <Grid item container xs={6}>
            <Grid item xs={12}>
              <Typography>Address: {deliveryAddress.addressLine}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>City: {deliveryAddress.city}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>State: {deliveryAddress.state}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Postal Code: {deliveryAddress.postalCode}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Country: {deliveryAddress.country}</Typography>
            </Grid>
          </Grid>
          <Grid item container mt={3} xs={6}>
            <Grid item xs={12}>
              <Typography>Weight: {packageDetails.weight} kg</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Length: {packageDetails.length} cm</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Width: {packageDetails.width} cm</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Height: {packageDetails.height} cm</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item mt={3} xs={12}>
          <Card sx={{ p: 1, m: "auto", bgcolor: "lightgray", width: "70%" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: 8,
              }}
            >
              <Typography variant="h4" gutterBottom>
                Proposed rate:
              </Typography>
              <Typography variant="h4">
                {proposedRate ? proposedRate.toFixed(2) : "Calculating..."}$
              </Typography>
            </Box>
          </Card>
        </Grid>

        <Grid
          container
          item
          justifyContent="space-around"
          mb={2}
          mt={4}
          xs={12}
        >
          <Button
            variant="contained"
            color="primary"
            type="button"
            onClick={onModifyPackage}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={onQuotationConfirm}
          >
            Start Order
          </Button>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Summary;
