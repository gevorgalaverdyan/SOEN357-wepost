import { Box, Button, Typography } from "@mui/material";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { store } from "../../state/store";
import { saveTrackingData } from "../Tracking/TrackingSlice";
import TrackShipmentSection from "./TrackShipmentSection";
import ShipNowSection from "./ShipNowSection.tsx";
import FindOutMoreSection from "./FindOutMoreSection.tsx";


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
        <Box className="home-container">
            {/* Track Shipment Section */}
            <TrackShipmentSection />

            {/* Ship Now Section */}
            <ShipNowSection />

            {/* Description of Service */}
            <FindOutMoreSection />

            {/* Footer */}
            <Box className="footer">
                <Typography variant="body2" color="textSecondary">Quick Links</Typography>
                <Button onClick={() => navigate("/")}>Home</Button>
                <Button onClick={() => navigate("/about")}>About Us</Button>
                <Button onClick={() => navigate("/contact")}>Contact</Button>
            </Box>
        </Box>
    );
};

export default Home;

