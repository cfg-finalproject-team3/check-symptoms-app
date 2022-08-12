import React from "react";
import "./Contact.css";
import Box from "@mui/material/Box";
import paperStyle from "../Login/loginStyles";
import { useRef, useState, useEffect } from "react";
import {
  Paper,
  Grid,
  Typography,
  TextField,
  Link,
  Button,
} from "@material-ui/core";
function ContactUs() {
  const classes = paperStyle();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const Contact = () => {
    return (
      <>
      <Box
        sx={{
          minHeight: "100%",
          position: "fixed",
          zIndex: 40,
          inset: 0,
          display: { xs: "none", sm: "block" },
          backgroundPosition: 'top left',
          backgroundImage:
            "url(https://res.cloudinary.com/dl6pfjd5w/image/upload/v1660085941/symptom%20checker/background-1_kptzse.png)",
        }}
      >
     </Box>
      </>
    );
  }
}

export default ContactUs;
