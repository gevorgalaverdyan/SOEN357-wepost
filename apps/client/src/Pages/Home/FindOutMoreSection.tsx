import { Box, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeliveryImage from "../../assets/start-shipping.jpg"; // Update the import path to your image
import { Button } from "@/Components/ui/button";

const FindOutMoreSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        padding: " 0 50px",
      }}
      className="mt-16 mb-16"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
              marginBottom: "30px",
              paddingTop: "30px",
              textAlign: "left",
              marginLeft: "1rem",
              color: "#10142c",
            }}
          >
            WePost: Your Nationwide Conduit for Careful Couriers{" "}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, textAlign: "justify", padding: "20px" }}
          >
            At WePost, delivery is just the beginning. With a steadfast
            commitment to simplicity, uniqueness, and a tailored touch, we craft
            a customer experience that's as vast and varied as Canada itself.
            Agile and personable, we're more than a service; we're your
            steadfast partner, creating seamless solutions that enrich lives and
            empower businesses from sea to shining sea. Trust us to be in your
            corner, every step of the way.{" "}
          </Typography>
          <Button onClick={() => navigate("")} className="text">
            Find out more
          </Button>
        </Grid>
        <Grid item xs={12} md={6} className="">
          <Box
            component="img"
            src={DeliveryImage}
            alt="Delivery van in front of a bridge"
            sx={{ width: "100%", height: "100%" }}
            className="mt-3"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FindOutMoreSection;
