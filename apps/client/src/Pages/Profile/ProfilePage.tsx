
import { Box, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux"; // Assuming you're using Redux for state management
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const userData = useSelector((state) => state.userData); // Assuming you have a Redux store with user data

  return (
    <Box>
      <Typography variant="h2">Profile Page</Typography>
      <Box>
        <Typography variant="h4">Name: {userData.name}</Typography>
        <Typography variant="h4">Email: {userData.email}</Typography>
        <Typography variant="h4">Address: {userData.address}</Typography>
        {/* Add more user details here */}
        <Button component={Link} to="/profile/edit">
          Edit Profile
        </Button>
      </Box>
    </Box>
  );
};

export default ProfilePage;
