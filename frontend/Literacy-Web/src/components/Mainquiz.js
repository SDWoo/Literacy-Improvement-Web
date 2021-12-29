import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      paddingTop: theme.spacing(3),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
      paddingBottom: theme.spacing(5),
  
      // padding: theme.spacing(10),
      // width: '100%',
      // maxWidth: '30ch',
      height: "42ch",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #D9D9D9",
      borderRadius: "20px",
    },
    test: {
      float: "right",
    },
    box: {
      border: "1px solid #D9D9D9",
    },
    bottom: {
      display: "inline",
      borderBottom: "1px solid #D9D9D9",
    },
}));

export default function Mainquiz({
    quizStatus
})
{
    let history = useHistory();
    const classes = useStyles();
    const handleClick = () => {
      console.log(quizStatus);
        setTimeout(() => {
            history.push({
                pathname: '/Quiz',
                state: quizStatus
            });
        }, 1000);
    }
return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <h3>오늘의 퀴즈</h3>
        </Grid>
        <Grid item>
          <Button color="primary" onClick={handleClick} variant="contained">
            퀴즈로 가기
          </Button>
        </Grid>
      </Grid>
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
