import { Container, Paper, Typography } from "@mui/material";
import DeliveryAddress from "../../Components/Quotation/DeliveryAddress";
import Slider from "../../Components/Quotation/Slider";
import { useState } from "react";
import PackageDescription from "../../Components/Quotation/PackageDetails";
import Summary from "../../Components/Quotation/Summary";

const Quotation = () => {
  const [progress, setProgress] = useState<number>(0);

  const quotationSteps: JSX.Element[] = [
    <DeliveryAddress
      onAddressConfirm={() => {
        setProgress(1);
      }}
    />,
    <PackageDescription
      onModifyAddress={() => {
        setProgress(0);
      }}
      onPackageConfirm={() => {
        setProgress(2);
      }}
    />,
    <Summary
      onModifyPackage={() => {
        setProgress(1);
      }}
    />,
  ];
  return (
    <Container maxWidth="md">
      <Paper
        sx={{
          p: 4,
          marginTop: "100px",
          borderRadius: "70px 0px",
        }}
        elevation={5}
      >
        <Typography variant="h3" color={"primary"} marginBottom={5}>
          Find a rate
        </Typography>
        {quotationSteps[progress]}
        <Slider activeState={progress}></Slider>
      </Paper>
    </Container>
  );
};

export default Quotation;
