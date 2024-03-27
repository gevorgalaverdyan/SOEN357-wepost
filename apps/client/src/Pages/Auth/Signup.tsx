import { Box, Container, Link, Typography } from "@mui/material";
import UserInfo from "../../Components/UserInfo/UserInfo";
import useAuth from "./auth.hooks";

function Signup() {
  const { onCreateSubmit, navigate, onChange } = useAuth();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
        padding: "0 2rem",
      }}
    >
      <Container
        component="main"
        maxWidth="sm"
        sx={{
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "70px 0px",
        }}
      >
        <Box
          sx={{
            marginTop: 2,
            marginBottom: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "black",
          }}
        >
          <Typography component="h1" variant="h4" marginBottom={5}>
            Sign Up
          </Typography>

          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            onSubmit={onCreateSubmit}
          >
            <UserInfo isLogin={false} onChange={onChange} />
          </Box>

          <Link
            variant="body2"
            onClick={() => {
              navigate("/login");
            }}
          >
            {"Already have an account? Log In"}
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Signup;
