import { Container, Typography, Grid } from "@mui/material";
import { useSelector } from "react-redux";

const Tracking = () => {
  const tracking = useSelector((state: any) => state.tracking);
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h3" sx={{ mt: 5 }} gutterBottom>
        Your Delivery
      </Typography>
      <Typography align="left" variant="h6" sx={{ mt: 5 }} gutterBottom>
        Tracking #: {tracking.deliveryData.trackingId}
      </Typography>
      <Typography align="left" variant="h6" sx={{ mt: 0 }} gutterBottom>
        Status: Delivered
      </Typography>
      <Typography align="left" variant="h6" sx={{ mt: 0 }} gutterBottom>
        Package Data:
      </Typography>
      <Typography
        align="left"
        variant="h6"
        sx={{ mt: 0, marginLeft: 10 }}
        gutterBottom
      >
        {Object.keys(tracking.deliveryData.package[0]).map((key) => {
          return (
            key !== "_id" && (
              <Typography align="left" variant="h6" sx={{ mt: 0 }} gutterBottom>
                {key}: {tracking.deliveryData.package[0][key]}
              </Typography>
            )
          );
        })}
      </Typography>
      <Grid container={true} justifyContent="space-between">
        {/* Placeholder, ToDo: Should fetch history logs and get all of the check ins */}
        <Grid item>
          <Typography variant="h6" sx={{ mt: 5 }} gutterBottom>
            Nov 2 2023
          </Typography>
          <Typography variant="subtitle1" align="right" gutterBottom>
            10:00am
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" sx={{ mt: 5 }} gutterBottom>
            Delivered
          </Typography>
          <Typography variant="subtitle1" align="left" gutterBottom>
            {`${tracking.deliveryData.address.city}, ${tracking.deliveryData.address.state}`}
          </Typography>
        </Grid>
      </Grid>
      <Grid container={true} justifyContent="space-between">
        {/* Placeholder, ToDo: Should fetch history logs and get all of the check ins */}
        <Grid item>
          <Typography variant="h6" sx={{ mt: 5 }} gutterBottom>
            Nov 1 2023
          </Typography>
          <Typography variant="subtitle1" align="right" gutterBottom>
            10:00am
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" sx={{ mt: 5 }} gutterBottom>
            Delivered
          </Typography>
          <Typography variant="subtitle1" align="left" gutterBottom>
            Laval, QC
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Tracking;
