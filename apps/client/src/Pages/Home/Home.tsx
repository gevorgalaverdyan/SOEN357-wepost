import { Box, Button, Typography } from "@mui/material";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { store } from "../../state/store";
import { saveTrackingData } from "../Tracking/TrackingSlice";
import TrackShipmentSection from "./TrackShipmentSection";
import ShipNowSection from "./ShipNowSection.tsx";
import FindOutMoreSection from "./FindOutMoreSection.tsx";


/**
 * Renders the Home page component.
 *
 * @returns The rendered Home page component.
 */
const Home = () => {
    return (
        <Box className="home-container">
            {/* Track Shipment Section */}
            <TrackShipmentSection />

            {/* Ship Now Section */}
            <ShipNowSection />

            {/* Description of Service */}
            <FindOutMoreSection />
        </Box>
    );
};

export default Home;

