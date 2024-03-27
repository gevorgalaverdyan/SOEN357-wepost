import { Box, Card, Container, Paper, Typography } from "@mui/material";
import PaymentForm from "../../Components/Order/PaymentForm";
import Confirmation from "../../Components/Order/Confirmation";
import { store } from "../../state/store";
import { useState } from "react";

const Order = () => {
  const [progress, setProgress] = useState<number>(0);
  const [data, setData] = useState({});
  const orderSteps: JSX.Element[] = [
    <PaymentForm
      onConfirmation={(d) => {
        setData(d);
        setProgress(1);
      }}
    />,
    <Confirmation data={data} />,
  ];
  return (
    <Container maxWidth="md" sx={{ mt: 2, mb: 10 }}>
      <Paper sx={{ p: 4, marginTop: "100px", borderRadius: "70px 0px" }}>
        {progress == 0 && (
          <>
            <Typography variant="h3" color={"primary"} marginBottom={5}>
              Payment
            </Typography>
            <Card
              sx={{
                p: 1,
                m: "auto",
                mb: 5,
                bgcolor: "lightgray",
                width: "70%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                <Typography variant="h4" gutterBottom>
                  Order Total:
                </Typography>
                <Typography variant="h4">
                  {store.getState().deliveryOrder.orderTotal?.toFixed(2)}$
                </Typography>
              </Box>
            </Card>
          </>
        )}
        {orderSteps[progress]}
      </Paper>
    </Container>
  );
};

export default Order;
