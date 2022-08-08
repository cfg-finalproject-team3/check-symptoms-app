import React from "react";
import "./Login.css";

import { useRef, useState, useEffect } from "react";
import paperStyle from "./loginStyles";

import {
  Paper,
  Grid,
  Typography,
  TextField,
  Link,
  Button,
} from "@material-ui/core";

function Login() {
  const classes = paperStyle();

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Grid>
        <Paper elevation={10} className={classes.paper}>
          <section>
            <Grid align="center">
              <Typography
                variant="subtitle1"
                gutterBottom
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </Typography>

              <h1>Login</h1>

              <Typography
                variant="subtitle2"
                gutterBottom
                className={classes.typography}
              >
                Don't have an account already?
                <span className="line">
                  {/* Router link here */}
                  <Link href="#" className={classes.formLink}>
                    Register
                  </Link>
                </span>
              </Typography>
            </Grid>

            <form onSubmit={handleSubmit}>
              <TextField
                id="email"
                label="Email address"
                variant="outlined"
                type="email"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                fullWidth
                margin="normal"
                size="small"
                className={classes.textField}
                required
              />

              <TextField
                id="password"
                variant="outlined"
                type="password"
                ref={userRef}
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                label="Password (8+ characters)"
                fullWidth
                margin="normal"
                size="small"
                className={classes.textField}
                required
              />
              <Typography variant="subtitle2" gutterBottom>
                <span className="line">
                  {/* Router link here */}
                  <Link href="#" className={classes.formLink}>
                    Forgot password?
                  </Link>
                </span>
              </Typography>
              <br />

              <Button
                variant="contained"
                color="primary"
                fullWidth
                className={classes.btnStyle}
              >
                Login
              </Button>
            </form>
          </section>
        </Paper>
      </Grid>
    </>
  );
}

export default Login;
