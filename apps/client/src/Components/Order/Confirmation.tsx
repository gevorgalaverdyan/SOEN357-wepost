//export default function OrderConfirmation()
import { Container, Typography, Paper, Card, Button } from "@mui/material";
import { store } from "../../state/store";
import { useNavigate } from "react-router-dom";

interface IConfirmation {
  data?: any;
}

const Confirmation = (props: IConfirmation) => {
  const navigate = useNavigate();
  const { data } = props; // Real data from backend
  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        style={{
          padding: "20px",
          marginTop: "20px",
          backgroundColor: "lightgray",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Confirmation!
        </Typography>
        <Typography variant="h6" mt={2}>
          Drop Off Instructions
        </Typography>
        {/* Display the delivery address as the drop-off instructions */}
        <Typography>Address: {data.address.street}</Typography>
        <Typography>City: {data.address.city}</Typography>
        <Typography>State: {data.address.state}</Typography>
        <Typography>Postal Code: {data.address.postalCode}</Typography>
        <Typography>Country: {data.address.country}</Typography>
        {/* Dummy Confirmation ID and Tracking Number */}
        <Typography mt={2}>Confirmation ID: {data._id}</Typography>
        <Typography>Tracking #: {data.trackingId}</Typography>
        <Typography mt={4}>Thank you for your business.</Typography>
        <Typography>
          Please keep your confirmation id for drop off and tracking # to share
          your shipment information.
        </Typography>
        <Button variant="contained" onClick={() => navigate("/")}>
          Done!
        </Button>
      </Paper>
    </Container>
  );
};

export default Confirmation;
