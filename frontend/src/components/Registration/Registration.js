import React from "react";
import "./Registration.css";
import Axios from "axios";

import { useState } from "react";

import {
  Paper,
  Grid,
  Typography,
  TextField,
  Link,
  Button,
} from "@material-ui/core";

import paperStyle from "../Login/loginStyles";

function Registration() {
  const classes = paperStyle();

  const [firstNameReg, setFirstNameReg] = useState("");
  const [lastNameReg, setLastNameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {
    Axios({
      method: "POST",
      data: {
        firstName: firstNameReg,
        lastName: lastNameReg,
        email: emailReg,
        password: passwordReg,
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    }).then((res) => {
      if (res.status === 200) {
        window.location.href = "/account";
      }
    });
  };

  const getUser = () => {
    Axios({
      method: "GET",

      withCredentials: true,
      url: "http://localhost:4000/account",
    }).then((res) => console.log(res));
  };

  return (
    <>
      <section className={classes.container}>
        <Grid>
          <Paper elevation={10} className={classes.paper}>
            <section>
              <Grid align="center">
                <h1>Registration</h1>

                <Typography
                  variant="subtitle2"
                  gutterBottom
                  className={classes.typography}
                >
                  Already have an account?
                  <span className="line">
                    {/* Router link here */}
                    <Link href="#" className={classes.formLink}>
                      Login
                    </Link>
                  </span>
                </Typography>
              </Grid>

              <form>
                <TextField
                  label="First Name"
                  variant="outlined"
                  type="text"
                  autoComplete="off"
                  fullWidth
                  margin="normal"
                  size="small"
                  className={classes.textField}
                  onChange={(e) => {
                    setFirstNameReg(e.target.value);
                  }}
                  required
                />
                <TextField
                  label="Last Name"
                  variant="outlined"
                  type="text"
                  autoComplete="off"
                  fullWidth
                  margin="normal"
                  size="small"
                  className={classes.textField}
                  onChange={(e) => {
                    setLastNameReg(e.target.value);
                  }}
                  required
                />
                <TextField
                  label="Email address"
                  variant="outlined"
                  type="email"
                  autoComplete="off"
                  fullWidth
                  margin="normal"
                  size="small"
                  className={classes.textField}
                  onChange={(e) => {
                    setEmailReg(e.target.value);
                  }}
                  required
                />

                <TextField
                  variant="outlined"
                  type="password"
                  label="Password (8+ characters)"
                  fullWidth
                  margin="normal"
                  size="small"
                  className={classes.textField}
                  onChange={(e) => {
                    setPasswordReg(e.target.value);
                  }}
                  required
                />
                <Typography variant="subtitle1" gutterBottom>
                  <span className="line">
                    Want to stay up to date on the latest? <br />
                    add extra line + buttons
                  </span>
                </Typography>
                <br />

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  className={classes.btnStyle}
                  onClick={register}
                >
                  Register
                </Button>
                <div>
                  <button onClick={getUser}>Go to profile</button>
                </div>
              </form>
            </section>
          </Paper>
        </Grid>
      </section>
    </>
  );
}

export default Registration;
