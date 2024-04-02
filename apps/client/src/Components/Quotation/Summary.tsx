import { Container, Typography, Grid, Paper } from "@mui/material";
import { store } from "../../state/store";
import { useNavigate } from "react-router-dom";
import { saveOrderTotal } from "../../features/DeliveryOrder/deliveryOrderSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setIsOrder } from "../../features/Auth/authSlice";
import { Button } from "../ui/button";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

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
          <Grid item container xs={6}>
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
        <div className="flex flex-col items-center mt-6">
          <Card className="bg-gray-100 w-3/5">
            <CardContent className="flex flex-row mt-6 align-center justify-center items-center">
              <Label className="mr-2 text-lg">Proposed Rate:</Label>
              <Input
                className="font-bold w-32 text-center"
                value={
                  proposedRate
                    ? proposedRate.toFixed(2) + " CAD$"
                    : "Calculating..."
                }
                disabled
              />
            </CardContent>
          </Card>
        </div>

        <Grid
          container
          item
          justifyContent="space-around"
          mb={2}
          mt={4}
          xs={12}
        >
          <Button type="button" onClick={onModifyPackage}>
            <GrCaretPrevious className="mr-1" /> PREVIOUS
          </Button>
          <Button onClick={onQuotationConfirm}>
            START ORDER
            <GrCaretNext className="ml-1" />
          </Button>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Summary;
