import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import TopBar from "../components/TopBar";
import WordOfTheDay from "../components/WordOfTheDay";
import ThemeWord from "../components/ThemeWord";
import Side from "../components/Side";
import { dailyWordsRequest } from "../redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

function TestMain({ dailyWordsList, dailyWordsRequest }) {
  useEffect(() => {
    // 렌더링
    dailyWordsRequest();
    console.log(1);
  }, []);

  const classes = useStyles();

  console.log(dailyWordsList);

  // 사용자에게 보여지는 부분
  return (
    <div>
      <TopBar></TopBar>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <WordOfTheDay></WordOfTheDay>
          </Grid>
          <Grid item xs={3}>
            <ThemeWord></ThemeWord>
          </Grid>
          <Grid item xs={2}>
            <Side></Side>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    // userID: state.authentication.status.currentUser,
    dailyWordsList: state.dailyWords.status.dailyWordsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //   getMainRequest: (category) => {
    //     return dispatch(getMainRequest(category));
    //   }
    dailyWordsRequest: () => {
      return dispatch(dailyWordsRequest());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TestMain);
