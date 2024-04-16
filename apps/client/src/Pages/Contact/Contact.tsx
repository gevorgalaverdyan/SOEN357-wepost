import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import useContactHook from "./contact.hooks";
import { IssueTypes } from "./types";
import Review from "./Review/Review";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { toast } from "react-toastify";

/**
 * Renders the Contact page component.
 * Allows users to leave a message and send an email.
 */
function Contact() {
  const { formData, onChange, setFormData } = useContactHook();
  const form = useRef<HTMLFormElement>();
  const selectBox = useRef<HTMLSelectElement>();

  const sendEmail = (e: React.SyntheticEvent) => {
    console.log(formData);
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
            selectBox.current.value = "";
            setFormData({
              name: "",
              email: "",
              issue: "",
              description: "",
            });
            toast.success("Email sent successfully!");
          },
          (error) => {
            console.log(error.text);
            form?.current?.reset();
            selectBox.current.value = "";
            setFormData({
              name: "",
              email: "",
              issue: "",
              description: "",
            });
            toast.error("Failed to send email");
          }
        );
    }
  };

  return (
    <div className="flex justify-center mt-12">
      <Card className="w-1/2">
        <CardHeader>
          <CardTitle className="text-4xl">Contact Us</CardTitle>
          <CardDescription className="text-lg">
            Leave us a message and we'll get back to you!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Box component="form" noValidate ref={form} onSubmit={sendEmail}>
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
                ref={selectBox}
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

            <Button type="submit">
              SEND <SendIcon className="ml-2" sx={{ width: "18px" }} />
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default Contact;
