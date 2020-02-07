import React, { useState } from "react";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import json from "./JsonData/login.json";
import { connect } from "react-redux";
import { loginAction } from "./actions/loginAction";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({

  loginAction: () => dispatch(loginAction())
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function SignIn(props) {

  function loginAction(event) {
    props.loginAction();
    
  }


  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  const [passwordValidation, setpasswordValidation] = useState(false);

  const [emailValidation, setEmailValidation] = useState(false);

  function handleEmail(e) {

    setEmail(e);

    if (e.length > 0) {
      setEmailError(false);
    } else {
      setEmailError(true);
      setEmailValidation(false);
    }
  }

  function handlePassword(e) {
    setpassword(e);

    if (e.length > 0) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
      setEmailValidation(false);
    }
  }

  function handleSubmit() {
    if (json.username == email) {
      setEmailValidation(false);
    } else {
      setEmailValidation(true);
    }
    if (json.password == password) {
      setpasswordValidation(false);
    } else {
      setpasswordValidation(true);
    }

    if (json.username == email && json.password == password) {
      props.history.push("/ListDetails");
    }
  }
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          helperText={emailError ? "Please fill the Email" : ""}
          id={emailError ? "standard-error-helper-text" : "email"}
          label="Email Address"
          name="email"
          value={email === undefined ? "" : email}
          autoComplete="email"
          autoFocus
          onChange={event => handleEmail(event.target.value)}
        />

        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id={passwordError ? "standard-error-helper-text" : "password"}
          helperText={passwordError ? "Please fill the Password" : ""}
          value={password === undefined ? "" : password}
          onChange={event => handlePassword(event.target.value)}
          autoComplete="current-password"
        />

        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />

        {emailValidation ? <p>User Name is not matiching</p> : ""}
        {passwordValidation ? <p>Password is not matiching</p> : ""}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={loginAction}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);