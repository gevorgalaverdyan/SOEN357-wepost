import { Box, TextField, Typography, InputAdornment } from "@mui/material";
import startShipping from "../../assets/shipping0.jpg";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Ensure your CSS file is updated accordingly
import { Button } from "@/Components/ui/button";

const TrackShipmentSection = () => {
  const navigate = useNavigate();

  const handleTrackClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Assuming you have a reference to the input, retrieve the tracking number
    // const trackingNumber = ...;

    // let trackingNumber;
    navigate("deliveries/0");

    // navigate(`/track/${trackingNumber}`);
  };

  return (
    <Box
      className="track-shipment-section"
      sx={{ position: "relative", textAlign: "center", color: "white" }}
    >
      <img
        src={startShipping}
        alt="Delivery background"
        style={{ width: "100%", height: "100%" }}
      />
      <Box
        className="overlay"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <Typography variant="h2" sx={{ marginBottom: "1rem" }}>
          Canada’s Choice for Reliable Parcel Delivery
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: "2rem" }}>
          Commercial Excellence and Residential Care in Every Parcel
        </Typography>
        <Box
          component="form"
          onSubmit={handleTrackClick}
          className="flex flex-row items-center justify-center w-1/2"
        >
          <TextField
            variant="outlined"
            placeholder="shipment #, reference #, notice # or parcel#"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
              classes: { root: "tracking-input" },
            }}
            sx={{
              maxWidth: "500px",
              width: "100%",
              ".MuiOutlinedInput-root": {
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.2)", // Adjust the opacity as needed
                border: "none",
                "& fieldset": {
                  border: "none",
                },
                "&:hover fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "none",
                },
              },
            }}
          />
          <Button
            type="submit"
            style={{ marginLeft: "1rem", backgroundColor: "#10142c" }}
          >
            Track parcel
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TrackShipmentSection;
