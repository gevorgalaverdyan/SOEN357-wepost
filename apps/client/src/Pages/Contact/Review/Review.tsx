import { Rating, Typography } from "@mui/material";
import { useState } from "react";

function Review() {
  const [value, setValue] = useState<number|null>(0)
  return (
    <>
      <Typography component="legend" color="primary">Rate your overall experience with Postify</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </>
  );
}

export default Review