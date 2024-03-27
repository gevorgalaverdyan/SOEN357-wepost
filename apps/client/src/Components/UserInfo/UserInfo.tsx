import { Button, TextField } from "@mui/material";

function UserInfo(props: { isLogin: boolean; onChange: any }) {

  return (
    <>
      {!props.isLogin && (
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
          variant="filled"
          onChange={props.onChange}
        />
      )}
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        variant="filled"
        onChange={props.onChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        variant="filled"
        onChange={props.onChange}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{
          mt: 3,
          mb: 2,
          marginBottom: "20px",
        }}
      >
        {props.isLogin ? "Log In" : "Sign Up"}
      </Button>
    </>
  );
}

export default UserInfo;
