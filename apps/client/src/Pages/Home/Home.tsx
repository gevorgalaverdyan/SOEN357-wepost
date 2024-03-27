import { Box, Button, TextField, Grid, Typography } from "@mui/material";
import "./Home.css";
import startShipping from "../../assets/start-shipping.jpeg";
import takeControl from "../../assets/take-control.jpg";
import { useNavigate } from "react-router-dom";
import { store } from "../../state/store";
import { saveTrackingData } from "../Tracking/TrackingSlice";

const Home = () => {
  const navigate = useNavigate();

  const getTrackingInfo = async (value: string) => {
    const response = await fetch(
      `http://localhost:3001/api/delivery/tracking/${value}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const json = await response.json();
    store.dispatch(saveTrackingData(json));
    navigate(`/package/${value}`);
  };

  const trackDelivery = (e: any) => {
    e.preventDefault();
    // Supposedly this should send a request to fetch the delivery information
    // Set dynamic route, dispatch tracking data
    // navigate("/package/1");
    getTrackingInfo(e.target.trackingNumber.value);
  };

  return (
    <Box>
      <div className="track-shipment">
        <div className="track-title">Track your shipment</div>
        <Box
          className="tracking-form"
          component="form"
          onSubmit={trackDelivery}
        >
          <TextField
            required
            id="name"
            label="Tracking Number"
            name="trackingNumber"
          />
          <Button type="submit" variant="contained">
            Track
          </Button>
        </Box>
      </div>
      <Grid sx={{ paddingTop: "4rem" }} container>
        <Grid spacing={4} container>
          <Grid item xs={12} md={6}>
            <img className="pictures" src={startShipping} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3">Start Shipping Now!</Typography>
            <Typography marginTop={3} marginBottom={3}>
              Take Advantage Of Canada's Quickest Delivery
            </Typography>
            <Button variant="contained" onClick={() => navigate("quotation")}>
              Ship Now!
            </Button>
          </Grid>
        </Grid>
        <Grid spacing={4} container sx={{ paddingTop: "4rem" }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3">Take Control Now!</Typography>
            <Typography marginTop={3} marginBottom={3}>
              Log In or Sign Up
            </Typography>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid xs={3} item>
                <Button variant="contained" onClick={() => navigate("login")}>
                  Log In
                </Button>
              </Grid>
              <Grid xs={3} item>
                <Button
                  className="sign-up-button"
                  variant="outlined"
                  onClick={() => navigate("sign-up")}
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <img className="pictures" src={takeControl} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
