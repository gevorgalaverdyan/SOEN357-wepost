import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const stepss = [
  {
    label: 'In process - recipient city',
    description: `11:30AM`,
  },
  {
    label: 'In transit - sending city',
    description: `12:30AM`,
  },
  {
    label: 'Parcel received at factory',
    description: `1:30AM`,
  },
  {
    label: 'Out for delivery',
    description: `2:30AM`,
  },
];

export default function HistoryStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const connectorStyle = {
    "& .MuiStepConnector-lineVertical": {
      minHeight: "5rem", // Adjust the thickness of the line
      width: "50%", // Make the connectors longer
      marginLeft: "7%", // Center the line
    },
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} orientation="vertical" sx={{ ...connectorStyle }}>
        {stepss.map((step, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={step.label} {...stepProps}>
              <StepLabel {...labelProps}
                StepIconProps={{
                  style: {
                    fontSize: "3.5rem", // Adjust the font size here
                  }
                }}
              > 
              <div>
                <div>{step.label}</div>
                <div>- {step.description}</div>
              </div>        
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
