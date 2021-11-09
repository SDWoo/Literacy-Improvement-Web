import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import OAuth from "../components/login/OAuth";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

function Login({}) {
  useEffect(() => {
    // 렌더링
  }, []);

  const classes = useStyles();

  // 사용자에게 보여지는 부분
  return (
    <div>
      <div className={classes.root}>
        <Grid
          container
          spacing={3}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <h2>LOGIN</h2>
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <OAuth></OAuth>
          </Grid>
        </Grid>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Flip}
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  return { isLoggedIn: state.kakaoAuth.status.isLoggedIn };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
