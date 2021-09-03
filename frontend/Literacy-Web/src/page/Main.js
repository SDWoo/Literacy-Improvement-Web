import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import MainWordOfTheDay from "../components/MainWordOfTheDay";
import MainThemeWord from "../components/MainThemeWord";
import MainWordMeaning from "../components/MainWordMeaning";
import SentenceParaphrase from "../components/SentenceParaphrase";
import { dailyWordsRequest, paraphraseCheckRequest } from "../redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

function Main({
  dailyWordsList,
  dailyWordsRequest,
  isLoggedIn,
  paraphraseCheckRequest,
  paraphraseResult,
}) {
  useEffect(() => {
    // 렌더링
    dailyWordsRequest();
  }, []);

  const classes = useStyles();

  console.log(dailyWordsList);

  // 사용자에게 보여지는 부분
  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <MainWordOfTheDay
              isLoggedIn={isLoggedIn}
              dailyWordsList={dailyWordsList}
            ></MainWordOfTheDay>
          </Grid>
          <Grid item xs={4}>
            <SentenceParaphrase
              paraphraseResult={paraphraseResult}
              paraphraseCheckRequest={paraphraseCheckRequest}
            ></SentenceParaphrase>
            <MainThemeWord></MainThemeWord>
          </Grid>
          <Grid item xs={12}>
            <MainWordMeaning></MainWordMeaning>
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
    isLoggedIn: state.authentication.status.isLoggedIn,
    paraphraseResult: state.paraphrase.status.result,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dailyWordsRequest: () => {
      return dispatch(dailyWordsRequest());
    },
    paraphraseCheckRequest: (body) => {
      return dispatch(paraphraseCheckRequest(body));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
