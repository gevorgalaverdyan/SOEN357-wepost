import { Box, Typography, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; 

const EditProfilePage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.auth);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address);
  const [password, setPassword] = useState(""); 

  const handleSaveProfile = () => {
    // dispatch(updateUserProfile({ name, email, address, password }));
  };

  return (
    <Box>
      <Typography variant="h2">Edit Profile</Typography>
      <Box>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleSaveProfile}>Save</Button>
      </Box>
    </Box>
  );
};

export default EditProfilePage;
