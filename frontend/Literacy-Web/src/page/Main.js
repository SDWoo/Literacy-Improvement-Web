import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import MainWordOfTheDay from "../components/MainWordOfTheDay";
import MainThemeWord from "../components/MainThemeWord";
import MainWordMeaning from "../components/WordMeaning/MainWordMeaning";
import { dailyWordsRequest, oneWordRequest } from "../redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

function Main({ dailyWordsList, wordStatus, dailyWordsRequest }) {
  useEffect(() => {
    // 렌더링
    dailyWordsRequest();

  }, []);

  const test = () => { };
  const classes = useStyles();

  console.log(dailyWordsList);

  // 사용자에게 보여지는 부분
  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <MainWordOfTheDay
              dailyWordsList={dailyWordsList}
              oneWordRequest={oneWordRequest}
            ></MainWordOfTheDay>
          </Grid>
          <Grid item xs={4}>
            <MainThemeWord
              oneWordRequest={oneWordRequest}
              wordStatus={wordStatus}
            ></MainThemeWord>
          </Grid>
          <Grid item xs={12}>
            <MainWordMeaning
              oneWordRequest={oneWordRequest}
              wordStatus={wordStatus}
            ></MainWordMeaning>
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
    wordStatus: state.oneWord.status.wordStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dailyWordsRequest: () => {
      return dispatch(dailyWordsRequest());
    },
    oneWordRequest: (word) => {
      return dispatch(oneWordRequest(word));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
