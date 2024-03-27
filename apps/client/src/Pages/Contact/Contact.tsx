import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import useContactHook from "./contact.hooks";
import { IssueTypes } from "./types";
import Review from "./Review/Review";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const { formData, onChange } = useContactHook();
  const form = useRef<HTMLFormElement>();

  const sendEmail = (e: React.SyntheticEvent) => {
    console.log(formData)
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_89ohwlh",
          "template_i9h9cxs",
          form.current,
          "hMDNwlYgUr4UnWNKZ"
        )
        .then(
          (result) => {
            console.log(result.text);
            form?.current?.reset();
            alert("Email sent Successfully!");
          },
          (error) => {
            console.log(error.text);
            form?.current?.reset();
            alert("Some error occured! Try again later!");
          }
        );
    }
  };

  return (
    <Container
      maxWidth="xl"
      component="main"
      sx={{
        backgroundColor: "white",
        borderRadius: "70px 0px",
        marginTop: "100px",
      }}
    >
      <Box>
        <Typography variant="h3" color={"primary"}>
          Contact Us
        </Typography>
        <Typography variant="h6" color={"primary"} marginTop={2}>
          Leave us a message and we'll get back to you!
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
          ref={form}
          onSubmit={sendEmail}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            onChange={onChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={onChange}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="select-label">Issue</InputLabel>
            <Select
              labelId="select-label"
              id="simple-select"
              value={formData.issue}
              label="issue"
              onChange={onChange}
              name="issue"
              required
            >
              <MenuItem value={IssueTypes.support}>Need Support</MenuItem>
              <MenuItem value={IssueTypes.feedback}>Leave a Review</MenuItem>
            </Select>
          </FormControl>

          {formData.issue === IssueTypes.feedback && <Review />}
          <TextField
            placeholder="Describe your issue"
            multiline
            rows={5}
            fullWidth
            margin={"normal"}
            name="description"
            onChange={onChange}
            required
          />

          <Button
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            sx={{ margin: "10px 0 10px 0" }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Contact;
