
import { Box, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux"; // Assuming you're using Redux for state management
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const { user } = useSelector((state: any) => state.auth);

  return (
    <Box>
      <Typography variant="h2">Profile Page</Typography>
      <Box>
        <Typography variant="h4">Name: {user.name}</Typography>
        <Typography variant="h4">Email: {user.email}</Typography>
        <Typography variant="h4">Address: {user.address}</Typography>
        {/* Add more user details here */}
        <Button component={Link} to="/profile">
          Edit Profile
        </Button>
      </Box>
    </Box>
  );
};

export default ProfilePage;
