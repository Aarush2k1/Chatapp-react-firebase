import React from "react";
import AppBar from "@material-ui/core/AppBar";
import useStyles from "./styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { WhatsApp } from "@material-ui/icons";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { auth } from "../../services/firebase";
import { FirebaseAuth } from "react-firebaseui";
import firebase from "firebase";

export default function Album() {
  const loginAnonymously = () => {
    const anonymous = "anonymous";
    auth.signInAnonymously().catch((error) => alert(`${error}`));
  };
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };
  const classes = useStyles();

  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative" className={classes.navColor}>
          <Toolbar>
            <WhatsApp className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Chat Application
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Chat Application
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary" href="/signup">
                      Signup
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="secondary" href="/login">
                      Login
                    </Button>
                  </Grid>
                </Grid>
                <Grid item>
                  <FirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
                </Grid>
                <Grid item>
                  <Button variant="outlined" onClick={loginAnonymously}>
                    <PermIdentityIcon />
                    Continue Anonymously
                  </Button>
                </Grid>
              </div>
            </Container>
          </div>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Something here to give the footer a purpose!
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    </>
  );
}
